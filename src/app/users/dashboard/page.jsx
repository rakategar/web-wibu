import { authUserSession } from "@/libs/auth-libs"
import Image from "next/image"
const Page = async() => {
    const user = await authUserSession()
    return (
        <div className="text-palete-primary">
            <h5 className="text-2xl font-bold">Haii {user?.name} ...</h5>
            <Image src={user?.image} alt="..." width={250} height={250}></Image>
        </div>
    )
}
export default Page