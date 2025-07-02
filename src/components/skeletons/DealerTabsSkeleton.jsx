import Shimmer from "./Shimmer";

export default function DealerTabsSkeleton() {
  return (
    <div className="p-8 flex flex-col gap-5 border border-gray-200 bg-neutral-50 shadow rounded-md min-w-88 h-fit animate-pulse">
      {/* Inventory Tab Skeleton */}
      <div className="flex items-center gap-2 p-1.5 rounded">
        <div className="border border-transparent rounded-md p-2 bg-neutral-700">
          <Shimmer className="size-6" />
        </div>
        <Shimmer className="h-5 w-40 rounded-md" />
      </div>

      <hr className="border-gray-400" />

      {/* Bio Tab Skeleton */}
      <div className="flex items-center gap-2 p-1.5 rounded">
        <div className="border border-transparent rounded-md p-2 bg-neutral-700">
          <Shimmer className="size-6" />
        </div>
        <Shimmer className="h-5 w-40 rounded-md" />
      </div>
    </div>
  );
}
