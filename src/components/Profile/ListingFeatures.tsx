import { Bath, Bed, Square } from 'lucide-react';
import type { Property } from '../../types/property';
import { formatPrice } from '../../utils/helper';

function ListingFeatures({ property }: { property: Property }) {
  return (
    <div className="flex flex-wrap items-center gap-4 text-sm text-gray-600 mb-3">
      <div className="font-bold text-blue-600">{formatPrice(property.price)}</div>
      {property.bedrooms && property.bedrooms > 0 && (
        <div className="flex items-center">
          <Bed className="h-4 w-4 mr-1" />
          <span>{property.bedrooms} bed</span>
        </div>
      )}
      {property.bathrooms && property.bathrooms > 0 && (
        <div className="flex items-center">
          <Bath className="h-4 w-4 mr-1" />
          <span>{property.bathrooms} bath</span>
        </div>
      )}
      {property.square && (
        <div className="flex items-center">
          <Square className="h-4 w-4 mr-1" />
          <span>{property.square} sq_ft</span>
        </div>
      )}
    </div>
  );
}

export default ListingFeatures;
