import { MetaDataSearchResponse } from './api';
import { DingPayload } from './product';

export interface CategoryDataSearchResponse {
    items: Category[];
    meta: MetaDataSearchResponse;
}

export interface Category {
    id: number;
    name: string;
    description: string;
    subcategories: SubCategory[];
}

export interface SubCategory {
    id: number;
    name: string;
    description: string;
}

export interface GetCategoryPayload extends DingPayload {
    path: string;
}

export interface DataCategorySearchResponse {
    items: ItemCategories[];
    meta: Meta;
}

export interface ItemCategories {
    id: number;
    name: string;
    description: string;
    subcategories?: ItemSubcategories[];
}

export interface ItemSubcategories {
    id: number;
    name: string;
    description: string;
}

export interface Meta {
    totalItems: number;
    itemsCount: number;
    itemsPerPage: number;
    totalPages: number;
    currentPage: number;
}

export interface CategorySelected {
    id?: number;
    name: string;
    description: string;
    category_id?: number | string;
    isSubcategory?: boolean;
    subcategories?: ItemCategories[]
}

export interface SelectCategoryEditablePayload {
    id: number
    name: string;
    description: string;
    isSubcategory?: boolean
}