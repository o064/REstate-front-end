import type { BadRequest } from "../types/Responses";
import request from "../utils/request";

type postImagesResponse = {
    isSuccess: true;
    message: string;
    data?: string[];
} | BadRequest;

/**
 * Uploads images for a given property (after property is created).
 */
export async function postImages({
    images,
    propertyId,
}: {
    images: File[];
    propertyId: string;
}) {
    try {
        //build FormData
        const formData = new FormData();
        formData.append("propertyId", propertyId);

        for (const img of images) {
            formData.append("images", img);
        }

        //  send to API
        const res = await request<postImagesResponse>("/PropertyGallery", {
            method: "POST",
            body: formData,
            headers: {
                Accept: "application/json",
            },
        });

        // handle response
        if (res.isSuccess) {
            return res.data;
        }

        return { isSuccess: false, message: "Failed to upload images" };
    } catch (error) {
        return { isSuccess: false, message: `Error occurred: ${error}` };
    }
}
