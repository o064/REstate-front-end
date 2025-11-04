import PropertyListingCard from './PropertyListingCard';
import EmptyListing from './EmptyListing';
import { fakeUserProperties } from '../../dev-data/properites';
const properties = fakeUserProperties;

function ProfileListingsTab() {
  if (properties.length === 0) {
    return <EmptyListing />;
  }
  function onDelete() {}
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-lg font-semibold text-gray-900 mb-4">Your Property Listings</h2>
        <div className="space-y-4">
          {properties.map((property) => (
            <PropertyListingCard key={property.id} property={property} onDelete={onDelete} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default ProfileListingsTab;
