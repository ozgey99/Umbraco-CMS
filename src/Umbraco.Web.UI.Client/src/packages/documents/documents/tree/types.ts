import type { UmbDocumentEntityType, UmbDocumentRootEntityType } from '../entity.js';
import type { UmbUniqueTreeItemModel, UmbUniqueTreeRootModel } from '@umbraco-cms/backoffice/tree';
import type { ContentStateModel } from '@umbraco-cms/backoffice/backend-api';

export interface UmbDocumentTreeItemModel extends UmbUniqueTreeItemModel {
	entityType: UmbDocumentEntityType;
	noAccess: boolean;
	isTrashed: boolean;
	isProtected: boolean;
	documentType: {
		id: string;
		icon: string;
		hasListView: boolean;
	};
	variants: Array<UmbDocumentTreeItemVariantModel>;
}

export interface UmbDocumentTreeRootModel extends UmbUniqueTreeRootModel {
	entityType: UmbDocumentRootEntityType;
}

export interface UmbDocumentTreeItemVariantModel {
	name: string;
	culture: string | null;
	state: ContentStateModel; // TODO: make our own enum for this. We might have states for "unsaved changes" etc.
}
