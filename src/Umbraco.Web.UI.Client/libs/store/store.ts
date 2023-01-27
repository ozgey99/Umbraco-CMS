import type { Observable } from 'rxjs';

export interface UmbDataStoreIdentifiers {
	key?: string;
	[more: string]: any;
}

export interface UmbDataStore {
	readonly storeAlias: string;
}

export interface UmbTreeStore<T> extends UmbDataStore {
	getTreeRoot(): Observable<Array<T>>;
	getTreeItemChildren(key: string): Observable<Array<T>>;
}

export interface UmbEntityDetailStore<T> extends UmbDataStore {

	/**
	 * @description - Request scaffold data by entityType and . The data is added to the store and is returned as an Observable.
	 * @param {string} key
	 * @return {*}  {T}
	 * @memberof UmbEntityDetailStore
	 */
	getScaffold: (entityType: string, parentKey: string | null) => T;

	/**
	 * @description - Request data by key. The data is added to the store and is returned as an Observable.
	 * @param {string} key
	 * @return {*}  {(Observable<T>)}
	 * @memberof UmbEntityDetailStore
	 */
	getByKey(key: string): Observable<T | undefined>;

	/**
	 * @description - Save data.
	 * @param {object} data
	 * @return {*}  {(Promise<void>)}
	 * @memberof UmbEntityDetailStore
	 */
	save(data: T[]): Promise<void>;
}


export interface UmbContentStore<T> extends UmbEntityDetailStore<T> {

	// TODO: make something that is specific for UmbContentStore
	save(data: T[]): Promise<void>;

}
