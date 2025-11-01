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
};
