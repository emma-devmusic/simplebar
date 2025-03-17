import { MetaDataSearchResponse } from "./api"

export interface CategoryDataSearchResponse {
    items: Category[],
    meta: MetaDataSearchResponse
}

export interface Category {
    id: number,
    name: string,
    description: string,
    subcategories: SubCategory[]

}

export interface SubCategory {
    id: number,
    name: string,
    description: string
}