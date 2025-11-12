import { useState } from "react";
import { fakePropertyWithAgency } from "../dev-data/properites";
import type { Property } from "../types/property";
import EstateCard from "../ui/EstateCard";

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
      (type === "" || property.type === type) &&
      (rooms === "" || property.bedrooms === parseInt(rooms))
    );
  });

  const displayedProperties = filteredProperties.slice(0, page * itemsPerPage);

  return (
    <div className="max-w-6xl mx-auto p-4 mb-80">
      <h1 className="text-2xl font-bold mb-4">Property Search</h1>

      {/* Search Filters */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 mb-6">
        <input
          type="text"
          placeholder="Search by city or neighborhood"
          className="border p-2 rounded w-full"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <input
          type="number"
          placeholder="Max Price"
          className="border p-2 rounded w-full"
          value={maxPrice}
          onChange={(e) => setMaxPrice(e.target.value)}
        />
        <input
          type="number"
          placeholder="Min Area (m²)"
          className="border p-2 rounded w-full"
          value={minArea}
          onChange={(e) => setMinArea(e.target.value)}
        />
        <select
          className="border p-2 rounded w-full"
          value={type}
          onChange={(e) => setType(e.target.value)}
        >
          <option value="">Property Type</option>
          <option value="apartment">Apartment</option>
          <option value="villa">Villa</option>
          <option value="studio">Studio</option>
          <option value="house">House</option>
        </select>
        <input
          type="number"
          placeholder="Number of Bedrooms"
          className="border p-2 rounded w-full"
          value={rooms}
          onChange={(e) => setRooms(e.target.value)}
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
