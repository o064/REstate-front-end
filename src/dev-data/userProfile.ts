import type { userProfile, UserType } from "../types/User";

export const fakeUser: userProfile = {
    id: '1',
    name: 'Omar Khaled',
    email: 'omar.khaled@example.com',
    phone: '+201023456789',
    type: 'vendor' as UserType,
    dateJoined: new Date('2023-07-15'),
    agencyName: 'Dream Homes Realty',
    experienceYears: 5,
    rating: 4.7,
};