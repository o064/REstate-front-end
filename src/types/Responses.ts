import type { Compound } from "./compound";
import type { CommercialProperty, residentialProperty } from "./property";

export type BadRequest = {
    isSuccess: false,
    message: string,
    data?: string
}
export type getAllCompoundsResponse = {
    isSuccess: boolean;
    message: string;
    data?: {
        data: Compound[];
        totalCount: number;
        totalPages: number;
    };
};

export type postResPropertyResponse =
    | {
        isSuccess: true;
        message: string;
        data: Omit<residentialProperty, "images" | "compoundId" | "agentId"> & {
            compoundName: string;
            agentName: string;
            propertyId: string;
        };
    }
    | BadRequest;
export type postComPropertyResponse =
    | {
        isSuccess: true;
        message: string;
        data:
        Omit<CommercialProperty, "images" | "compoundId" | "agentId"> & {
            compoundName: string;
            agentName: string;
            propertyId: string;
        };
    }
    | BadRequest;