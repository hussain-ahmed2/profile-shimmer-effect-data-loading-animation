"use client";

import DealerCard from "@/components/DealerCard";
import DealerTabs from "@/components/DealerTabs";
import axios from "axios";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";

export default function DealerPage() {
  const params = useParams();
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  const router = useRouter();
  const searchParams = useSearchParams();
  const tab = searchParams.get("tab") || "bio";
  const page = searchParams.get("page") || 1;
  const sortBy = searchParams.get("sortBy") || "createdAt";
  const sortOrder = searchParams.get("sortOrder") || "desc";

  useEffect(() => {
    const getDealer = async (id) => {
      try {
        const res = await axios.get(
          `${process.env.NEXT_PUBLIC_BASE_PROFILE_URL}/${id}`
        );
        const dealer = await res.data.data;
        setData(dealer);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);

        const params = new URLSearchParams(window.location.search);
        router.push(`?${params.toString()}`, { scroll: false });
      }
    };

    getDealer(params.id);
  }, []);

  const handleTabClick = (tab) => {
    const params = new URLSearchParams(window.location.search);
    params.set("tab", tab);
    router.push(`?${params.toString()}`, { scroll: false });
  };

  const handlePageChange = (page) => {
    const params = new URLSearchParams(window.location.search);
    params.set("page", page);
    router.push(`?${params.toString()}`, { scroll: false });
  };

  const handleSortChange = (sortBy, sortOrder) => {
    const params = new URLSearchParams(window.location.search);
    params.set("sortBy", sortBy);
    params.set("sortOrder", sortOrder);
    params.set("page", 1);
    router.push(`?${params.toString()}`, { scroll: false });
  };

  return (
    <div className="container mx-auto flex flex-col min-h-screen py-10 md:py-20 px-4">
      <div className="flex-1">
        <DealerCard data={data} loading={loading} />

        <hr className="my-10 text-neutral-300" />

        <DealerTabs
          data={data}
          tab={tab}
          handleTabClick={handleTabClick}
          page={page}
          loading={loading}
          handlePageChange={handlePageChange}
          sortBy={sortBy}
          sortOrder={sortOrder}
          handleSortChange={handleSortChange}
        />
      </div>
    </div>
  );
}
