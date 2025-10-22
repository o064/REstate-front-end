import type { porperty } from "../types/property";

export const fakeUserProperties: porperty[] = [
    {
        id: "prop-001",
        name: "Modern Apartment Downtown",
        type: "rent",
        square: 120,
        price: 15000,
        address: "15 El Tahrir St, Cairo, Egypt",
        bedrooms: 3,
        bathrooms: 2,
        imageUrl: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c", // ✅
    },
    {
        id: "prop-002",
        name: "Luxury Villa by the Nile",
        type: "sale",
        square: 450,
        price: 4500000,
        address: "Nile Corniche, Giza, Egypt",
        bedrooms: 5,
        bathrooms: 4,
        imageUrl: "https://images.unsplash.com/photo-1599423300746-b62533397364",
    },
];
