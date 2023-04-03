import React, { useRef, useState } from 'react'
import VideoFooter from "./components/footer/VideoFooter"
import './video.css'
import VideoSidebar from './components/sidebar/VideoSidebar'

function Video({ likes, comments, shares, name, description, music,url }) {
  const [play, setPlay] = useState(false)
  const videoRef = useRef(null)

  function handleStart() {
    if (play) {
      videoRef.current.pause()
      setPlay(false)
    } else {
      videoRef.current.play()
      setPlay(true)
    }
  }

  return (
    <div className='video'>

      <video
        className='video-player'
        ref={videoRef}
        onClick={handleStart}
        loop
        src={url}>
      </video>
      {/*Side bar*/}
      <VideoSidebar
        likes={likes}
        comments={comments}
        shares={shares}
      />
      <VideoFooter
        name={name}
        description={description}
        music={music}
      />

    </div>
  )
}

export default Video