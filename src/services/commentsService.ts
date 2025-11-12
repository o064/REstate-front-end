import type { CommentResponse, postCommentResponse, postResPropertyResponse } from "../types/Responses";
import request from "../utils/request";
import Cookies from "js-cookie";


function getToken(): string {
    const token = Cookies.get("Authentication");
    const user = token ? JSON.parse(token) : null;
    if (!user?.jwtToken) throw new Error("No authentication token found");
    return user.jwtToken;
    
}

// إضافة تعليق
export async function postComment(comment: CommentResponse) {
    const URL = "/api/Comment";
    const jwtToken = getToken();


    const res = await request<postResPropertyResponse>(URL, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${jwtToken}`,
        },
        body: JSON.stringify(comment),
    });

    if (!res.isSuccess) {
        throw new Error(res.message || "Failed to post comment");
    }

    return res;
}

//  تعليقات العقار
export async function getPropertyComments(id: string) {
    const URL = `/api/Comment/property/${id}`;
    const jwtToken = getToken();

    const res = await request<postCommentResponse>(URL, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${jwtToken}`,
        },
    });

    if (!res.isSuccess) {
        throw new Error(res.message || "Failed to fetch comments");
    }

    return res;
}
