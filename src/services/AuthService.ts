// ./services/authService.ts
import Cookies from "js-cookie";
import request from "../utils/request";
import type { UserRegister, UserSignIn } from "../types/User";

type BadRequest = {
    isSuccess: false;
    message: string;
    data?: string;
};

type LoginSuccess = {
    isSuccess: true;
    message: string;
    data: {
        userId: string;
        jwtToken: string;
    };
};

type LoginResponse = LoginSuccess | BadRequest;

const AuthService = {
    async login(user: UserSignIn): Promise<LoginResponse> {
        try {
            const res = await request<LoginResponse>("/auth/login", {
                method: "POST",
                body: JSON.stringify(user),
            });
            if (res.isSuccess) {
                Cookies.set("user", JSON.stringify(res.data), { expires: 7 });
            }
            return res;
        } catch (error) {
            console.error(error);
            return {
                isSuccess: false,
                message: "Unexpected error during login",
                data: String(error),
            };
        }
    },

    async register(user: UserRegister): Promise<LoginResponse> {
        try {
            const res = await request<LoginResponse>("/register", {
                method: "POST",
                body: JSON.stringify(user),
            });

            if (res.isSuccess) {
                Cookies.set("user", JSON.stringify(res.data), { expires: 7 });
            }

            return res;
        } catch (error) {
            console.error(error);
            return {
                isSuccess: false,
                message: "Unexpected error during registration",
                data: String(error),
            };
        }
    },

    logout() {
        Cookies.remove("user");
    },

    getCurrentUser() {
        const stored = Cookies.get("user");
        return stored ? JSON.parse(stored) : null;
    },
};

export default AuthService;
