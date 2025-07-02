import Pagination from "./Pagination";
import ListingsCards from "./ListingsCards";
import ListingsFilter from "./ListingsFilter";

export default function InventoryView({
  data,
  loading,
  dealerLoading,
  page,
  handlePageChange,
  sortBy,
  sortOrder,
  handleSortChange,
  search,
  setSearch,
}) {
  const listings = data.listings;

  const defaultValue = () => {
    if (sortBy === "createdAt" && sortOrder === "desc") return "newest";
    if (sortBy === "createdAt" && sortOrder === "asc") return "oldest";
    if (sortBy === "price" && sortOrder === "asc") return "price-asc";
    if (sortBy === "price" && sortOrder === "desc") return "price-desc";
    return "newest";
  };

  function handleChange(event) {
    const value = event.target.value;

    switch (value) {
      case "newest":
        handleSortChange("createdAt", "desc");
        break;
      case "oldest":
        handleSortChange("createdAt", "asc");
        break;
      case "price-asc":
        handleSortChange("price", "asc");
        break;
      case "price-desc":
        handleSortChange("price", "desc");
        break;
      default:
        handleSortChange("createdAt", "desc");
    }
  }

  return (
    <div className="flex flex-col gap-5">
      <ListingsFilter
        defaultValue={defaultValue()}
        handleChange={handleChange}
        loading={dealerLoading}
        search={search}
        setSearch={setSearch}
      />

      <ListingsCards loading={loading} listings={listings} />

      <Pagination
        currentPage={Number(page)}
        totalPages={data.totalPages}
        onPageChange={(page) => {
          handlePageChange(page);
        }}
      />
    </div>
  );
}
