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
} from "lucide-react";

export const PropertyTypeOptions = [
  { value: "Residential", label: "Residential" },
  { value: "Commercial", label: "Commercial" },
  { value: "Other", label: "Other" },
];

export const PropertyPurposeOptions = [
  { value: "Sale", label: "For Sale", icon: <DollarSign /> },
  { value: "Rent", label: "For Rent", icon: <Home /> },
];

export const amenityOptions = [
  { value: "parking", label: "Parking", icon: <Car /> },
  { value: "ac", label: "Air Conditioning", icon: <Snowflake /> },
  { value: "internet", label: "Internet/WiFi", icon: <Wifi /> },
  { value: "security", label: "24/7 Security", icon: <Shield /> },
  { value: "pool", label: "Swimming Pool", icon: <Waves /> },
  { value: "gym", label: "Gym/Fitness", icon: <Dumbbell /> },
  { value: "garden", label: "Garden", icon: <Sprout /> },
  { value: "balcony", label: "Balcony", icon: <Building2 /> },
];

export const bedroomsOptions = [
  { value: 0, label: "Studio" },
  { value: 1, label: "1 Bedroom" },
  { value: 2, label: "2 Bedrooms" },
  { value: 3, label: "3 Bedrooms" },
  { value: 4, label: "4 Bedrooms" },
  { value: 5, label: "5+ Bedrooms" },
];

export const bathroomsOptions = [
  { value: 1, label: "1 Bathroom" },
  { value: 2, label: "2 Bathrooms" },
  { value: 3, label: "3 Bathrooms" },
  { value: 4, label: "4+ Bathrooms" },
];

export const FloorsOptions = [
  { value: 0, label: "Ground Floor" },
  { value: 1, label: "1st Floor" },
  { value: 2, label: "2nd Floor" },
  { value: 3, label: "3rd Floor" },
  { value: 4, label: "4th Floor" },
  { value: 5, label: "5th Floor or Higher" },
];

export const FloorNumberOptions = [
  { value: 1, label: "1 Floor" },
  { value: 2, label: "2 Floors" },
  { value: 3, label: "3 Floors" },
  { value: 4, label: "4 Floors" },
  { value: 5, label: "5 Floors" },
];

export const KitchenTypeOptions = [
  { value: "American", label: "American" },
  { value: "LShaped", label: "L-Shaped" },
  { value: "UShaped", label: "U-Shaped" },
  { value: "Island", label: "Island" },
];
