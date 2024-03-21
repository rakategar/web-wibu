"use client"
import Link from "next/link"
import { vip } from "@/libs/vip"
const ButtonCheckout = () => {
    const checkout = async () => {
        const data = {
            id : vip.id,
            productName : vip.productName,
            price : vip.price,
            quantity : 1
        }
        const response = await fetch( "/api/tokenizer", {
        method : "POST",
        body : JSON.stringify(data)
    }) 
        const requestData = await response.json()
        window.snap.pay(requestData.token)
    }
    return (
        <div>
            <button onClick={checkout} 
            className="bg-palete-accent text-palete-dark font-bold px-4 py-2 text-xl rounded"
            >Berlangganan Sekarang !</button>
                
        </div>
    )
}
export default ButtonCheckout