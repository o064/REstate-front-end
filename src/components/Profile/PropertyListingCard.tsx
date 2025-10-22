import { useState } from 'react';
import type { porperty } from '../../types/property';
import { Bath, Bed, Edit, MapPin, Square, Trash2 } from 'lucide-react';
import { formatPrice } from '../../utils/helper';

type PropertyListingCardProps = {
  property: porperty;
  onDelete: (string: any) => void;
};

function PropertyListingCard({ property, onDelete }: PropertyListingCardProps) {
  const [showDeleteConfirm, setShowDeleteConfirm] = useState<boolean>(false);

  const handleDelete = () => {
    onDelete(property.id);
    setShowDeleteConfirm(false);
  };

  return (
    <div className="bg-white border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
      <div className="flex flex-col sm:flex-row gap-4">
        {/* Image */}
        <div className="w-full sm:w-48 h-32 flex-shrink-0">
          <img
            src={property.imageUrl}
            alt={property.name}
            className="w-full h-full object-cover rounded-lg"
          />
        </div>

        {/* Details */}
        <div className="flex-1 min-w-0">
          <div className="flex items-start justify-between mb-2">
            <div className="flex-1">
              <h3 className="font-semibold text-gray-900 mb-1">{property.name}</h3>
              <div className="flex items-center text-gray-600 text-sm mb-2">
                <MapPin className="h-4 w-4 mr-1 flex-shrink-0" />
                <span className="truncate">{property.address}</span>
              </div>
            </div>
            <span
              className={`ml-2 px-2 py-1 rounded-full text-xs font-medium whitespace-nowrap ${
                property.type === 'sale'
                  ? 'bg-green-100 text-green-800'
                  : 'bg-purple-100 text-purple-800'
              }`}
            >
              For {property.type === 'sale' ? 'Sale' : 'Rent'}
            </span>
          </div>

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

          <div className="flex items-center space-x-2">
            {!showDeleteConfirm ? (
              <>
                <button className="px-3 py-1.5 text-sm border border-gray-300 rounded-md hover:bg-gray-50 flex items-center space-x-1">
                  <Edit className="h-4 w-4" />
                  <span>Edit</span>
                </button>
                <button
                  onClick={() => setShowDeleteConfirm(true)}
                  className="px-3 py-1.5 text-sm border border-red-200 text-red-600 rounded-md hover:bg-red-50 flex items-center space-x-1"
                >
                  <Trash2 className="h-4 w-4" />
                  <span>Delete</span>
                </button>
              </>
            ) : (
              <div className="flex items-center space-x-2">
                <span className="text-sm text-gray-600">Are you sure?</span>
                <button
                  onClick={handleDelete}
                  className="px-3 py-1.5 text-sm bg-red-600 text-white rounded-md hover:bg-red-700"
                >
                  Confirm
                </button>
                <button
                  onClick={() => setShowDeleteConfirm(false)}
                  className="px-3 py-1.5 text-sm border border-gray-300 rounded-md hover:bg-gray-50"
                >
                  Cancel
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default PropertyListingCard;
