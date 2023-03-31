import React, { useRef, useState } from 'react'
import './video.css'

function Video() {
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
        src="https://firebasestorage.googleapis.com/v0/b/jornada-dev.appspot.com/o/brecker2.mp4?alt=media&token=b5399418-9276-4e53-a706-1e00290c2c74">
      </video>

    </div>
  )
}

export default Video