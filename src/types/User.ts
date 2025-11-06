import type { PropertyGroup } from "./Responses";

export type UserType = 'user' | 'agent';


export type UserRegister = {
    email: string;
    password: string;
    userName: string;
    phone: string;
    type: UserType;
};
export type UserSignIn = {
    email: string;
    password: string;
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
