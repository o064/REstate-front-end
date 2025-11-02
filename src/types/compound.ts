import type { BadRequest } from "./request";
export type Compound = {
    compoundId: string;
    name: string;
    city: string;
    address: string;
    description: string;
};

export type getAllCompoundsResponse = {
    isSuccess: boolean;
    message: string;
    data?: {
        data: Compound[];
        totalCount: number;
        totalPages: number;
    };
};
