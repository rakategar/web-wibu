"use client"

import React, { useEffect, useState } from "react";
import AnimeList from "../components/AnimeList";
import Link from "next/link";
import Header from "@/components/AnimeList/Header";
import { getAnimeResponse, getNestedAnimeResponse, reproduce } from "@/libs/api-libs";

const Page = () => {
  const [topAnime, setTopAnime] = useState(null);
  const [recommendedAnime, setRecommendedAnime] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const topAnimeData = await getAnimeResponse("top/anime", "page=8");
      const recommendedAnimeData = await getNestedAnimeResponse("recommendations/anime", "entry");
      setTopAnime(topAnimeData);
      setRecommendedAnime(reproduce(recommendedAnimeData, 4));
    };

    fetchData();
  }, []);

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
      {topAnime && <AnimeList api={topAnime} />}

      {/* Rekomendasi*/}
      <section>
        <Header
          title="Rekomendasi Anime"
          linkHref="/new"
        />
      </section>
      {recommendedAnime && <AnimeList api={recommendedAnime} />}
    </>
  );
};

export default Page;
