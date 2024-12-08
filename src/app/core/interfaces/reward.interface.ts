export interface Reward {
    pk: number;
    name: string;
    points: number;
    display_img_url: string;
    quantity: number;
    valid_until: string;
    low_quantity: number;
}

export interface Category {
    id: number;
    name: string;
    expanded: boolean;
    selected: boolean;
}