// Representación de un ítem del pedido
export interface OrderItem {
    id: string;
    name: string;
    description: string;
    quantity: number;
    unit_price: number;
    notes?: string; // Opcional
}

// Información del cliente
export interface Customer {
    id: string;
    name: string;
    phone: string;
    email?: string;
    address?: string;
}

// Información del mozo
export interface Waiter {
    id: string;
    name: string;
}

// Estados válidos de un pedido
export type ORDER_STATUS = "IN_PROCESS" | "READY" | "DELIVERED" | "CANCELED" | "REJECTED" | "FINALIZED";

// Métodos de pago
export type PAYMENT_METHOD = "CASH" | "CARD" | "PENDING";

// Tipos de pedido
export type ORDER_TYPE = "DINE_IN" | "DELIVERY";


// Dirección para pedidos a domicilio
export interface DeliveryAddress {
    street: string;
    city: string;
    postal_code: string;
    notes?: string; // Ejemplo: "Dejar en portería"
}

// Pedido completo
export interface Order {
    id: string;
    table_number?: number; // Opcional, solo para dine_in
    type: ORDER_TYPE;
    customer: Customer;
    waiter?: Waiter; // Opcional, solo para dine_in
    items: OrderItem[];
    status: ORDER_STATUS;
    estimated_time: string;
    total: number;
    delivery_address?: DeliveryAddress; // Opcional, solo para delivery
    delivery_fee?: number; // Opcional, solo para delivery
    payment_method: PAYMENT_METHOD;
    order_date_time: string; // ISO 8601 string
}
