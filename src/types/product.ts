import { Dispatch, SetStateAction } from 'react';
import { MetaDataSearchResponse } from './api';

export interface ProductDataSearchResponse {
    items: Product[];
    meta: MetaDataSearchResponse;
}

export interface Product {
    data_created: Date;
    data_modified: Date;
    id: number;
    name: string;
    active: boolean;
    client_can_modify: boolean;
    manager_can_modify: boolean;
    product_variations: ProductVariation[];
    created_status: CreatedStatus;
    supplier_products: any[];
    sub_category_id: number;
    sub_category_description: string;
    category_id: number;
    category_description: string;
}

export interface ProductVariation {
    data_created: Date;
    data_modified: Date;
    id: number;
    name: string;
    description: string;
    code: string;
    sku: string;
    price: number;
    weight: null;
    productVariationVariations: ProductVariationVariation[];
    stocks: Stocks;
    productImages: ProductImage[];
}

export interface ProductVariationVariation {
    id: string;
    variation: Variation;
}

export interface Variation {
    id: number;
    name: string;
    unit_measurement: string;
}

export interface Stocks {
    id: number;
    quantity: number;
    due_date: null;
}

export interface ProductImage {
    data_created: Date;
    data_modified: Date;
    data_deleted: null;
    user_created: null;
    user_modified: null;
    user_deleted: null;
    id: string;
    name: string;
    description: string;
    url_image: string;
    main_image: boolean;
}

export interface CreatedStatus {
    data_created: Date;
    data_modified: Date;
    id: number;
    description: string;
}

export interface DingPayload {
    setIsLoading: Dispatch<SetStateAction<boolean>>
    onSuccess?: () => void;
}

export interface GetProductPayload extends DingPayload {
    path: string;
}

export interface GetProductByIdPayload extends DingPayload {
    path: string;
}