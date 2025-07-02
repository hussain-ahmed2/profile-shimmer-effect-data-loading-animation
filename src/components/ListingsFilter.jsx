import { AlignLeft } from "lucide-react";
import ListingFilterSkeleton from "./skeletons/ListingFilterSkeleton";

export default function ListingsFilter({
  defaultValue,
  handleChange,
  loading,
  search,
  setSearch,
}) {
  if (loading) return <ListingFilterSkeleton />;

  return (
    <>
      <div className="flex justify-between animate-fade-in">
        <div className="flex items-center gap-2">
          <div className="flex items-center gap-2">
            <AlignLeft /> <span className="text-nowrap">Sort by:</span>
          </div>

          <select
            defaultValue={defaultValue}
            name="sort"
            id="sort"
            className="bg-white border border-gray-400 rounded-md p-3 max-w-fit"
            onChange={handleChange}
          >
            <option value="" disabled hidden>
              Select an option
            </option>
            <option value="newest">Newest</option>
            <option value="oldest">Oldest</option>
            <option value="price-asc">Price Low to High</option>
            <option value="price-desc">Price High to Low</option>
          </select>
        </div>
        <div>
          <input
            name="search"
            className="bg-white p-3 rounded-md outline-none"
            type="text"
            placeholder="Search by ID or Name"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
      </div>
      <p
        className={`transition-all duration-300 origin-top text-gray-600 ${
          search ? "my-2" : "invisible h-0 opacity-0"
        }`}
      >
        Showing results for &quot;{search}&quot;
      </p>
    </>
  );
}
