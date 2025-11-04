type EndpointMethod = "GET" | "POST" | "PUT";

interface Endpoint<T> {
    method: EndpointMethod;
    path: string;
    response: (req: {
        body?: Record<string, any>;
        params: { [key: string]: string };
    }) => T | T[];
}

interface Endpoints {
    [resource: string]: Endpoint<unknown>[];
}

export const endpoints: Endpoints = {
    users: [
        {
            method: "GET",
            path: "/users",
            response: () => [
                { id: 1, name: "John Maverick" },
                { id: 2, name: "Jane Doe" },
                { id: 3, name: "Foo Bar" },
            ],
        },
        {
            method: "GET",
            path: "/users/:id",
            response: (req) => ({
                name: `User ${req.params.id}`,
            }),
        },
        {
            method: "POST",
            path: "/users",
            response: (req) => ({ id: Date.now(), ...req.body }),
        },
    ],

    // 👇 Mock Auth endpoints
    auth: [
        {
            method: "POST",
            path: "/api/Auth/register",
            response: () => {
                return {
                    isSuccess: true,
                    message: "Login successful",
                    data: {
                        userId: 1,
                        jwtToken: "mock-jwt-token-123",
                    },
                };
            },
        },
        {
            method: "POST",
            path: "/api/Auth/login",
            response: (req) => {
                return {
                    isSuccess: true,
                    message: "Login successful",
                    data: {
                        userId: 1,
                        jwtToken: "mock-jwt-token-123",
                    },
                };
            },
        },
        {
            method: "POST",
            path: "/api/Auth/logout/:userId",
            response: (req) => ({
                message: `User ${req.params.userId} logged out successfully.`,
            }),
        },
        {
            method: "GET",
            path: "/api/Auth/me",
            response: () => ({
                id: 1,
                userName: "John Maverick",
                email: "john@example.com",
                phone: "+123456789",
            }),
        },
    ],
    commercialProperty: [
        {
            method: "POST",
            path: "/api/CommercialProperty/AddCommercialProperty",
            response: (req) => {
                const body = req.body || {};
                return {
                    isSuccess: true,
                    message: "Commercial property added successfully",
                    data: {
                        propertyId: "6fa85f64-5717-4562-b3fc-2c963f66afa6",
                        city: body.city,
                        address: body.address,
                        googleMapsUrl: body.googleMapsUrl,
                        propertyType: body.propertyType,
                        propertyPurpose: body.propertyPurpose,
                        propertyStatus: body.propertyStatus,
                        price: body.price,
                        square: body.square,
                        description: body.description,
                        dateListed: new Date().toISOString(),
                        agentName: "Agent Example",
                        compoundName: "Compound Example",
                        floorNumber: body.floorNumber,
                        businessType: body.businessType,
                        hasStorage: body.hasStorage,
                        amenity: body.amenity,
                    },
                };
            },
        },
        {
            method: "PUT",
            path: "/api/CommercialProperty/:id",
            response: ({ params }) => {
                const { id } = params;
                return {
                    isSuccess: true,
                    message: "Commercial property retrieved successfully",
                    data: {
                        propertyId: id,
                        city: "Alexandria",
                        title: "omar property title",
                        address: "15 El Tahrir St, Cairo, Egypt",
                        googleMapsUrl: "vhttps://www.google.com/maps/@29.9609231,32.5484151,13z?entry=ttu&g_ep=EgoyMDI1MTAyOS4yIKXMDSoASAFQAw%3D%3D",
                        propertyType: 1,
                        propertyPurpose: 1,
                        propertyStatus: 1,
                        price: 4000000,
                        square: 400,
                        description: "A spacious office space available for rent.",
                        dateListed: new Date().toISOString(),
                        agentName: "Agent Example",
                        compoundName: "Compound Example",
                        floorNumber: 3,
                        businessType: "Office",
                        hasStorage: false,
                        amenity: {
                            hasElectricityLine: true,
                            hasWaterLine: true,
                            hasGasLine: false,
                        },
                        images: [
                            "https://placehold.co/600x400/commercial1.jpg",
                            "https://placehold.co/600x400/commercial2.jpg",
                        ],
                    },
                };
            },
        },
        {
            method: "GET",
            path: "/api/CommercialProperty/:id",
            response: ({ params }) => {
                const { id } = params;
                return {
                    isSuccess: true,
                    message: "Commercial property retrieved successfully",
                    data: {
                        propertyId: id,
                        city: "Alexandria",
                        title: "omar property title",
                        address: "15 El Tahrir St, Cairo, Egypt",
                        googleMapsUrl: "vhttps://www.google.com/maps/@29.9609231,32.5484151,13z?entry=ttu&g_ep=EgoyMDI1MTAyOS4yIKXMDSoASAFQAw%3D%3D",
                        propertyType: 1,
                        propertyPurpose: 1,
                        propertyStatus: 1,
                        price: 4000000,
                        square: 400,
                        description: "A spacious office space available for rent.",
                        dateListed: new Date().toISOString(),
                        agentName: "Agent Example",
                        compoundName: "Compound Example",
                        floorNumber: 3,
                        businessType: "Office",
                        hasStorage: false,
                        amenity: {
                            hasElectricityLine: true,
                            hasWaterLine: true,
                            hasGasLine: false,
                        },
                        images: [
                            "https://placehold.co/600x400/commercial1.jpg",
                            "https://placehold.co/600x400/commercial2.jpg",
                        ],
                    },
                };
            },
        },
    ],


    residentialProperty: [
        {
            method: "POST",
            path: "/api/ResidentialProperty/AddResidentialProperty",
            response: (req) => {
                const body = req.body || {};
                return {
                    isSuccess: true,
                    message: "Residential property added successfully",
                    data: {
                        propertyId: "3fa85f64-5717-4562-b3fc-2c963f66afa6",
                        city: body.city,
                        address: body.address,
                        googleMapsUrl: body.googleMapsUrl,
                        propertyType: body.propertyType,
                        propertyPurpose: body.propertyPurpose,
                        propertyStatus: body.propertyStatus,
                        price: body.price,
                        square: body.square,
                        description: body.description,
                        dateListed: new Date().toISOString(),
                        agentName: "Agent Example",
                        compoundName: "Compound Example",
                        bedrooms: body.bedrooms,
                        bathrooms: body.bathrooms,
                        floors: body.floors,
                        kitchenType: body.kitchenType,
                        amenity: body.amenity,
                    },
                };
            },
        },
        {
            method: "PUT",
            path: "/api/ResidentialProperty/:id",
            response: ({ params }) => {
                const { id } = params;
                return {
                    isSuccess: true,
                    message: "Residential property retrieved successfully",
                    data: {
                        propertyId: id,
                        title: "omar property title",
                        city: "Cairo",
                        address: "15 El Tahrir St, Cairo, Egypt",
                        googleMapsUrl: "https://www.google.com/maps/@29.9609231,32.5484151,13z?entry=ttu&g_ep=EgoyMDI1MTAyOS4yIKXMDSoASAFQAw%3D%3D",
                        propertyType: 0,
                        propertyPurpose: 0,
                        propertyStatus: 1,
                        price: 2000000,
                        square: 150,
                        description: "A beautiful residential apartment near the Nile.",
                        dateListed: new Date().toISOString(),
                        agentName: "Agent Example",
                        compoundName: "Compound Example",
                        bedrooms: 3,
                        bathrooms: 2,
                        floors: 5,
                        kitchenType: 1,
                        amenity: {
                            hasElectricityLine: true,
                            hasWaterLine: true,
                            hasGasLine: true,
                        },
                        images: [
                            "https://placehold.co/600x400/residential1.jpg",
                            "https://placehold.co/600x400/residential2.jpg",
                        ],
                    },
                };
            },
        },
        {
            method: "GET",
            path: "/api/ResidentialProperty/:id",
            response: ({ params }) => {
                const { id } = params;
                return {
                    isSuccess: true,
                    message: "Residential property retrieved successfully",
                    data: {
                        propertyId: id,
                        title: "omar property title",
                        city: "Cairo",
                        address: "15 El Tahrir St, Cairo, Egypt",
                        googleMapsUrl: "https://www.google.com/maps/@29.9609231,32.5484151,13z?entry=ttu&g_ep=EgoyMDI1MTAyOS4yIKXMDSoASAFQAw%3D%3D",
                        propertyType: 0,
                        propertyPurpose: 0,
                        propertyStatus: 1,
                        price: 2000000,
                        square: 150,
                        description: "A beautiful residential apartment near the Nile.",
                        dateListed: new Date().toISOString(),
                        agentName: "Agent Example",
                        compoundName: "Compound Example",
                        bedrooms: 3,
                        bathrooms: 2,
                        floors: 5,
                        kitchenType: 1,
                        amenity: {
                            hasElectricityLine: true,
                            hasWaterLine: true,
                            hasGasLine: true,
                        },
                        images: [
                            "https://placehold.co/600x400/residential1.jpg",
                            "https://placehold.co/600x400/residential2.jpg",
                        ],
                    },
                };
            },
        },
    ],

    // 👇 Compound endpoints
    compound: [
        {
            method: "POST",
            path: "/api/Compound/AddCompound",
            response: (req) => {
                const body = req.body || {};
                return {
                    isSuccess: true,
                    message: "Compound added successfully",
                    data: {
                        compoundId: crypto.randomUUID(),
                        name: body.name,
                        city: body.city,
                        address: body.address,
                        description: body.description,
                    },
                };
            },
        },
        {
            method: "GET",
            path: "/api/Compound/GetAll",
            response: () => ({
                isSuccess: true,
                message: "Compounds retrieved successfully",
                data: {
                    data: [
                        {
                            compoundId: "3fa85f64-5717-4562-b3fc-2c963f66afa6",
                            name: "Palm Hills",
                            city: "Cairo",
                            address: "6th of October",
                            description: "Luxury residential compound",
                        },
                        {
                            compoundId: "2fa95f64-5717-4562-b3fc-2c963f66afa6",
                            name: "Madinaty",
                            city: "Cairo",
                            address: "New Cairo",
                            description: "Spacious modern living community",
                        },
                    ],
                    totalCount: 2,
                    totalPages: 1,
                },
            }),
        },
    ],
    Images: [
        {
            method: "POST",
            path: "/api/PropertyGallery",
            response: (req) => {
                const body = req.body || {};
                const propertyId = body.propertyId || "unknown";
                // simulate uploaded image URLs
                const uploadedImages = Array.isArray(body.images)
                    ? body.images.map((_, index) =>
                        `https://mock-server.com/uploads/${propertyId}-${index}.jpg`
                    )
                    : [
                        `https://mock-server.com/uploads/${propertyId}-0.jpg`,
                    ];

                return {
                    isSuccess: true,
                    message: "Images uploaded successfully (mock)",
                    data: uploadedImages,
                };
            },
        },
    ],


};
