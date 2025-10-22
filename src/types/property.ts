export type properyType = "sale" | "rent";
export type porperty = {
    id: string;
    name: string;
    type: properyType;
    square: number;
    price: number;
    address: string;
    bedrooms?: number;
    bathrooms?: number;
    imageUrl: string;
}