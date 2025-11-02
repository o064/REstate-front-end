// ./services/authService.ts
import type { UserRegister, UserSignIn } from "../types/User";
import Cookies from 'js-cookie';
import request from "../utils/request";
type BadRequest = {
    isSuccess: false,
    message: string,
    data: string
}
type logInResponse = {
    isSuccess: true,
    message: string,
    data: {
        userId: string,
        jwtToken: string
    }
} | BadRequest;


const AuthService = {
    async login(user: UserSignIn) {
        try {

            const res = await request<logInResponse>("/auth/login", {
                method: "POST",
                body: JSON.stringify(user),
            });
            if (res.isSuccess) {
                Cookies.set('user', JSON.stringify(res.data), { expires: 7 })

                // localStorage.setItem("user", JSON.stringify(res.data));
            }
            return res.data;
        } catch (error) {
            console.log(error);
            return error;
        }
    },
    async register(user: UserRegister) {
        try {

            const res = await request<logInResponse>("/register", {
                method: "POST",
                body: JSON.stringify(user),
            });
            if (res.isSuccess) {
                Cookies.set('user', JSON.stringify(res.data), { expires: 7 })
                // localStorage.setItem("user", JSON.stringify(res.data));
            }
            return res.data;
        } catch (error) {
            console.log(error);
            return error;
        }
    },
    logout() {
        Cookies.remove('user');
        // localStorage.removeItem("user");
    },
    getCurrentUser() {
        const stored = Cookies.get('user');
        // const stored = localStorage.getItem("user");
        return stored ? JSON.parse(stored) : null;
    },
};

export default AuthService;
