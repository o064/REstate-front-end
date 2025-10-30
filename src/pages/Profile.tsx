import { Building2, User } from 'lucide-react';
import { useState } from 'react';
import ProfileTab from '../components/Profile/ProfileTab';
import ListingsTab from '../components/Profile/ListingsTab';
import Button from '../ui/Button';
import CardSection from '../ui/CardSection';
import { fakeUser } from '../dev-data/userProfile';
import { fakeUserProperties } from '../dev-data/properites';

const user = fakeUser;
const userProperties = fakeUserProperties;

type ActiveTab = 'profile' | 'listings';

function Profile() {
  const [activeTab, setActiveTab] = useState<ActiveTab>('profile');

  return (
    <main className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-6 sm:px-6 lg:px-8 space-y-10 mb-20">
        {/* Header */}
        <CardSection>
          <div className="flex items-center space-x-4">
            {user.avatar ? (
              <img
                src={user.avatar}
                alt={user.name}
                className="w-20 h-20 rounded-full object-cover"
              />
            ) : (
              <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center">
                <User className="h-10 w-10 text-blue-600" />
              </div>
            )}
            <div className="flex-1">
              <h1 className="text-2xl font-bold text-gray-900">{user.name}</h1>
              <p className="text-gray-600">{user.email}</p>
              {user.type === 'vendor' && user.agencyName && (
                <div className="flex items-center text-sm text-gray-500 mt-1">
                  <Building2 className="h-4 w-4 mr-1" />
                  <span>{user.agencyName}</span>
                </div>
              )}
            </div>
          </div>
        </CardSection>

        {/* Tabs */}
        <CardSection>
          <div className="border-b border-gray-200">
            <div className="flex">
              <button
                onClick={() => setActiveTab('profile')}
                className={`px-6 py-4 font-medium border-b-2 transition-colors ${
                  activeTab === 'profile'
                    ? 'border-blue-600 text-blue-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                }`}
              >
                Profile Info
              </button>
              <button
                onClick={() => setActiveTab('listings')}
                className={`px-6 py-4 font-medium border-b-2 transition-colors ${
                  activeTab === 'listings'
                    ? 'border-blue-600 text-blue-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                }`}
              >
                My Listings
              </button>
            </div>
          </div>

          <div className="p-6">
            {activeTab === 'profile' && <ProfileTab user={user} />}
            {activeTab === 'listings' && (
              <ListingsTab properties={userProperties} onDelete={() => null} />
            )}
          </div>
        </CardSection>

        {/* Logout Section */}
        <CardSection className="flex justify-end">
          <Button variant="destructive" type="button">
            Log out
          </Button>
        </CardSection>
      </div>
    </main>
  );
}

export default Profile;
