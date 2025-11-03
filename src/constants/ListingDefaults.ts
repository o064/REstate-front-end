import type { ListingFormInputs } from "../types/property";

export const defaultResidentialValues: ListingFormInputs = {
    propertyPurpose: 0, // 0 -> For Sale, 1 -> For Rent
    title: "Modern Bedroom Apartment",
    agentId: "agent_12345",
    propertyStatus: 1, // 1 -> Available
    propertyType: 0, // 0 -> Apartment, 1 -> Villa, etc.
    compoundId: "compound_001",
    address: "123 Nile Street, Zamalek,egypt",
    city: "Cairo",
    googleMapsUrl: "https://www.google.com/maps/@29.9609231,32.5484151,13z?entry=ttu&g_ep=EgoyMDI1MTAyOS4yIKXMDSoASAFQAw%3D%3D",
    price: 2500000, // EGP
    square: 120, // square meters
    description:
        "A spacious and modern 2-bedroom apartment located in the heart of Cairo. Close to shops, schools, and public transport.",
    amenities: {
        hasElectricityLine: true,
        hasWaterLine: true,
        hasGasLine: true,
    },
    bathrooms: 2,
    bedrooms: 2,
    kitchenType: 1, // 0 -> Closed, 1 -> Open
    floors: 5,
    images: [], // will be uploaded later
};

export const defaultCommercialValues: ListingFormInputs = {
    propertyPurpose: 0,
    title: "",
    agentId: "",
    propertyStatus: 0,
    propertyType: 1,
    compoundId: "",
    address: "",
    city: "",
    googleMapsUrl: "",
    price: 0,
    square: 0,
    description: "",
    amenities: {
        hasElectricityLine: false,
        hasWaterLine: false,
        hasGasLine: false,
    },
    floorNumber: 0,
    businessType: "",
    hasStorage: false,
    images: [],
};

// {
//     propertyPurpose: 0,
//     title: "",
//     agentId: "",
//     propertyStatus: 0,
//     propertyType: 0,
//     compoundId: "",
//     address: "",
//     city: "",
//     googleMapsUrl: "",
//     price: 0,
//     square: 0,
//     description: "",
//     amenities: {
//         hasElectricityLine: false,
//         hasWaterLine: false,
//         hasGasLine: false,
//     },
//     bathrooms: 0,
//     bedrooms: 0,
//     kitchenType: 0,
//     floors: 0,
//     images: [],
// }