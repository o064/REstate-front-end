import {
  Car,
  Snowflake,
  Wifi,
  Shield,
  Waves,
  Dumbbell,
  Sprout,
  Building2,
  DollarSign,
  Home,
} from 'lucide-react';

export const PropertyPurposeOptions = [
  { value: 'resedential ', label: 'resedential' },
  { value: 'commercial ', label: 'commercial' },
  { value: 'other', label: 'other' },
];
export const PropertyTypeOptions = [
  { value: 'for sale', icon: <DollarSign /> },
  { value: 'for rent', icon: <Home /> },
];
export const amenityOptions = [
  { value: 'parking', label: 'Parking', icon: <Car /> },
  { value: 'ac', label: 'Air Conditioning', icon: <Snowflake /> },
  { value: 'internet', label: 'Internet/WiFi', icon: <Wifi /> },
  { value: 'security', label: '24/7 Security', icon: <Shield /> },
  { value: 'pool', label: 'Swimming Pool', icon: <Waves /> },
  { value: 'gym', label: 'Gym/Fitness', icon: <Dumbbell /> },
  { value: 'garden', label: 'Garden', icon: <Sprout /> },
  { value: 'balcony', label: 'Balcony', icon: <Building2 /> },
];
export const bedroomsOptions = [
  { value: 0, label: 'studio' },
  { value: 1, label: '1 bedrooms' },
  { value: 2, label: '2 bedrooms' },
  { value: 3, label: '3 bedrooms' },
  { value: 4, label: '4 bedrooms' },
  { value: 5, label: '5+ bedrooms' },
];
export const bathroomsOptions = [
  { value: 1, label: '1 bathroom' },
  { value: 2, label: '1 bedrooms' },
  { value: 3, label: '3 bedrooms' },
  { value: 4, label: '4+ bedrooms' },
];
