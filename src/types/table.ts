export type tdKey = 'name' | 'username' | 'last_name' | 'first_name' | 'role' | 'type' | 'email' | 'phone' | 'address' | 'id' | 'price' | 'stock' | 'category' | 'sub_category' | 'description'

export interface UserCreated {
    name: string;
    last_name: string;
    role: string;
    phone: string;
    date_created: string;
}

export type FilterOptionsId = 'term' | 'name' | 'last_name' | 'email' | 'role_id' | 'role_description' | 'active' | 'price_start' | 'price_end' | 'date_start'

export interface FilterOption {
    id: FilterOptionsId;
    label: string;
    type: 'text' | 'select' | 'date' | 'number' | 'checkbox';
    selectOptions?: Array<{ value: string | number; label: string }>;
}

export type TextFilterOption = Omit<FilterOption, 'type'> & { type: 'text' };

export type NonTextFilterOption = Omit<FilterOption, 'type'> & {
    type: 'select' | 'date' | 'number' | 'checkbox';
};
