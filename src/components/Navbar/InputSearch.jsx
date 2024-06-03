"use client";

import { MagnifyingGlass } from "@phosphor-icons/react";
import { useRouter } from "next/navigation";
import { useRef } from "react";

const InputSearch = () => {
  const searchRef = useRef();
  const router = useRouter();
  
  const handleSearch = () => {
    const keyword = searchRef.current.value;
    if(!keyword || keyword.trim() == "") return
    
    if (event.key === "Enter" || event.type === "click") {
      router.push(`/search/${keyword}`);
      event.preventDefault();
    }

  };

  return (
    <div className="relative ">
      <input
        placeholder="Cari Anime ... "
        className="p-2 rounded w-full"
        ref={searchRef}
        onKeyDown={handleSearch}
      />
      <button className="absolute top-1.5 end-3 " onClick={handleSearch}>
        <MagnifyingGlass size={24} />
      </button>
    </div>
  );
};
export default InputSearch;
