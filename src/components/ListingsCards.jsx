import ListingsCard from "./ListingsCard";
import ListingsCardsSkeletons from "./skeletons/ListingsCardsSkeletons";

export default function ListingsCards({ listings, loading }) {
  if (loading) return <ListingsCardsSkeletons />;

  return (
    <div className="flex flex-col gap-5">
      {listings.map((listing) => (
        <ListingsCard key={listing._id} listing={listing} />
      ))}
    </div>
  );
}
