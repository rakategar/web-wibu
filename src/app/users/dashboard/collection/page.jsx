import Link from "next/link";
import Image from "next/image";
import { ArrowSquareLeft } from "@phosphor-icons/react";
import Header from "@/components/Dashboard/Header";
import prisma from "@/libs/prisma";
import { authUserSession } from "@/libs/auth-libs";
import NotFound from "@/app/users/dashboard/not-found/NotFound"
import RefreshPage from "../refreshPage/RefreshPage";

const Page = async () => {
    const user = await authUserSession();
    const collection = await prisma.collection.findMany({
    where: { user_email: user.email },
    });
    console.log({ collection });
    return (
        <section className="mt-4 px-4 w-full">
        <Header title="My Collections" />
        {collection.length === 0 ? (
            <NotFound judulHalaman={"Tidak ada anime dalam koleksimu :("}/>
        ) : (
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 ">
                <RefreshPage/>
                {collection.map((collect, index) => {
                    return (
                        <Link key={index} href={`/anime/${collect.anime_mal_id}`} className="relative">
                            <Image
                                src={collect.anime_image}
                                alt=""
                                width={350}
                                height={350}
                                className="w-full"
                            />
                            <div className="absolute flex items-center justify-center bottom-0 w-full bg-palete-accent h-16">
                                <h5 className="text-xl text-center">{collect.anime_title}</h5>
                            </div>
                        </Link>
                    );
                })}
            </div>
        )}
    </section>
    );
};
export default Page;
