type EndpointMethod = "GET" | "POST";

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
            response: (req) => {
                const { userName, email, phone, type, password } = req.body || {};
                return {
                    isSuccess: true,
                    message: "User registered successfully.",
                    data: {
                        userId: Math.floor(Math.random() * 10000),
                        userName,
                        email,
                        phone,
                        type, password
                    },
                    jwtToken: "mock-jwt-token-123",
                };
            },
        },
        {
            method: "POST",
            path: "/api/Auth/login",
            response: (req) => {
                const { userName } = req.body || {};
                return {
                    isSuccess: true,
                    message: "Login successful",
                    data: {
                        userId: 1,
                        userName,
                        email: `${userName}@example.com`,
                    },
                    jwtToken: "mock-jwt-token-123",
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
                    message: "Property added successfully",
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
                        agentName: "Agent Example",
                        compoundName: "Compound Example",
                        businessType: body.businessType,
                        floorNumber: body.floorNumber,
                        hasStorage: body.hasStorage,
                        amenity: body.amenity,
                        galleries: [
                            {
                                mediaId: "3fa85f64-5717-4562-b3fc-2c963f66afa6",
                                propertyId: "3fa85f64-5717-4562-b3fc-2c963f66afa6",
                                imageUrl: "https://example.com/image.jpg",
                                videoUrl: "https://example.com/video.mp4",
                                uploadedAt: new Date().toISOString(),
                            },
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
                        galleries: [
                            {
                                mediaId: "3fa85f64-5717-4562-b3fc-2c963f66afa6",
                                propertyId: "3fa85f64-5717-4562-b3fc-2c963f66afa6",
                                imageUrl: "https://example.com/image.jpg",
                                videoUrl: "https://example.com/video.mp4",
                                uploadedAt: new Date().toISOString(),
                            },
                        ],
                        amenity: body.amenity,
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

};
