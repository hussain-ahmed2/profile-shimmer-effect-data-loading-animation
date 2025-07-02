import { MapPin, Star } from "lucide-react";
import ServiceHours from "./ServiceHours";
import DealerBioSkeleton from "./skeletons/DealerBioSkeleton";

export default function DealerBio({ data, loading }) {
  if (loading) return <DealerBioSkeleton />;

  const dealer = data.user;

  return (
    <div className="flex gap-5 px-3 animate-fade-in">
      <div className="flex flex-col flex-1">
        <div className="flex gap-5 items-center ">
          <h2 className="text-2xl font-bold text-blue-500">
            {dealer.fullName}
          </h2>
          <p>
            Website: <span className="text-blue-500">{dealer.website}</span>
          </p>
        </div>
        <div className="flex items-center gap-2 my-2 text-neutral-700">
          <div>
            <MapPin />
          </div>
          <address className="font-semibold border-b border-gray-400">
            {dealer.address.street}&nbsp;{dealer.address.city}&nbsp;
            {dealer.address.country}
          </address>
        </div>
        <div className="flex items-center gap-2 my-2 text-neutral-700">
          <div>
            <Star />
          </div>
          <p className="">
            {dealer.rating ? `Rating: ${dealer.rating}` : "No rating yet"}
          </p>
          <p className="underline font-semibold text-neutral-800">
            {dealer.reviews
              ? `(${dealer.reviews} reviews)`
              : "( No reviews yet )"}
          </p>
        </div>
        <div className="flex items-center gap-2 my-2 text-neutral-700">
          <ServiceHours serviceHours={dealer.serviceHours} />
        </div>
        <div className="flex items-center gap-2 my-2 text-neutral-700">
          <p>
            <span className="font-semibold text-neutral-800">
              {dealer.viewers}
            </span>{" "}
            Viewers |{" "}
            <span className="font-semibold text-neutral-800">
              {dealer.followers?.length}
            </span>{" "}
            Followers
          </p>
        </div>
        <div className="my-2 text-neutral-700">
          <p>
            <span className="font-medium text-neutral-800">
              {data.metrics.totalListings}
            </span>{" "}
            Listing Posted |{" "}
            <span className="text-neutral-800 font-medium">
              {data.metrics.soldListings}
            </span>{" "}
            Items Sold
          </p>
        </div>
      </div>
    </div>
  );
}
