"use client"

import { XCircle, XSquare, YoutubeLogo } from "@phosphor-icons/react"
import { useState } from "react"
import YouTube from "react-youtube"

const VideoPlayer = ({youtubeId})=> {
    const [isOpen, setIsOpen] = useState(true)
    const handleVideoPlayer = () => {
        setIsOpen((prevState) => !prevState)
    }
    const Player = () => {
        return(
        <div className="fixed bottom-2 right-2">
            <button className="text-palete-primary float-right bg-palete-secondary p-3 text-3xl mb-2 hover:text-palete-accent" onClick={handleVideoPlayer}>
            X
            </button>
            <YouTube videoId={youtubeId} onReady={(event) => event.target.playVideo} opts={{ height: "250", width: "350" }}></YouTube>
        </div>
        )
    }

    const ButtonOpenPlayer = () => {
        return (
            <button className="fixed bottom-2 right-2 text-palete-youtube float-right p-3 hover:bg-palete-accent 
            transition-all rounded " 
            onClick={handleVideoPlayer}>
        <YoutubeLogo size={32} weight="fill" />
        </button>
        )
    }

    return isOpen ? <Player/> : <ButtonOpenPlayer/>
}
export default VideoPlayer