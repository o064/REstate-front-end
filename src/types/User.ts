import type { PropertyGroup } from "./Responses";

export type UserType = 'user' | 'agent';


export type UserRegister = {
    email: string;
    password: string;
    userName: string;
    phone: string;
};
export type customerRegister = UserRegister & {
    roleDiscriminator: 3;
};
export type agentRegister = UserRegister & {
    roleDiscriminator: 1;
    agencyName: string,
    taxIdentificationNumber: number,
    experienceYears: number,
};
export type RegitserForm = agentRegister;
export type UserSignIn = {
    userName: string;
    password: string;
};
export type sessinToken = {
    user: UserProfile;
    jwtToken: string;
    roles: [string];
};
// profile

export type AgentData = UserData & {
    id: string;
    agencyName: string;
    taxIdentificationNumber: number;
    rating: number;
    experienceYears: number;
    user: UserData;
    properties: PropertyGroup;
};
export type UserData = {
    userId: string;
    username: string;
    email: string;
    phoneNumber: string;
    dateJoined: string;
};
export type UserProfile = UserData;
export type AgentProfile = UserData & {
    agencyName: string;
    id: string;
    taxIdentificationNumber: number;
    rating: number;
    experienceYears: number;
}
export type Profile = UserProfile | AgentProfile;
