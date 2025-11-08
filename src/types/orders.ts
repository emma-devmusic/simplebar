import { Dispatch, SetStateAction } from 'react';
import { NavigateFunction } from 'react-router-dom';

export type OrderStatus =
    | 'pendiente'
    | 'confirmado'
    | 'finalizado'
    | 'cancelado'
    | 'rechazado';

export type OrderType = 'local' | 'delivery' | 'pickup';

export type PaymentStatus = 'pendiente' | 'aprobado' | 'rechazado' | 'parcial';

export type PaymentMethod = 'efectivo' | 'debito' | 'credito' | 'transferencia';

export type ShipmentStatus =
    | 'pendiente'
    | 'confirmado'
    | 'finalizado'
    | 'cancelado'
    | 'rechazado';

export interface ICustomer {
    fullname: string;
    phone: string; // Estructura: (+)549(caracteristica sin cero)(numero sin 15)
    email?: string | null;
}

export interface Customer extends ICustomer {
    id: number;
}

export interface IOrderItem {
    product_variation_id: number;
    name: string;
    unit_price: number;
    quantity: number;
    total_price: number; // Valor sin descuento
}

export interface OrderItem extends IOrderItem {
    id: number;
}

export interface OrderItemCreate {
    product_variation_id: number;
    name: string;
    unit_price: number;
    quantity: number;
}

export interface IDestinationAddress {
    address: string;
    city?: string;
    zip_code?: string;
    country?: string; // Default: ARG
    notes?: string;
}

export interface DestinationAddress extends IDestinationAddress {
    id: number;
}

export interface IShipment {
    branch_id?: number;
    status?: ShipmentStatus; // Default: pendiente
    shipping_cost: number;
    destination_address: IDestinationAddress;
    shipment_date?: Date;
    estimated_delivery_date?: Date;
    actual_delivery_date?: Date;
    carrier?: unknown;
    tracking_number?: string;
}

export interface IPayment {
    order_id?: number; // Required si se crea fuera de la orden
    status?: PaymentStatus; // Default: pendiente
    method: PaymentMethod;
    amount?: number; // Valor sin descuento
    notes?: string;
    remaining?: number;
}

export interface IPointOfSale {
    id: number; // ID del punto de venta
    global_id: number; // ID global del punto de venta
    name: string; // Nombre del punto de venta
    code: string;
    notes?: string;
    branch_id: number;
    is_delivery: boolean;
}

/* Endpoint de creación de rutas (POST) -> {baseUrl}/order/ */
// Interfaz de la request

export interface OrderCreate {
    status?: OrderStatus; // default: pendiente
    point_of_sales?: number[]; // required si type es local
    payment?: IPayment;
    items: OrderItemCreate[];
    shipment?: IShipment;
    customer?: ICustomer;
    type: OrderType; // default: local
    customer_name?: string; // Nombre del cliente, requerido si no se pasa customer
    discount?: number;
}

/* Endpoint de actualización de rutas (PATCH) -> {baseUrl}/order/ */
// Interfaz de la request

export interface UpdateOrderInterface {
    id: number;
    status?: OrderStatus; // default: pendiente
    point_of_sales?: number[]; // required si type es local
    payment?: Payment;
    items?: OrderItemCreate[] | OrderItem[];
    shipment?: IShipment;
    customer?: ICustomer | Customer;
    type?: OrderType; // default: local
    customer_name?: string;
    discount?: number;
    notes?: string;
}

export interface UpdatePaymentInterface {
    id: number;
    order_id?: number; // Required si se crea fuera de la orden
    status?: PaymentStatus; // Default: pendiente
    method?: PaymentMethod;
    amount?: number; // Valor sin descuento
    discount?: number;
    notes?: string;
    partial_amount?: number;
}

/************************************ Busqueda de ordenes ************************************/

export interface Shipment extends IShipment {
    id: number;
}
export interface Payment extends IPayment {
    id: number;
}

// Ruta: {baseUrl}/order/{id}

export interface OrderItemDataSearchResponse {
    id: number;
    status: OrderStatus;
    type: OrderType;
    amount_with_discount?: number; // Monto total con descuento
    total_amount: number; // Monto total sin descuento (items + shipment)
    total_items: number; // Monto de productos
    order_number: number; // Numero de orden
    customer: Customer;
    customer_name?: string; // Nombre del cliente si no se pasa phone
    items: OrderItem[];
    point_of_sales: IPointOfSale[];
    shipment?: Shipment;
    payment?: Payment;
    created_at: Date; // YYYY-MM-DD HH:mm:SS
    updated_at: Date; // YYYY-MM-DD HH:mm:SS
    discount?: number | null;
    notes?: string;
}

export interface Meta {
    totalItems: number;
    itemsCount: number;
    itemsPerPage: number;
    totalPages: number;
    currentPage: number;
}

export interface PaginatedOrder {
    items: OrderItemDataSearchResponse[];
    meta: Meta;
}

export interface NewOrderDataReponse {
    id: number;
}

/**** Filtrado de ordenes ****/

export interface OrderQuery {
    id?: number; // Filtrado por id de orden
    order_number?: number; // Filtrado por numero de orden
    point_of_sale_id?: number; // Filtrado por id de punto de venta
    status?: OrderStatus;
    type?: OrderType;
    total_amount?: number; // Filtrado por monto total de la orden

    items_name?: string; //Filtrado por nombre de algun producto
    items_unit_price?: number; // Filtrado por precio unitario de algun producto
    items_quantity?: number; // Filtrado por cantidad de algun producto

    customer_fullname?: string; // Filtrado por nombre del cliente
    customer_phone?: string; // Filtrado por telefono del cliente
    customer_email?: string; // Filtrado por email del cliente

    payment_amount?: number; // Filtrado por monto de pago
    payment_discount?: number; // Filtrado por descuento de pago
    payment_status?: PaymentStatus;
    payment_method: PaymentMethod;

    shipment_cost?: number;
    shipment_status?: ShipmentStatus;

    cashflow_open?: boolean; // Filtrado por cashflow abierto
}

// Dispatch
export interface DingPayload {
    setIsLoading: Dispatch<SetStateAction<boolean>>;
    onSuccess?: (response?: unknown) => void;
}

export interface GetOrderPayload extends DingPayload {
    path: string;
}

export interface GetOrderByIdPayload extends DingPayload {
    path: string;
    id: number;
}

export interface NewOrderPayload extends DingPayload {
    order: OrderCreate;
    path: string;
    navigate: NavigateFunction;
}

export interface UpdateOrderPayload extends DingPayload {
    order: UpdateOrderInterface;
    path: string;
}

export interface CreatePaymentPayload extends DingPayload {
    payment: IPayment;
    path: string;
}

export interface UpdatePaymentPayload extends DingPayload {
    payment: UpdatePaymentInterface;
    path: string;
}
