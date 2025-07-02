import Shimmer from "./Shimmer";

export default function DealerCardSkeleton() {
  return (
    <div
      className="rounded-md shadow bg-neutral-100 border border-gray-200
        lg:flex justify-between flex-1 py-5 px-3 sm:p-7 animate-pulse
        lg:max-h-[25rem] overflow-hidden"
    >
      <div className="flex gap-5 flex-1 max-lg:flex-col">
        <div className="flex gap-5">
          {/* Profile Picture Skeleton */}
          <div className="w-[120px] h-[120px] rounded-full overflow-hidden">
            <Shimmer className="w-full h-full rounded-full" />
          </div>

          <div className="flex flex-col flex-1 gap-4">
            {/* Name and Dealer ID */}
            <div className="flex gap-5 items-center">
              <Shimmer className="h-8 w-48 rounded-md" /> {/* Name */}
              <Shimmer className="h-5 w-32 rounded-md" /> {/* Dealer ID */}
            </div>

            {/* Address */}
            <Shimmer className="h-5 w-64 rounded-md" />

            {/* Rating and Reviews */}
            <div className="flex gap-3 items-center">
              <Shimmer className="h-5 w-20 rounded-md" /> {/* Rating */}
              <Shimmer className="h-5 w-28 rounded-md" /> {/* Reviews */}
            </div>

            {/* Service Hours */}
            <Shimmer className="h-5 w-40 rounded-md" />

            {/* Viewers & Followers */}
            <Shimmer className="h-5 w-48 rounded-md" />

            {/* Listings and Items Sold */}
            <Shimmer className="h-5 w-48 rounded-md" />
          </div>
        </div>

        {/* Cover Picture */}
        <div className="relative w-full h-full max-w-[400px] max-h-[300px] rounded-md lg:ml-auto overflow-hidden aspect-[4/3]">
          <Shimmer className="size-full object-cover rounded-md" />
        </div>
      </div>
    </div>
  );
}
