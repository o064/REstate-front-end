import { useQuery } from '@tanstack/react-query';
import { getCurrentUser, loginService, logoutService, registerService } from '../services/AuthService';
import type { getUser } from '../types/Responses';

import { useMutation } from "@tanstack/react-query";
import { useAuth } from '../context/AuthContext';
import type { RegitserForm, UserRegister } from '../types/User';
import { useEffect } from 'react';
import { useNavigate } from 'react-router';

export function useUser() {
    return useQuery<getUser | null>({
        queryKey: ["user"],
        queryFn: getCurrentUser,
        staleTime: 1000 * 60 * 10, // cache 10 min
    });
}

export function useLogin() {
    const { login } = useAuth();

    return useMutation({
        mutationFn: async ({ userName, password }: { userName: string; password: string }) => {
            const res = await loginService({ userName, password });
            if (!res.isSuccess) throw new Error(res.message);
            return res.data;
        },
        onSuccess: (data) => {
            login(data);
        },
    });
}

export function useRegister() {
    const { login } = useAuth();

    return useMutation({
        mutationFn: async (user: RegitserForm) => {
            const res = await registerService(user);
            if (!res.isSuccess) throw new Error(res.message);
            return res.data;
        },
        onSuccess: (data) => {
            login(data);
        },
    });
}

export function useLogout() {
    const { logout } = useAuth();
    return useMutation({
        mutationFn: async (id: string) => {
            const res = await logoutService(id);
            if (!res.isSuccess) throw new Error(res.message);
            return res.data;
        },
        onSuccess: () => {
            logout()
        },
    });
}
export function useHomePageRedirect() {
    const { isAuthenticated } = useAuth();

    const navigate = useNavigate()
    useEffect(() => {
        if (isAuthenticated) {
            navigate('/'); // redirect if already logged in
        }
    }, [isAuthenticated, navigate]);
}