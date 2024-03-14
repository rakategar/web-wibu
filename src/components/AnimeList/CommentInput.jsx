"use client"

import { useRouter } from "next/navigation"
import { useState } from "react"

const CommentInput = ({anime_mal_id, anime_title , user_email, user_name}) => {
    const [comment, setComment] = useState("")
    const [isCreated, setIsCreated] = useState(false)
    const router = useRouter()

    const handleInput = () => {
        setComment(event.target.value)
    }

    const handlePosting = async(event) => {
        event.preventDefault()

        const data = { anime_mal_id, anime_title, user_email, user_name, comment }
        const response = await fetch ("/api/v1/comment" , {
            method: "POST",
            body: JSON.stringify(data)
        })
        const postComment = await response.json()
        if (postComment.isCreated) {
            setIsCreated(true)
            setComment("")
            router.refresh()
        }
    }
    return (
        <div className="flex flex-col gap-2">
            {isCreated && <p className="text-palete-primary">Postingan Terkirim...</p> }
            <textarea 
            onChange={handleInput}
            value={comment} 
            className="w-full h-32 text-xl p-4"></textarea>
            <button onClick={handlePosting} className="w-52 py-2 px-3 bg-palete-accent">Posting Komentar</button>
        </div>
    )
}
export default CommentInput