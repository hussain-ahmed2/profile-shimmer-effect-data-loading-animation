import Shimmer from "./Shimmer";

export default function ListingFilterSkeleton() {
  return (
    <div className="flex justify-between animate-pulse">
      {/* Sort Section */}
      <div className="flex items-center gap-2">
        <div className="flex items-center gap-2">
          <Shimmer className="h-5 w-5 rounded-md" /> {/* Icon */}
          <Shimmer className="h-5 w-20 rounded-md" /> {/* "Sort by" text */}
        </div>
        <Shimmer className="h-10 w-36 rounded-md" /> {/* Select dropdown */}
      </div>

      {/* Search Input */}
      <Shimmer className="h-10 w-64 rounded-md" />
    </div>
  );
}
