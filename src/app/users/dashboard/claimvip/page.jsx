import ClaimVipButton from "@/components/claimvip/ClaimVipButton"
import { authUserSession } from "@/libs/auth-libs"
import Image from "next/image"

const Page = async() => {
    const user = await authUserSession()
    return (
        <div className="mt-8 text-palete-primary flex flex-col justify-center items-center">
            <h5 className="text-4xl font-bold py-4">Claim VIP Mu !</h5>
            <Image src="/webwibu.png" alt="..." width={400} height={200}></Image>
            <div className="py-8 flex gap-4 flex-warp flex-col justify-center items-center">
    
            </div>
            <ClaimVipButton user_name={user.name} status={"Vip"} />
            

        </div>
    )
}

export default Page