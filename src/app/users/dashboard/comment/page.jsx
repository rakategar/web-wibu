import { authUserSession } from "@/libs/auth-libs"
import prisma from "@/libs/prisma"
import Link from "next/link"
import Header from "@/components/Dashboard/Header";

const Page = async() => {
    const user = await authUserSession()
    const comments = await prisma.comment.findMany({where : {user_name : user.name}})
    console.log(comments);
    return (
        <section className="p-4">
            <Header title={"My Comment"}/>
            <div className="grid grid-cols-1 gap-4 mb-4 ">

                {comments.map(comment => {
                    return (

                        <Link href={`/anime/${comment.anime_mal_id}`} key={comment.id} className="text-palete-dark bg-palete-primary p-4 rounded">
                            <p className="bg-palete-accent px-2">{comment.anime_title}</p>
                            <p className="italic">{comment.comment}</p>
                        </Link>
                        
                    )
                })}
            </div>
        </section>
        
    )
}
export default Page