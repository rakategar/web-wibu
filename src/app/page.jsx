import React from "react"
import { data } from "autoprefixer";
import AnimeList from "../components/AnimeList";
import Link from "next/link";
import Header from "@/components/AnimeList/Header";
import { getAnimeResponse, getNestedAnimeResponse, reproduce } from "@/libs/api-libs";

const Page = async () => {
  
  const topAnime = await getAnimeResponse("top/anime", "page=8")
  let recommendedAnime = await getNestedAnimeResponse("recommendations/anime", "entry")
  recommendedAnime = reproduce(recommendedAnime, 4)
  
  return (
    <>
      {/* Anime Populer */}
      <section>
        <Header
          title="Paling Populer"
          linkTitle="Lihat Semua"
          linkHref="/populer"
        />
      </section>
      <AnimeList api={topAnime} />

      {/* Rekomendasi*/}
      <section>
        <Header
          title="Rekomendasi Anime"
          linkHref="/new"
        />
      </section>
      <AnimeList api={recommendedAnime} />
    </>
  );
};

export default Page;
