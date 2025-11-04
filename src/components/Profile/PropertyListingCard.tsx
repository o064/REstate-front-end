import type { Property } from '../../types/property';
import ImageListing from './ImageListing';
import ListingInfo from './ListingInfo';
import ListingFeatures from './ListingFeatures';
import ListingControl from './ListingControl';

type PropertyListingCardProps = {
  property: Property;
  onDelete: (string: any) => void;
};

function PropertyListingCard({ property, onDelete }: PropertyListingCardProps) {
  return (
    <div className="bg-white border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
      <div className="flex flex-col sm:flex-row gap-4">
        {/* Image */}
        <ImageListing imageUrl={property.imageUrl} imageName={property.name} />
        {/* Details */}
        <div className="flex-1 min-w-0">
          <ListingInfo property={property} />
          <ListingFeatures property={property} />
          <ListingControl onDelete={onDelete} id="22" />
        </div>
      </div>
    </div>
  );
}

export default PropertyListingCard;
