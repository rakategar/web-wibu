import { authUserSession } from "@/libs/auth-libs"
import prisma from "@/libs/prisma"
import Image from "next/image"
import Link from "next/link"
const Page = async() => {
    const user = await authUserSession()
    const vip = await prisma.vip.findFirst({where : {user_name : user.name}})
    const showCommentFiture = !!vip?.user_name; // Jika vip.user_name ditemukan, nilai akan menjadi true
    console.log(vip);
    return (
        <div className="mt-8 text-palete-primary flex flex-col justify-center items-center">
            <h5 className="text-2xl font-bold py-4">Haii {user?.name} ...</h5>
            <h5 className="text-palete-accent text-2xl font-bold py-4">{vip?.status}</h5>
            <Image src={user?.image} alt="..." width={250} height={250}></Image>
            <div className="py-8 flex gap-4 flex-warp justify-center items-center">
                <Link href="/users/dashboard/collection" 
                className="bg-palete-accent text-palete-dark font-bold px-4 py-2 text-xl rounded "
                >My Colection</Link>
                {
                    showCommentFiture && <Link href="/users/dashboard/comment" 
                    className="bg-palete-accent text-palete-dark font-bold px-4 py-2 text-xl rounded"
                    >My Comment</Link>
                }
            </div>
            <div>
                {vip?  <div/>
                : <Link href="/users/dashboard/vip" 
                className="bg-palete-accent text-palete-dark font-bold px-4 py-2 text-xl rounded"
                >Berlangganan VIP ?</Link>}
                
                
            </div>

        </div>
    )
}
export default Page