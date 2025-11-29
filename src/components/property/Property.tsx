import { TrendingUp } from 'lucide-react';
import Header from '../Form/FormHeader';
import PropertyCard from '../../ui/PropertyCard';

const fackData = [
  {
    id: '12-t',
    image:
      'https://images.unsplash.com/photo-1613545325278-f24b0cae1224?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80',
    address: '123 Wallaby Avenue, Park Road',
    price: '240,000',
    name: 'Modern Apartment Downtown',
    type: 'rent',
    area: 120,
  },
  {
    id: '12-t',
    image:
      'https://images.unsplash.com/photo-1613545325278-f24b0cae1224?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80',
    address: '123 Wallaby Avenue, Park Road',
    price: '240,000',
    name: 'Modern Apartment Downtown',
    type: 'rent',
    area: 120,
  },
  {
    id: '12-t',
    image:
      'https://images.unsplash.com/photo-1613545325278-f24b0cae1224?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80',
    address: '123 Wallaby Avenue, Park Road',
    price: '240,000',
    name: 'Modern Apartment Downtown',
    type: 'rent',
    area: 120,
  },
  {
    id: '12-t',
    image:
      'https://images.unsplash.com/photo-1613545325278-f24b0cae1224?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80',
    address: '123 Wallaby Avenue, Park Road',
    price: '240,000',
    name: 'Modern Apartment Downtown',
    type: 'rent',
    area: 120,
  },
  {
    id: '12-t',
    image:
      'https://images.unsplash.com/photo-1613545325278-f24b0cae1224?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80',
    address: '123 Wallaby Avenue, Park Road',
    price: '240,000',
    name: 'Modern Apartment Downtown',
    type: 'rent',
    area: 120,
  },
  {
    id: '12-t',
    image:
      'https://images.unsplash.com/photo-1613545325278-f24b0cae1224?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80',
    address: '123 Wallaby Avenue, Park Road',
    price: '240,000',
    name: 'Modern Apartment Downtown',
    type: 'rent',
    area: 120,
  },
];
const Estate = () => {
  return (
    <section className="mt-96 lg:mt-40">
      {/* header */}
      <div className="flex justify-between p-5 items-center">
        <Header
          Hchildren="Featured Properties"
          Pchildren="Discover the latest listings in prime locations"
          Pcolor="gray-500"
        />
        <p className="text-blue-500 flex justify-center items-center mb-20 md:mb-16 font-semibold w-28 gap-1">
          View All <TrendingUp />
        </p>
      </div>

      {/* Estate */}
      <div className="flex justify-center items-center flex-wrap">
        {fackData.map((item) => (
          <PropertyCard key={item.id} property={item} />
        ))}
      </div>
    </section>
  );
};
export default Estate;
