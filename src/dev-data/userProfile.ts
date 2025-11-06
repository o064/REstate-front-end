import type { Profile, UserType } from "../types/User";

export const fakeUser: Profile = {
    id: '1',
    name: 'Omar Khaled',
    email: 'omar.khaled@example.com',
    phone: '+201023456789',
    type: 'agent' as UserType,
    dateJoined: new Date('2023-07-15'),
    agencyName: 'Dream Homes Realty',
    experienceYears: 5,
    rating: 4.7,
};