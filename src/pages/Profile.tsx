import { fakeUser } from '../dev-data/userProfile';
import Button from '../ui/Button';
import CardSection from '../ui/CardSection';
import AuthService from '../services/AuthService';
import ProfileHeader from '../components/Profile/ProfileHeader';
import ProfileTabs from '../components/Profile/ProfileTabs';
import type { Profile } from '../types/User';

const user: Profile = fakeUser;

function Profile() {
  console.log(user);
  return (
    <main className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-6 sm:px-6 lg:px-8 space-y-10 mb-20">
        {/* Header */}
        <CardSection>
          <ProfileHeader
            name={user.name}
            email={user.email}
            avatar={user.avatar}
            type={user.type}
            agencyName={user.type === 'agent' ? user.agencyName : undefined}
          />
        </CardSection>

        {/* Tabs */}
        <CardSection>
          <ProfileTabs user={user} />
        </CardSection>

        {/* Logout */}
        <CardSection className="flex justify-end">
          <Button variant="destructive" type="button" onClick={() => AuthService.logout()}>
            Log out
          </Button>
        </CardSection>
      </div>
    </main>
  );
}

export default Profile;
