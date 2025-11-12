import type { Property, PropertyWithAgency } from "../types/property";

export const fakeUserProperties: Property[] = [
<<<<<<< HEAD
  {
    id: "prop-001",
    name: "Modern Apartment Downtown",
    purpose: "rent",
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
    purpose: "sale",
    square: 450,
    price: 4500000,
    address: "Nile Corniche, Giza, Egypt",
    bedrooms: 5,
    bathrooms: 4,
    imageUrl: "https://images.unsplash.com/photo-1599423300746-b62533397364",
  },
];

export const fakePropertyWithAgency: PropertyWithAgency[] = [
  {
    id: "prop-001",
    name: "Modern Apartment Downtown",
    purpose: "rent",
    type: "apartment",
    square: 120,
    price: 15000,
    address: "15 El Tahrir St, Cairo, Egypt",
    bedrooms: 3,
    bathrooms: 2,
    imageUrl:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=60",
    agencyName: "Dream Homes Realty",
    vendorName: "Omar Khaled",
    images: [
      "https://images.unsplash.com/photo-1599423300746-b62533397364",
      "https://images.unsplash.com/photo-1599423300746-b62533397364",
      "https://images.unsplash.com/photo-1599423300746-b62533397364",
    ]
  },
  {
    id: "prop-002",
    name: "Luxury Villa by the Nile",
    purpose: "sale",
    type: "villa",
    square: 480,
    price: 4500000,
    address: "Nile Corniche, Giza, Egypt",
    bedrooms: 5,
    bathrooms: 4,
    imageUrl:
      "https://images.unsplash.com/photo-1599423300746-b62533397364?auto=format&fit=crop&w=1200&q=60",
    agencyName: "Prime Estates",
    vendorName: "Sara Mahmoud",
    images: [
      "https://images.unsplash.com/photo-1599423300746-b62533397364",
      "https://images.unsplash.com/photo-1599423300746-b62533397364",
      "https://images.unsplash.com/photo-1599423300746-b62533397364",
    ]
  },
  {
    id: "prop-003",
    name: "Cozy Studio Apartment",
    purpose: "rent",
    type: "studio",
    square: 60,
    price: 8000,
    address: "Zamalek, Cairo, Egypt",
    bedrooms: 1,
    bathrooms: 1,
    imageUrl:
      "https://images.unsplash.com/photo-1600607688967-3e4e06f3d69f?auto=format&fit=crop&w=1200&q=60",
    agencyName: "Urban Living Co.",
    vendorName: "Ahmed Mostafa",
    images: [
      "https://images.unsplash.com/photo-1599423300746-b62533397364",
      "https://images.unsplash.com/photo-1599423300746-b62533397364",
      "https://images.unsplash.com/photo-1599423300746-b62533397364",
    ]
  },
  {
    id: "prop-004",
    name: "Family House with Garden",
    purpose: "sale",
    type: "house",
    square: 300,
    price: 2100000,
    address: "6th of October City, Egypt",
    bedrooms: 4,
    bathrooms: 3,
    imageUrl:
      "https://images.unsplash.com/photo-1613977257363-707ba9348227?auto=format&fit=crop&w=1200&q=60",
    agencyName: "Elite Properties",
    vendorName: "Mona Fathy",
    images: [
      "https://images.unsplash.com/photo-1599423300746-b62533397364",
      "https://images.unsplash.com/photo-1599423300746-b62533397364",
      "https://images.unsplash.com/photo-1599423300746-b62533397364",
    ]
  },
  {
    id: "prop-005",
    name: "Beachfront Chalet",
    purpose: "rent",
    type: "villa",
    square: 200,
    price: 12000,
    address: "North Coast, Egypt",
    bedrooms: 3,
    bathrooms: 2,
    imageUrl:
      "https://images.unsplash.com/photo-1615874959474-d609969a20ed?auto=format&fit=crop&w=1200&q=60",
    agencyName: "Coastal Realty",
    vendorName: "Hassan Ali",
    images: [
      "https://images.unsplash.com/photo-1599423300746-b62533397364",
      "https://images.unsplash.com/photo-1599423300746-b62533397364",
      "https://images.unsplash.com/photo-1599423300746-b62533397364",
    ]
  },
=======
    {
        id: "prop-001",
        name: "Modern Apartment Downtown",
        purpose: "rent",
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
        purpose: "sale",
        square: 450,
        price: 4500000,
        address: "Nile Corniche, Giza, Egypt",
        bedrooms: 5,
        bathrooms: 4,
        imageUrl: "https://images.unsplash.com/photo-1599423300746-b62533397364",
    },
];

export const fakePropertyWithAgency: PropertyWithAgency[] = [
    {
        id: "prop-001",
        name: "Modern Apartment Downtown",
        purpose: "rent",
        square: 120,
        price: 15000,
        address: "15 El Tahrir St, Cairo, Egypt",
        bedrooms: 3,
        bathrooms: 2,
        imageUrl:
            "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=60",
        agencyName: "Dream Homes Realty",
        vendorName: "Omar Khaled",
    },
    {
        id: "prop-002",
        name: "Luxury Villa by the Nile",
        purpose: "sale",
        square: 480,
        price: 4500000,
        address: "Nile Corniche, Giza, Egypt",
        bedrooms: 5,
        bathrooms: 4,
        imageUrl:
            "https://images.unsplash.com/photo-1599423300746-b62533397364?auto=format&fit=crop&w=1200&q=60",
        agencyName: "Prime Estates",
        vendorName: "Sara Mahmoud",
    },
    {
        id: "prop-003",
        name: "Cozy Studio Apartment",
        purpose: "rent",
        square: 60,
        price: 8000,
        address: "Zamalek, Cairo, Egypt",
        bedrooms: 1,
        bathrooms: 1,
        imageUrl:
            "https://images.unsplash.com/photo-1600607688967-3e4e06f3d69f?auto=format&fit=crop&w=1200&q=60",
        agencyName: "Urban Living Co.",
        vendorName: "Ahmed Mostafa",
    },
    {
        id: "prop-004",
        name: "Family House with Garden",
        purpose: "sale",
        square: 300,
        price: 2100000,
        address: "6th of October City, Egypt",
        bedrooms: 4,
        bathrooms: 3,
        imageUrl:
            "https://images.unsplash.com/photo-1613977257363-707ba9348227?auto=format&fit=crop&w=1200&q=60",
        agencyName: "Elite Properties",
        vendorName: "Mona Fathy",
    },
    {
        id: "prop-005",
        name: "Beachfront Chalet",
        purpose: "rent",
        square: 200,
        price: 12000,
        address: "North Coast, Egypt",
        bedrooms: 3,
        bathrooms: 2,
        imageUrl:
            "https://images.unsplash.com/photo-1615874959474-d609969a20ed?auto=format&fit=crop&w=1200&q=60",
        agencyName: "Coastal Realty",
        vendorName: "Hassan Ali",
    },
>>>>>>> 78f30e4 (finish basic info step)
];
