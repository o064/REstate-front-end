import { Link } from 'react-router';
import { Bath, Bed, Heart, MapPin, Square } from 'lucide-react';
import { formatPrice } from '../utils/helper';
import type { PropertyWithAgency } from '../types/property';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addItemtoWishList, delItemFromWishList, getWishList } from '../store/wishListSlice';
type EstateCardPropse = {
  property: PropertyWithAgency;
};
const EstateCard = ({ property }: EstateCardPropse) => {
  const dispatch = useDispatch();
  const wishList = useSelector(getWishList);
  const [isWishList, setIsWishList] = useState(false);

  // check if property is already in wishlist
  useEffect(() => {
    const exists = wishList.some((item) => item.id === property.id);
    setIsWishList(exists);
  }, [wishList, property.id]);

  const handleWishListToggle = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();

    if (isWishList) {
      dispatch(delItemFromWishList(property.id));
    } else {
      dispatch(addItemtoWishList(property));
    }
    setIsWishList(!isWishList);
  };
  return (
    <>
      <Link
        to={`/estateDetails/${property.id}`}
        className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow overflow-hidden border border-gray-200"
      >
        {/* Property Image */}
        <div className="relative h-48 bg-gray-200 cursor-pointer">
          <img src={property.imageUrl} alt={property.name} className="w-full h-full object-cover" />
          {/* Badge */}
          <div className="absolute top-3 left-3">
            <span
              className={`px-2 py-1 rounded-full text-xs font-medium ${
                property.purpose === 'sale'
                  ? 'bg-green-100 text-green-800'
                  : 'bg-purple-100 text-purple-800'
              }`}
            >
              For {property.purpose === 'sale' ? 'Sale' : 'Rent'}
            </span>
          </div>

          {/* Wishlist Icon */}
          <button
            onClick={handleWishListToggle}
            className="absolute top-3 right-3 p-2 bg-white rounded-full shadow-md hover:bg-red-50 transition"
          >
            <Heart
              className={`h-4 w-4 ${
                isWishList ? 'fill-red-500 text-red-500' : 'text-gray-400 hover:text-red-500'
              }`}
            />
          </button>
        </div>

        {/* Property Details */}
        <div className="p-4 cursor-pointer">
          {/* Price */}
          <div className="text-xl font-bold text-blue-600 mb-2">{formatPrice(property.price)}</div>

          {/* name */}
          <h3 className="font-semibold text-gray-900 mb-2 line-clamp-2">{property.name}</h3>

          {/* Location */}
          <div className="flex items-center text-gray-600 mb-3">
            <MapPin className="h-4 w-4 mr-1 flex-shrink-0" />
            <span className="text-sm truncate">{property.address}</span>
          </div>

          {/* Property Info */}
          <div className="flex items-center justify-between text-sm text-gray-600">
            <div className="flex items-center space-x-3">
              {property.bedrooms && property.bedrooms > 0 && (
                <div className="flex items-center space-x-1">
                  <Bed className="h-4 w-4" />
                  <span>{property.bedrooms}</span>
                </div>
              )}
              {property.bathrooms && property.bathrooms > 0 && (
                <div className="flex items-center space-x-1">
                  <Bath className="h-4 w-4" />
                  <span>{property.bathrooms}</span>
                </div>
              )}
              {property.square && (
                <div className="flex items-center space-x-1">
                  <Square className="h-4 w-4" />
                  <span>{property.square}</span>
                </div>
              )}
            </div>
          </div>

          {/* Vendor */}
          <div className="mt-3 pt-3 border-t border-gray-100">
            <div className="text-xs text-gray-500">
              Listed by {property.agencyName || property.vendorName}
            </div>
          </div>
        </div>
      </Link>
    </>
  );
};
export default EstateCard;
