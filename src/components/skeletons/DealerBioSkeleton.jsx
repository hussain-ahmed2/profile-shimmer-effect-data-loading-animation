import Shimmer from "./Shimmer";
import { MapPin, Star } from "lucide-react"; // Optional: keep icons if desired during loading

export default function DealerBioSkeleton() {
  return (
    <div className="flex gap-5 px-3 animate-pulse">
      <div className="flex flex-col flex-1">
        {/* Name and Website */}
        <div className="flex gap-5 items-center">
          <Shimmer className="h-7 w-full max-w-40 rounded-md" /> {/* Name */}
          <Shimmer className="h-5 w-full max-w-60 rounded-md" /> {/* Website */}
        </div>

        {/* Address */}
        <div className="flex items-center gap-2 my-2 text-neutral-700">
          <Shimmer className="h-5 w-full max-w-96 rounded-md" />
        </div>

        {/* Rating and Reviews */}
        <div className="flex items-center gap-2 my-2 text-neutral-700">
          <Shimmer className="h-5 w-full max-w-28 rounded-md" />
          <Shimmer className="h-5 w-full max-w-24 rounded-md" />
        </div>

        {/* Service Hours */}
        <div className="flex items-center gap-2 my-2 text-neutral-700">
          <Shimmer className="h-5 w-full max-w-80 rounded-md" />
        </div>

        {/* Viewers & Followers */}
        <div className="flex items-center gap-2 my-2 text-neutral-700">
          <Shimmer className="h-5 w-full max-w-56 rounded-md" />
        </div>

        {/* Listings and Sold */}
        <div className="my-2 text-neutral-700">
          <Shimmer className="h-5 w-full max-w-64 rounded-md" />
        </div>
      </div>
    </div>
  );
}
