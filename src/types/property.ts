export type PropertyPurpose = "sale" | "rent";
export type PropertyType = "commercial" | "residential";

export type Property = {
    id: string;
    name: string;
    purpose: 0 | 1 ;
    square: number ;
    price: number ;
    address: string;
    bedrooms?: number;
    bathrooms?: number;
    imageUrl: string;
    type:string
    images:[]
};

export type PropertyWithAgency = Property & {
    agencyName: string;
    vendorName: string;
};
export type Amenity = {
    hasElectricityLine: boolean;
    hasWaterLine: boolean;
    hasGasLine: boolean;
};

export type baseLisintingForm = {
    agentId: string;
    propertyStatus: number;
    // Step 1 info
    title: string;
    propertyPurpose: 0 | 1;
    compoundId?: string;
    // Step 2
    address: string;
    city: string;
    googleMapsUrl: string;
    // Step 3
    price: number;
    square: number;
    // Step 4
    description: string;
    amenity: Amenity; // multiple selections
    // Step 5
    images: File[];
};
export type residentialProperty = baseLisintingForm & {
    propertyType: 0;
    bathrooms: number;
    bedrooms: number;
    kitchenType: number;
    floors: number;
};
export type CommercialProperty = baseLisintingForm & {
    propertyType: 1;
    floorNumber: number;
    businessType: string;
    hasStorage: boolean
};
export type ListingFormInputs =
    | CommercialProperty
    | residentialProperty;
export type ListingImagesFormInputs = {
    images: File[];
}

export type PropertyGallery = {
    mediaId: string;
    propertyId: string;
    imageUrl: string;
    uploadedAt: string;
}