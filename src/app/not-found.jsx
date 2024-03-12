"use client";
import { MagnifyingGlass } from "@phosphor-icons/react";
import Link from "next/link";
import { useRouter } from "next/navigation";

const Page = () => {
  const router = useRouter()

  return (
    <div className="min-h-screen max-w-xl mx-auto flex justify-center items-center flex-col gap-6">
      <div className="flex justify-center items-center gap-4 ">
        <MagnifyingGlass size={32} className="text-palete-primary  " />
        <h3 className="text-palete-primary text-2xl sm:text-2xl md:text-4xl font-bold ">
          Anime Tidak Ditemukan
        </h3>
      </div>
      <button
        onClick={() => router.back()}
        className="border border-palete-primary px-4 py-2 rounded-md
        hover:border-palete-accent text-xl font-bold text-palete-primary
        hover:text-palete-accent transition-all"
      >
        Kembali
      </button>
    </div>
  );
};
export default Page;
