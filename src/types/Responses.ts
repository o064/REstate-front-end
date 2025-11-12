import type { Compound } from "./compound";
import type { CommercialProperty, PropertyGallery, residentialProperty } from "./property";
import type { AgentData, UserData } from "./User";

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

export type getResidentialPropertyById = {
    isSuccess: true;
    message: string;
    data?: Omit<residentialProperty, "images" | "agentId"> & {
        propertyId: string;
        galleries: PropertyGallery[];
        compoundName: string;
        agentName: string;
        dateListed: string;
    };
}
export type postResPropertyResponse = {
    isSuccess: true;
    message: string;
    data: ResidentialPropertyResponse;
} | BadRequest;
export type getCommercialPropertyById = {
    isSuccess: true;
    message: string;
    data?: CommercialPropertyResponse;
}



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
// Agent profile response types

export type CommercialPropertyResponse = Omit<CommercialProperty, "images" | "compoundId" | "agentId"> & {
    propertyId: string;
    galleries: PropertyGallery[];
    compoundName: string;
    agentName: string;
    dateListed: string;
};;

export type ResidentialPropertyResponse = Omit<residentialProperty, "images" | "agentId"> & {
    propertyId: string;
    galleries: PropertyGallery[];
    compoundName: string;
    agentName: string;
    dateListed: string;
}

export type PropertyGroup = {
    commercialProperties: CommercialPropertyResponse[];
    residentialProperties: ResidentialPropertyResponse[];
};
export type PropertyGroupList = (CommercialPropertyResponse | ResidentialPropertyResponse)[];
export type PropertyGroupListItem = (CommercialPropertyResponse | ResidentialPropertyResponse);

export type getAgentProfileResponse = {
    isSuccess: true;
    message: string;
    data: AgentData;
} | BadRequest;

// User profile response

export type getUserProfileResponse = {
    isSuccess: true;
    message: string;
    data: UserData;
} | BadRequest;
export type getUser = {
    isSuccess: true;
    message: string;
    data: UserData;
} | BadRequest;
// delete property 
export type deletePropertyResponse = { isSuccess: boolean, message: string, data?: null | boolean }

// auth


export type LoginSuccess = {
    isSuccess: true;
    message: string;
    data: {
        userId: string;
        jwtToken: string;
    };
};
export type getUserRolesResponse = {
    isSuccess: true;
    message: string;
    data: {
        userId: string;
        roles: [string];
    };
} | BadRequest;
export type LoginResponse = LoginSuccess | BadRequest;


export type CommentResponse = {
    commentText: string;
    propertyId: string;
}

export type postCommentResponse = {
    isSuccess: true;
    message: string;
    data: [];
} | BadRequest;
