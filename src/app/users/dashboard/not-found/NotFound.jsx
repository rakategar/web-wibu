"use client"
import { MagnifyingGlass } from "@phosphor-icons/react";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import RefreshPage from "../refreshPage/RefreshPage";

const NotFound = ({judulHalaman}) => {
  const router = useRouter();
  return (
    <div className="min-h-screen  mx-auto flex justify-center items-center flex-col gap-6">
      <RefreshPage/>
      <div className="flex justify-center items-center gap-4 ">
        <MagnifyingGlass size={54} className="text-palete-primary  " />
        <h3 className="text-palete-primary text-2xl sm:text-2xl md:text-4xl font-bold ">
          {judulHalaman}
        </h3>
      </div>
    </div>
  );
}
export default NotFound