import type { ListingFormInputs } from "../types/property";

export const defaultResidentialValues: ListingFormInputs = {
    propertyPurpose: 0, // 0 -> For Sale, 1 -> For Rent
    title: "Modern Bedroom Apartment",
    agentId: "416dfe46-2094-450d-fe6e-08de22a25c54",
    propertyStatus: 1,
    propertyType: 0,
    compoundId: "ff929561-30fb-4b69-90ce-6fc264a91925",
    address: "123 Nile Street, Zamalek,egypt",
    city: "Cairo",
    googleMapsUrl: "https://www.google.com/maps/@29.9609231,32.5484151,13z?entry=ttu&g_ep=EgoyMDI1MTAyOS4yIKXMDSoASAFQAw%3D%3D",
    price: 2500000, // EGP
    square: 120, // square meters
    description:
        "A spacious and modern 2-bedroom apartment located in the heart of Cairo. Close to shops, schools, and public transport.",
    amenity: {
        hasElectricityLine: true,
        hasWaterLine: true,
        hasGasLine: true,
    },
    bathrooms: 2,
    bedrooms: 2,
    kitchenType: 0,
    floors: 5,
    images: [], // will be uploaded later
};

// {
//   "propertyType": "Residential",
//   "propertyPurpose": "Rent",
//   "propertyStatus": "Accepted",
//   "price": 0,
//   "square": 0,
//   "description": "string",
//   "agentId": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
//   "compoundId": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
//   "bedrooms": 0,
//   "bathrooms": 0,
//   "floors": 0,
//   "kitchenType": "American",
//   "amenity": {
//     "hasElectricityLine": true,
//     "hasWaterLine": true,
//     "hasGasLine": true
//   }
// }
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
    amenity: {
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
//     amenit: {
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