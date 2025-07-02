"use client";

import DealerBio from "./DealerBio";
import InventoryView from "./InventoryView";
import { useEffect, useState } from "react";
import axios from "axios";
import DealerTabSelection from "./DealerTabSelection";
import { useDebounce } from "@/hooks/useDebounce";

export default function DealerTabs({
  data,
  tab,
  handleTabClick,
  page,
  loading: dealerLoading,
  handlePageChange,
  sortBy,
  sortOrder,
  handleSortChange,
}) {
  const [listingsData, setListingsData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");
  const debouncedSearch = useDebounce(search, 500);

  useEffect(() => {
    if (!dealerLoading) {
      const getListings = async () => {
        try {
          setLoading(true);

          const param = new URLSearchParams();
          param.append("userId", data.user._id);
          if (tab) param.append("tab", tab);
          if (page) param.append("page", page);
          if (sortBy)
            param.append(
              "sortBy",
              sortBy === "price" ? "price.amount" : sortBy
            );
          if (sortOrder) param.append("sortOrder", sortOrder);
          if (debouncedSearch) param.append("search", debouncedSearch);

          const res = await axios.get(
            `${process.env.NEXT_PUBLIC_BASE_LISTINGS_URL}&${param.toString()}`
          );
          const listings = await res.data.data;
          setListingsData(listings);
          console.log(listings);
        } catch (error) {
          console.log(error);
        } finally {
          setLoading(false);
        }
      };

      getListings();
    }
  }, [dealerLoading, page, sortBy, sortOrder, debouncedSearch]);

  return (
    <div className="flex flex-col gap-10 xl:flex-row">
      <DealerTabSelection
        data={data}
        tab={tab}
        handleTabClick={handleTabClick}
        loading={dealerLoading}
      />

      <div className="flex-1 transition-all duration-300">
        {tab === "bio" ? (
          <DealerBio data={data} loading={dealerLoading} />
        ) : (
          <InventoryView
            data={listingsData}
            loading={loading}
            dealerLoading={dealerLoading}
            page={page}
            handlePageChange={handlePageChange}
            sortBy={sortBy}
            sortOrder={sortOrder}
            handleSortChange={handleSortChange}
            search={search}
            setSearch={setSearch}
          />
        )}
      </div>
    </div>
  );
}
