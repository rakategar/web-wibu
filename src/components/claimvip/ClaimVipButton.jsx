"use client"

import { useState } from "react"

const ClaimVipButton = ({user_name, status}) => {
    const [isCreated, setIsCreated] = useState(false)
    const handleVip = async(event) => {
        event.preventDefault()

        const data = { user_name, status }
        const response = await fetch ("/api/v1/claimvip" , {
            method: "POST",
            body: JSON.stringify(data)
        })
        const vip = await response.json()
        if (vip.isCreated) {
            setIsCreated(true)
        }

    }
    return (
        <>
            {
                isCreated 
                ?
                <p className="text-2xl font-bold px-4 py-2 text-palete-primary">VIP Berhasil di Claim !</p>
                : 
                <div>
                    <button onClick={handleVip} 
                    className="bg-palete-accent text-palete-dark font-bold px-4 py-2 text-xl rounded">
                        Claim Vip</button>
                </div>
            }
        </>
    )
}
export default ClaimVipButton