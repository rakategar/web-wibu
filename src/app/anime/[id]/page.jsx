import { getAnimeResponse } from "@/libs/api-libs"
import VideoPlayer from "@/components/Utilities/VideoPlayer"
import Image from "next/image"
import YouTube from "react-youtube"
import CollectionButton from "@/components/AnimeList/CollectionButton"
import { authUserSession } from "@/libs/auth-libs"
const Page = async({params : {id}}) => {

    const detailAnime = await getAnimeResponse (`anime/${id}`)
    const user = await authUserSession()

    return (
        <>
            <div className="pt-4 px-4  ">
                <h3 className="text-2xl font-bold text-palete-primary">
                {detailAnime.data.title}  {detailAnime.data.year}
                </h3>
                <CollectionButton anime_mal_id={id} user_email={user?.email}/>
            </div>
            <div className="pt-4 px-4 text-2xl font-bold text-palete-primary flex gap-4 overflow-x-auto">
                <div className="w-36 p-2 flex justify-center items-center rounded flex-col border border-palete-accent ">
                    <p3>Peringkat</p3>
                    <div>{detailAnime.data.rank}</div>
                </div>
                <div className="w-36 p-2 flex justify-center items-center rounded flex-col  border border-palete-accent">
                    <p3>Skor</p3>
                    <div>{detailAnime.data.score}</div>
                </div>
                <div className="w-36 p-2 flex justify-center items-center rounded flex-col  border border-palete-accent">
                    <p3>Popularitas</p3>
                    <div>{detailAnime.data.popularity}</div>
                </div><div className="w-36 p-2 flex justify-center items-center rounded flex-col  border border-palete-accent">
                    <p3>Episodes</p3>
                    <div>{detailAnime.data.episodes}</div>
                </div>
            </div>
            <div className="pt-4 px-4 flex sm-flex-nowrap flex-wrap gap-2 text-palete-primary">
                <Image src={detailAnime.data.images.webp.image_url}
                    alt={detailAnime.data.images.jpg.image_url}
                    width={250}
                    height={250}
                    className=" rounded object-cover">
                </Image>
                <p className="text-justify text-xl text-palete-primary"> {detailAnime.data.synopsis}</p>
            </div>
            <div>
                <VideoPlayer youtubeId={detailAnime.data.trailer.youtube_id}>

                </VideoPlayer>
            </div>
        </>
    )
}
export default Page