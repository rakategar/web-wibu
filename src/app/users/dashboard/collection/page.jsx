import Link from "next/link"
import Image from "next/image"
import { ArrowSquareLeft } from "@phosphor-icons/react"
import Header from "@/components/Dashboard/Header"
const Page = async() => {
    return (
        <section className="mt-4 px-4 w-full"> 
        <Header title="My Collections"/>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 ">
            <Link href="/" className="relative border-2 border-palete-accent">
                <Image src={""} alt="" width={350} height={350} className="w-full">
                </Image>
                <div className="absolute flex items-center justify-center bottom-0 w-full bg-palete-accent h-16">
                    <h5 className="text-xl text-center">
                        Judul Anime
                    </h5>
                </div>
            </Link>
            <Link href="/" className="relative border-2 border-palete-accent">
                <Image src={""} alt="" width={350} height={350} className="w-full">
                </Image>
                <div className="absolute flex items-center justify-center bottom-0 w-full bg-palete-accent h-16">
                    <h5 className="text-xl text-center">
                        Judul Anime
                    </h5>
                </div>
            </Link>
            <Link href="/" className="relative border-2 border-palete-accent">
                <Image src={""} alt="" width={350} height={350} className="w-full">
                </Image>
                <div className="absolute flex items-center justify-center bottom-0 w-full bg-palete-accent h-16">
                    <h5 className="text-xl text-center">
                        Judul Anime
                    </h5>
                </div>
            </Link>
            <Link href="/" className="relative border-2 border-palete-accent">
                <Image src={""} alt="" width={350} height={350} className="w-full">
                </Image>
                <div className="absolute flex items-center justify-center bottom-0 w-full bg-palete-accent h-16">
                    <h5 className="text-xl text-center">
                        Judul Anime
                    </h5>
                </div>
            </Link>
        </div> 
        </section>
    )
}
export default Page