import { UmbTemporaryFileRepository } from './temporary-file.repository.js';
import { UmbArrayState } from '@umbraco-cms/backoffice/observable-api';
import type { UmbControllerHost } from '@umbraco-cms/backoffice/controller-api';
import { UmbControllerBase } from '@umbraco-cms/backoffice/class-api';
import { UmbId } from '@umbraco-cms/backoffice/id';

///export type TemporaryFileStatus = 'success' | 'waiting' | 'error';

export enum TemporaryFileStatus {
	SUCCESS = 'success',
	WAITING = 'waiting',
	ERROR = 'error',
}

export interface UmbTemporaryFileModel {
	file: File;
	unique: string;
	status: TemporaryFileStatus;
}

export interface UmbTemporaryFileQueueModel extends Partial<UmbTemporaryFileModel> {
	file: File;
}

export class UmbTemporaryFileManager<
	UploadableItem extends UmbTemporaryFileQueueModel = UmbTemporaryFileQueueModel,
> extends UmbControllerBase {
	#temporaryFileRepository;

	#queue = new UmbArrayState<UploadableItem>([], (item) => item.unique);
	public readonly queue = this.#queue.asObservable();

	constructor(host: UmbControllerHost) {
		super(host);
		this.#temporaryFileRepository = new UmbTemporaryFileRepository(host);
	}

	async uploadOne(uploadableItem: UploadableItem): Promise<UploadableItem> {
		this.#queue.setValue([]);

		const item: UploadableItem = {
			unique: UmbId.new(),
			status: TemporaryFileStatus.WAITING,
			...uploadableItem,
		};

		this.#queue.appendOne(item);
		return (await this.#handleQueue())[0];
	}

	async upload(queueItems: Array<UploadableItem>): Promise<Array<UploadableItem>> {
		this.#queue.setValue([]);

		const items = queueItems.map(
			(item): UploadableItem => ({ unique: UmbId.new(), status: TemporaryFileStatus.WAITING, ...item }),
		);
		this.#queue.append(items);
		return this.#handleQueue();
	}

	removeOne(unique: string) {
		this.#queue.removeOne(unique);
	}

	remove(uniques: Array<string>) {
		this.#queue.remove(uniques);
	}

	async #handleQueue() {
		const filesCompleted: Array<UploadableItem> = [];
		const queue = this.#queue.getValue();

		if (!queue.length) return filesCompleted;

		for (const item of queue) {
			if (!item.unique) throw new Error(`Unique is missing for item ${item}`);

			const { error } = await this.#temporaryFileRepository.upload(item.unique, item.file);
			await new Promise((resolve) => setTimeout(resolve, (Math.random() + 0.5) * 1000)); // simulate small delay so that the upload badge is properly shown

			let status: TemporaryFileStatus;
			if (error) {
				status = TemporaryFileStatus.ERROR;
				this.#queue.updateOne(item.unique, { ...item, status });
			} else {
				status = TemporaryFileStatus.SUCCESS;
				this.#queue.updateOne(item.unique, { ...item, status });
			}

			filesCompleted.push({ ...item, status });
		}

		return filesCompleted;
	}
}
