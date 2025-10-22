
export type UserType = 'buyer' | 'vendor';

interface BaseProfile {
    id: string;
    avatar?: string;
    name: string;
    email: string;
    phone: string;
    dateJoined: Date;
}

interface BuyerProfile extends BaseProfile {
    type: "buyer";
}

interface VendorProfile extends BaseProfile {
    type: "vendor";
    agencyName: string;
    agencyType?: string;
    experienceYears: number;
    rating: number;
}

export type userProfile = BuyerProfile | VendorProfile;