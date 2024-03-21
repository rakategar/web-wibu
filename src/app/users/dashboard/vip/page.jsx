"use client"
import Image from "next/image"
import ButtonCheckout from "@/components/checkout/Checkout"
import { vip } from "@/libs/vip"
import { useEffect } from "react"
const Page = () => {
    useEffect(() => {
        const snapScript = "https://app.sandbox.midtrans.com/snap/snap.js"
        const clientKey = process.env.NEXT_PUBLIC_CLIENT

        const script  = document.createElement('script')
        script.src = snapScript
        script.setAttribute('data-client-key', clientKey)
        script.async = true 
        
        document.body.appendChild(script)

        return () => {
            document.body.removeChild(script)
        }
    }, [])
    return (
        <div className="mt-8 text-palete-primary flex flex-col justify-center items-center">
            <h5 className="text-4xl font-bold py-4">Premium Hanya Rp. 5000</h5>
            <Image src="/webwibu.png" alt="..." width={400} height={200}></Image>
            <div className="py-8 flex gap-4 flex-warp flex-col justify-center items-center">
                <div className="text-2xl font-bold py-4">Buka fitur fitur menarik yang tidak ada pada orang lain !</div>
                <div className="text-xl font-bold py-4">- Fitur Komentar</div>
            </div>
            <ButtonCheckout/>

        </div>
    )
}

export default Page