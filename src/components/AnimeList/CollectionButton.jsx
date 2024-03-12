"use client"

const CollectionButton = ({anime_mal_id, user_email}) => {
    const handleCollection = async(event) => {
        event.preventDefault()

        const data = { anime_mal_id, user_email }
        const response = await fetch ("/api/v1/collection" , {
            method: "POST",
            body: JSON.stringify(data)
        })
        const collection = await response.json()
        console.log({ collection });

    }
    return (
        <div>
            <button onClick={handleCollection} className="px-2 py-1 bg-palete-accent">add to collection</button>
        </div>
    )
}
export default CollectionButton