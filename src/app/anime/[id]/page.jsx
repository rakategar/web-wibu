import { getAnimeResponse } from "@/libs/api-libs"
import VideoPlayer from "@/components/Utilities/VideoPlayer"
import Image from "next/image"
import YouTube from "react-youtube"
import CollectionButton from "@/components/AnimeList/CollectionButton"
import { authUserSession } from "@/libs/auth-libs"
import prisma from "@/libs/prisma"
import CommentInput from "@/components/AnimeList/CommentInput"
import CommentBox from "@/components/AnimeList/CommentBox"
const Page = async({params : {id}}) => {

    const detailAnime = await getAnimeResponse (`anime/${id}`)
    const user = await authUserSession()
    const collection = await prisma.collection.findFirst({
        where: { user_email: user?.email, anime_mal_id: id }
    })

    return (
        <>
            <div className="pt-4 px-4  ">
                <h3 className="text-2xl font-bold text-palete-primary">
                {detailAnime.data.title}  {detailAnime.data.year}
                </h3>
                {
                    !collection && user && <CollectionButton anime_mal_id={id} user_email={user?.email} 
                    anime_image={detailAnime.data.images.webp.image_url} anime_title={detailAnime.data.title}/>
                }
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
                <Image 
                    src={detailAnime.data.images.webp.image_url}
                    alt={detailAnime.data.images.jpg.image_url}
                    width={250}
                    height={250}
                    className=" rounded object-cover justify-flex justify-center items-center">
                </Image>
                <p className="text-justify text-xl text-palete-primary"> {detailAnime.data.synopsis}</p>
            </div>
            <div className="p-4">
                <h3 className="text-2xl text-palete-primary mb-2 text-bold">Komentar Penonton</h3>
                <CommentBox anime_mal_id={id}/>
                {user && <CommentInput anime_mal_id={id} user_email={user.email} user_name={user.name} anime_title={detailAnime.data.title}/>}
                
            </div>
            <div>
                <VideoPlayer youtubeId={detailAnime.data.trailer.youtube_id}>

                </VideoPlayer>
            </div>
        </>
    )
}
export default Page