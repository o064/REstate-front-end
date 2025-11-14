import Button from '../ui/Button';
import CardSection from '../ui/CardSection';
import ProfileHeader from '../components/Profile/ProfileHeader';
import ProfileTabs from '../components/Profile/ProfileTabs';
import { useUserProfile } from '../hooks/useProfile';
import { Loader } from 'lucide-react';
import { useLogout } from '../hooks/useAuth';
import { destructUserProfile } from '../utils/helper';
import { useNavigate } from 'react-router';

function MyProfile() {
  const { isPending, isError, error, data } = useUserProfile();
  const { user, listings } = destructUserProfile(data);
  const { mutate: logout } = useLogout();
  console.log(user);
  console.log(listings);
  const navigate = useNavigate();
  const handleLogout = () => {
    if (user?.userId) {
      logout(user.userId, {
        onSuccess: () => {
          navigate('/');
        },
      });
    }
  };
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
            role={user.role}
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
