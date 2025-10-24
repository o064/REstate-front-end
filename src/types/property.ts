export type PropertyPurpose = "sale" | "rent";

export type Property = {
    id: string;
    name: string;
    purpose: PropertyPurpose;
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
