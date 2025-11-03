
import type { getAllCompoundsResponse } from "../types/Responses";
import request from "../utils/request";
export async function getAllCompounds() {
    try {
        const res = await request<getAllCompoundsResponse>("/Compound/GetAll", {
            method: "GET",
        });

        if (res.isSuccess) {
            return res;
        }

        return { isSuccess: false, message: "Failed" };
    } catch (error) {
        return { isSuccess: false, message: `Error occurred : ${error}` };
    }
}


