
export type UserType = 'user' | 'agent';

interface BaseProfile {
    id: string;
    avatar?: string;
    name: string;
    email: string;
    phone: string;
    dateJoined: Date;
}

interface UserProfile extends BaseProfile {
    type: "user";
}

interface AgentProfile extends BaseProfile {
    type: "agent";
    agencyName: string;
    agencyType?: string;
    experienceYears: number;
    rating: number;
}

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
export type Profile = UserProfile | AgentProfile;