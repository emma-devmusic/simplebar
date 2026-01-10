export interface CartProduct {
    id: number;
    name: string;
    price: number;
}

export interface CartItem {
    product: CartProduct;
    quantity: number;
}
