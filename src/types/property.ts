export type PropertyPurpose = "sale" | "rent";
export type PropertyType = "commercial" | "residential";

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

export type ListingFormInputs = {
    // Step 1
    name: string;
    purpose: PropertyPurpose;
    type: PropertyType;

    // Step 2
    address: string;
    city: string;

    // Step 3
    price: number;
    square: number;
    bedrooms: number;
    bathrooms: number;

    // Step 4
    description: string;
    amenities: string[]; // multiple selections

    // Step 5
    images: File[];
};
