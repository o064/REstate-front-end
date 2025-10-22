import { Building2 } from 'lucide-react';
import type { porperty } from '../../types/property';
import PropertyListingCard from './PropertyListingCard';
type ListingsTabProps = {
  properties: porperty[];
  onDelete: (string: any) => void;
};
function ListingsTab({ properties, onDelete }: ListingsTabProps) {
  if (properties.length === 0) {
    return (
      <div className="text-center py-12">
        <div className="w-20 h-20 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
          <Building2 className="h-10 w-10 text-gray-400" />
        </div>
        <h3 className="text-lg font-medium text-gray-900 mb-2">No Listings Yet</h3>
        <p className="text-gray-600 mb-6">
          You haven't created any property listings. Start by adding your first property!
        </p>
      </div>
    );
  }

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

export default ListingsTab;
