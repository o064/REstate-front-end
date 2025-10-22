import { MapPin, Phone, Bed, Bath, Ruler, Heart } from 'lucide-react';
import { useState } from 'react';
import EstateCard from '../ui/EstateCard';
import SiteMap from '../components/siteMap/SiteMap';
import Button from '../ui/Button';
import { fakePropertyWithAgency } from '../dev-data/properites';

const EstateDetails = () => {
  const [src, setSrc] = useState(0);

  const property = {
    title: 'شقة فاخرة في المعادي',
    price: '2,500,000 جنيه',
    area: '180 م²',
    rooms: 3,
    baths: 2,
    address: 'المعادي، القاهرة',
    lat: 29.9611,
    lng: 31.2612,
    agent: {
      name: 'محمود عبد الهادي',
      phone: '01012345678',
    },
    description:
      'شقة فاخرة في قلب المعادي بالقرب من الكورنيش، تشطيب سوبر لوكس، قريبة من المدارس والخدمات، تطل على شارع رئيسي.',
    features: ['تكييف مركزي', 'بلكونة', 'موقف سيارات', 'أمن وحراسة 24 ساعة'],
    images: [
      'https://images.dubizzle.com.eg/thumbnails/146038752-800x600.webp',
      'https://images.dubizzle.com.eg/thumbnails/146038765-400x300.webp',
      'https://images.dubizzle.com.eg/thumbnails/146038769-400x300.webp',
    ],
  };

  const similarProperties = [
    {
      id: 1,
      title: 'شقة حديثة في التجمع الخامس',
      price: '3,000,000 جنيه',
      area: '200 م²',
      image: 'https://images.dubizzle.com.eg/thumbnails/154463110-800x600.webp',
    },
    {
      id: 2,
      title: 'فيلا في الشيخ زايد',
      price: '7,500,000 جنيه',
      area: '350 م²',
      image: 'https://images.dubizzle.com.eg/thumbnails/154339648-800x600.webp',
    },
    {
      id: 3,
      title: 'شقة في مدينة نصر',
      price: '1,900,000 جنيه',
      area: '150 م²',
      image:
        'https://img-4.aqarmap.com.eg/new-aqarmap-media/slider-photo-watermarked-logo-large/2506/683c4f22e696a972766983.png/2510/68e25a8a33845018562350.jfif',
    },
  ];

  return (
    <div className="max-w-6xl mx-auto p-4 space-y-8 text-right">
      {/* عنوان العقار */}
      <div className="flex justify-between items-start border-b pb-3">
        <div>
          <h1 className="text-2xl font-bold text-gray-800">{property.title}</h1>
          <p className="text-gray-500 flex items-center gap-1 mt-1">
            <MapPin size={18} className="text-blue-500" />
            {property.address}
          </p>
        </div>
        <button className="text-red-500 hover:text-red-600">
          <Heart size={24} />
        </button>
      </div>

      {/* معرض الصور */}
      <div className="flex flex-col md:flex-row gap-3">
        <div className="w-full md:w-[70%]">
          <img
            src={property.images[src]}
            alt="main"
            className="h-80 w-full object-cover rounded-xl shadow-md transition-all"
          />
        </div>
        <div className="flex md:flex-col gap-1.5 sm:gap-3.5 justify-center mx-auto  w-26 sm:w-auto  md:w-[30%]">
          {property.images.map((img, index) => (
            <img
              key={index}
              src={img}
              alt={`thumb-${index}`}
              className={`h-24 object-cover rounded-lg cursor-pointer border-2 transition ${
                src === index
                  ? 'border-blue-500 scale-105'
                  : 'border-transparent hover:border-gray-300'
              }`}
              onClick={() => setSrc(index)}
            />
          ))}
        </div>
      </div>

      {/* التفاصيل الأساسية */}
      <div className="grid grid-cols-3 sm:grid-cols-6 gap-4 text-center border-t border-b py-4">
        <div>
          <Ruler className="mx-auto text-blue-500" />
          <p className="text-sm text-gray-500 text-left">Area</p>
          <p className="font-semibold">{property.area}</p>
        </div>
        <div>
          <Bed className="mx-auto text-blue-500" />
          <p className="text-sm text-gray-500 text-left">Rooms</p>
          <p className="font-semibold">{property.rooms}</p>
        </div>
        <div>
          <Bath className="mx-auto text-blue-500" />
          <p className="text-sm text-gray-500 text-left">Baths</p>
          <p className="font-semibold">{property.baths}</p>
        </div>
        <div className="col-span-3 sm:col-span-3 flex items-center justify-center gap-2">
          <p className="text-xl font-bold text-green-600">{property.price}</p>
        </div>
      </div>

      {/* الوصف */}
      <section>
        <h2 className="text-lg font-semibold mb-2 text-left">Description</h2>
        <p className="text-gray-700 leading-relaxed">{property.description}</p>
      </section>

      {/* المميزات */}
      <section>
        <h2 className="text-lg font-semibold mb-2 text-left">Features</h2>
        <ul className="grid grid-cols-2 sm:grid-cols-3 gap-2">
          {property.features.map((feature, index) => (
            <li
              key={index}
              className="bg-gray-50 border rounded-lg px-3 py-2 text-gray-700 text-sm"
            >
              {feature}
            </li>
          ))}
        </ul>
      </section>

      {/* خريطة الموقع */}
      <SiteMap lat={property.lat} lng={property.lng} />

      {/* بيانات المعلن */}
      <section className="border rounded-xl p-4 flex justify-between items-center bg-gray-50 shadow-sm">
        <div>
          <h3 className="font-semibold">{property.agent.name}</h3>
          <p className="text-gray-600 flex items-center gap-1">
            <Phone size={16} className="text-blue-500" /> {property.agent.phone}
          </p>
        </div>
        <Button children="Call now" className="w-fit" icon={<Phone />} />
      </section>

      {/* عقارات مشابهة */}
      <section className="mb-24">
        <h2 className="text-lg font-semibold mb-4 text-left">Similar properties</h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {similarProperties.map((item) => (
            <div
              key={item.id}
              className="border rounded-xl overflow-hidden hover:shadow-lg transition group cursor-pointer"
            >
              <EstateCard property={fakePropertyWithAgency[0]} />
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default EstateDetails;
