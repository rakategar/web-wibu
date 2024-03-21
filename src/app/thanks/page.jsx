import { authUserSession } from "@/libs/auth-libs"
import Image from "next/image"
import Link from "next/link"

const Page = () => {
    const user = authUserSession()
    return (
        <div className="mt-8 text-palete-primary flex flex-col justify-center items-center">
            <h5 className="text-4xl font-bold py-4">Selamat datang di Premium !</h5>
            <Image src="/webwibu.png" alt="..." width={400} height={200}></Image>
            <div className="py-8 flex gap-4 flex-warp flex-col justify-center items-center">
                <div className="text-2xl font-bold py-4">Kamu membuka fitur ini :</div>
                <div className="text-xl font-bold py-4">- Fitur Komentar</div>
            </div>
            
            <Link href="http://localhost:3000" 
                className="bg-palete-accent text-palete-dark font-bold px-4 py-2 text-xl rounded"
                >Back</Link>

        </div>
    )
}

export default Page