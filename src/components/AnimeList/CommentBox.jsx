import prisma from "@/libs/prisma"
import React from "react"
const CommentBox = async({ anime_mal_id }) => {
    const comments = await prisma.comment.findMany({where : { anime_mal_id }}) 
    console.log(comments);

    return (
        <div className="grid grid-cols-4 gap-4 mb-4">
            {comments.map(comment=> {
                return (
                    <div key={comment.id} className="text-palete-dark bg-palete-primary p-4 rounded">
                        <p className="bg-palete-accent px-2">{comment.user_name}</p>
                        <p>{comment.comment}</p>
                    </div>
                )
            })}

            <div></div>
        </div>
    )
}
export default CommentBox