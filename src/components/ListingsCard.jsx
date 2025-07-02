import { Dot, MapPin } from "lucide-react";
import Image from "next/image";

export default function ListingsCard({ listing }) {
  return (
    <div
      className="animate-fade-in p-5 bg-white rounded-lg shadow-md hover:shadow-xl transition duration-300 flex gap-5"
      key={listing._id}
    >
      <div className="aspect-video w-2/5 max-w-80 overflow-hidden">
        <Image
          className="rounded-md w-full h-full"
          src={listing.coverPhoto}
          width={400}
          height={300}
          alt={listing.title}
        />
      </div>
      <div>
        <p className="my-2">
          Product ID: <span className="text-blue-500">{listing.productId}</span>
        </p>
        <h3 className="text-2xl font-semibold line-clamp-1">{listing.title}</h3>
        <p className="my-1 text-lg font-medium">
          ${listing.price.amount} {listing.price.currency}
        </p>
        <address className="flex items-center">
          <MapPin /> {listing.location.city}
        </address>
        <div className="flex items-center text-sm text-gray-500 mt-1">
          <p> {listing.info.odometer} Miles</p>
          <Dot size={40} className="text-rose-500" />
          <p> {listing.info.transmission}</p>
          <Dot size={40} className="text-rose-500" />
          <p> {listing.info.fuelType}</p>
        </div>
      </div>
    </div>
  );
}
