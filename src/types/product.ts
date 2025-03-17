import { MetaDataSearchResponse } from "./api"

export interface ProductDataSearchResponse {
    items: Product[],
    meta: MetaDataSearchResponse
}

export interface Product {
    data_created: string | Date,
    data_modified: string | Date,
    id: number,
    name: string,
    active: boolean,
    client_can_modify: boolean,
    manager_can_modify: boolean,
    product_variations: ProductVariation[],
    created_status: Created_status,
    supplier_products: any[],
    sub_category_id: number,
    sub_category_description: string,
    category_id: number,
    category_description: string
}

export interface ProductVariation {
    data_created: string | Date,
    data_modified: string | Date,
    id: number,
    name: string,
    description: string,
    code: string,
    sku: string,
    price: string | number,
    weight: null | number | string,
    productVariationVariations: ProductVariationVariation[],
    stocks: Stock,
    productImages: ProductImage[]
}

export interface ProductVariationVariation {
    id: string,
    variation: Variation
}

export interface Variation {
    id: number,
    name: string,
    unit_measurement: string
}

export interface Stock {
    id: number,
    quantity: string | number,
    due_date: null | string
}

export interface ProductImage {
    data_created: string | Date,
    data_modified: string | Date,
    data_deleted: null | string | Date,
    user_created: null | any | unknown,
    user_modified: null | any | unknown,
    user_deleted: null | any | unknown,
    id: string,
    name: string,
    description: string,
    url_image: string,
    main_image: boolean
}
export interface Created_status {
    data_created: string | Date,
    data_modified: string | Date,
    id: number,
    description: string
}