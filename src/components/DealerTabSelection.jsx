import { Equal, Info } from "lucide-react";
import DealerTabsSkeleton from "./skeletons/DealerTabsSkeleton";

export default function DealerTabSelection({
  data,
  tab,
  handleTabClick,
  loading,
}) {
  if (loading) return <DealerTabsSkeleton />;

  return (
    <div className="p-8 flex flex-col gap-5 border border-gray-200 bg-neutral-50 shadow hover:shadow-lg transition duration-300 rounded-md min-w-88 h-fit animate-fade-in">
      <button
        onClick={() => handleTabClick("inventory")}
        className={`flex items-center gap-2 cursor-pointer hover:bg-neutral-200 p-1.5 rounded transition duration-300 `}
      >
        <div
          className={`flex gap-2 items-center ransition duration-300 ${
            tab === "inventory" ? "font-semibold" : "opacity-50"
          }`}
        >
          <div className="border rounded-md p-2 bg-neutral-800 text-white">
            <Equal className="" />
          </div>
          <p>View Inventory {data.metrics.totalListings}</p>
        </div>
      </button>
      <hr className="border-gray-400" />
      <button
        onClick={() => handleTabClick("bio")}
        className={`flex items-center gap-2 cursor-pointer hover:bg-neutral-200 p-1.5 rounded transition duration-300 `}
      >
        <div
          className={`flex gap-2 items-center transition duration-300 ${
            tab === "bio" ? "font-semibold" : "opacity-50"
          }`}
        >
          <div className="border rounded-md p-2 bg-neutral-800 text-white">
            <Info className="" />
          </div>
          <p>Bio</p>
        </div>
      </button>
    </div>
  );
}
