
import { data } from "autoprefixer";
import AnimeList from "@/components/AnimeList";
import Link from "next/link";
import Header from "@/components/AnimeList/Header";
import { getAnimeResponse } from "@/libs/api-libs";

const Page = async ({ params }) => {
  const { keyword } = params;
  const decodeKeyword = decodeURI(keyword)
  
    
  
  const searchAnime = await getAnimeResponse("anime", `q=${decodeKeyword}`)
  
  
  return (
    <>
      {/* Pencarian Anime */}
      <section>
        <Header title={`Pencarian untuk ${decodeKeyword} ...`} keyword />
      </section>
      <AnimeList api={searchAnime} />
    </>
  );
};

export default Page;
