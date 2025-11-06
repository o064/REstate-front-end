import PropertyListingCard from './PropertyListingCard';
import EmptyListing from './EmptyListing';
import type { PropertyGroupList } from '../../types/Responses';

function ProfileListingsTab({ properties }: { properties: PropertyGroupList }) {
  console.log(properties);
  if (properties.length === 0) {
    return <EmptyListing />;
  }
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-lg font-semibold text-gray-900 mb-4">Your Property Listings</h2>
        <div className="space-y-4">
          {properties.map((property) => (
            <PropertyListingCard key={property.propertyId} property={property} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default ProfileListingsTab;
