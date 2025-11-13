import { useState } from "react";
import { fakePropertyWithAgency } from "../dev-data/properites";
import type { Property } from "../types/property";
import EstateCard from "../ui/EstateCard";
import OptionSelector from "../ui/OptionSelector";
import { HomeIcon, House, SquareActivity, DollarSign, Ruler, Bed } from "lucide-react";
import Input from "../ui/Input";

const propertyTypeOptions = [
  { value: "villa", icon: <House />, label: "Villa" },
  { value: "studio", icon: <SquareActivity />, label: "Studio" },
  { value: "house", icon: <HomeIcon />, label: "House" },
];

const priceOptions = [
  { value: "100000", icon: <DollarSign />, label: "≤ 100k" },
  { value: "500000", icon: <DollarSign />, label: "≤ 500k" },
  { value: "1000000", icon: <DollarSign />, label: "≤ 1M" },
];

const areaOptions = [
  { value: "50", icon: <Ruler />, label: "≥ 50 m²" },
  { value: "100", icon: <Ruler />, label: "≥ 100 m²" },
  { value: "200", icon: <Ruler />, label: "≥ 200 m²" },
];


const Search = () => {
  const [query, setQuery] = useState("");
  const [maxPrice, setMaxPrice] = useState("");
  const [minArea, setMinArea] = useState("");
  const [type, setType] = useState("");
  const [rooms, setRooms] = useState("");
  const [page, setPage] = useState(1);
  const itemsPerPage = 6;

  const property = fakePropertyWithAgency;

  const filteredProperties = property.filter((property: Property) => {
    return (
      property.name.toLowerCase().includes(query.toLowerCase()) &&
      (maxPrice === "" || property.price <= parseFloat(maxPrice)) &&
      (minArea === "" || property.square >= parseFloat(minArea)) &&
      (type === "" || property.type!.toLowerCase() === type.toLowerCase()) &&
      (rooms === "" || property.bedrooms! >= parseInt(rooms))
    );
  });

  const displayedProperties = filteredProperties.slice(0, page * itemsPerPage);

  return (
    <div className="max-w-6xl mx-auto p-4 mb-80">
      <h1 className="text-2xl font-bold mb-4">Property Search</h1>


      {/* Search Text */}
      <Input
        type="text"
        placeholder="Search by city or neighborhood"
        className="border p-3 rounded-lg w-full shadow-sm h-20 my-auto mb-2.5"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      {/* Search Filters */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">

        <OptionSelector
          title="Property Type"
          value={type}
          onChange={setType}
          options={propertyTypeOptions}
        />

        <OptionSelector
          title="Max Price"
          value={maxPrice}
          onChange={setMaxPrice}
          options={priceOptions}
        />

        <OptionSelector
          title="Min Area"
          value={minArea}
          onChange={setMinArea}
          options={areaOptions}

        />

      </div>

      {/* Properties List */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {displayedProperties.length > 0 ? (
          displayedProperties.map((property) => (
            <EstateCard property={property} key={property.id} />
          ))
        ) : (
          <p>No properties match your search.</p>
        )}
      </div>

      {/* Load More */}
      {displayedProperties.length < filteredProperties.length && (
        <div className="text-center mt-6">
          <button
            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
            onClick={() => setPage(page + 1)}
          >
            Load More
          </button>
        </div>
      )}
    </div>
  );
};

export default Search;
