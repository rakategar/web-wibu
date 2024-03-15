import { authUserSession } from "@/libs/auth-libs"
import Image from "next/image"
import Link from "next/link"
const Page = async() => {
    const user = await authUserSession()
    return (
        <div className="mt-8 text-palete-primary flex flex-col justify-center items-center">
            <h5 className="text-2xl font-bold py-4">Haii {user?.name} ...</h5>
            <Image src={user?.image} alt="..." width={250} height={250}></Image>
            <div className="py-8 flex gap-4 flex-warp justify-center items-center">
                <Link href="/users/dashboard/collection" 
                className="bg-palete-accent text-palete-dark font-bold px-4 py-2 text-xl"
                >My Colection</Link>

                <Link href="/users/dashboard/comment" 
                className="bg-palete-accent text-palete-dark font-bold px-4 py-2 text-xl"
                >My Comment</Link>
            </div>

        </div>
    )
}
export default Page