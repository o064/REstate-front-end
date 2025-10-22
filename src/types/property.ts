export type PropertyType = "sale" | "rent";

export type Property = {
    id: string;
    name: string;
    type: PropertyType;
    square: number;
    price: number;
    address: string;
    bedrooms?: number;
    bathrooms?: number;
    imageUrl: string;
};

export type PropertyWithAgency = Property & {
    agencyName: string;
    vendorName: string;
};
