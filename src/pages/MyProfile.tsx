import Button from '../ui/Button';
import CardSection from '../ui/CardSection';
import AuthService from '../services/AuthService';
import ProfileHeader from '../components/Profile/ProfileHeader';
import ProfileTabs from '../components/Profile/ProfileTabs';
import type { Profile } from '../types/User';
import { useUserProfile } from '../hooks/useProfile';
import { Loader } from 'lucide-react';
import type { getAgentProfileResponse, getUserProfileResponse } from '../types/Responses';
const handleLogout = () => {
  AuthService.logout();
};
// const user: Profile = fakeUser;
function destructUserProfile(data?: getUserProfileResponse | getAgentProfileResponse) {
  if (!data || !data.isSuccess) return { user: null, listings: [] };

  const profileData = data.data;
  if ('agencyName' in profileData) {
    const { properties, user, ...rest } = profileData;
    const agentInfo = { ...rest, ...user };

    const listings = [...properties.commercialProperties, ...properties.residentialProperties];
    console.log(listings);
    return {
      user: agentInfo,
      listings,
    };
  }
  return {
    user: profileData,
    listings: [],
  };
}

function MyProfile() {
  const { isPending, isError, error, data } = useUserProfile();
  const { user, listings } = destructUserProfile(data);
  // const { user } = userProfile;
  if (isPending) return <Loader />;
  if (isError || !user) {
    const errorMessage = error instanceof Error ? error.message : 'An error occurred';
    return <p>Error: {errorMessage}</p>;
  }
  return (
    <main className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-6 sm:px-6 lg:px-8 space-y-10 mb-20">
        {/* Header */}
        <CardSection>
          <ProfileHeader
            name={user?.username}
            email={user?.email}
            type={'agencyName' in user ? 'agent' : undefined}
            agencyName={'agencyName' in user ? user.agencyName : undefined}
          />
        </CardSection>

        {/* Tabs */}
        <CardSection>
          <ProfileTabs user={user} properties={listings} />
        </CardSection>

        {/* Logout */}
        <CardSection className="flex justify-end">
          <Button variant="destructive" type="button" onClick={handleLogout}>
            Log out
          </Button>
        </CardSection>
      </div>
    </main>
  );
}

export default MyProfile;
