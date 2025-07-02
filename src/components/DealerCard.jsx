import Image from "next/image";
import { MapPin, Star } from "lucide-react";
import ServiceHours from "./ServiceHours";
import DealerCardSkeleton from "./skeletons/DealerCardSkeleton";

export default function DealerCard({ data, loading }) {
  if (loading) return <DealerCardSkeleton />;

  const dealer = data.user;

  return (
    <div className="rounded-md shadow hover:shadow-lg transition duration-300 bg-neutral-100 border border-gray-200 lg:flex justify-between flex-1 py-5 px-3 sm:p-7 animate-fade-in">
      <div className="flex gap-5 flex-1 max-lg:flex-col">
        <div className="flex gap-5">
          <div className="size-30">
            <Image
              className="rounded-full aspect-square size-auto object-cover"
              src={dealer.profilePicture}
              alt={dealer.fullName}
              width={120}
              height={120}
            />
          </div>
          <div className="flex flex-col flex-1">
            <div className="flex gap-5 items-center ">
              <h2 className="text-2xl font-bold text-blue-500">
                {dealer.fullName}
              </h2>
              <p>
                Dealer ID: #{" "}
                <span className="text-blue-500">{dealer.dealerID}</span>
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
        <div className="relative w-full max-w-[400px] min-h-48 rounded-md lg:ml-auto">
          <Image
            priority
            className="rounded-md object-cover block w-full min-h-48 max-md:aspect-video"
            src={dealer.coverPicture}
            alt={dealer.fullName}
            width={400}
            height={350}
          />
        </div>
      </div>
    </div>
  );
}
