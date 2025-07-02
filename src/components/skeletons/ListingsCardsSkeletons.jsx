import Shimmer from "./Shimmer";

export default function ListingsCardsSkeletons() {
  return (
    <div className="flex flex-col gap-5">
      {Array.from({ length: 3 }).map((_, idx) => (
        <div
          key={idx}
          className="p-5 bg-white rounded-lg shadow-md flex gap-5 animate-pulse"
        >
          {/* Image */}
          <div className="aspect-video w-2/5 max-w-80 bg-gray-200 rounded-md">
            <Shimmer className="w-full h-full rounded-md" />
          </div>

          {/* Info Section */}
          <div className="flex flex-col gap-2 flex-1">
            <Shimmer className="h-5 w-40 rounded-md" /> {/* Product ID */}
            <Shimmer className="h-6 w-64 rounded-md" /> {/* Title */}
            <Shimmer className="h-5 w-32 rounded-md" /> {/* Price */}
            <Shimmer className="h-5 w-48 rounded-md" /> {/* Location */}
            <div className="flex items-center gap-2 mt-1">
              <Shimmer className="h-4 w-20 rounded-md" />
              <Shimmer className="h-4 w-20 rounded-md" />
              <Shimmer className="h-4 w-20 rounded-md" />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
