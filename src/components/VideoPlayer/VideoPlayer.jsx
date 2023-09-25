import React from 'react'
import './VideoPlayer.scss'

const VideoPlayer = ({ video }) => {
  return (
    <div className="hero">
      <video className="hero__video" poster={video?.image} controls />
    </div>
  )
}

export default VideoPlayer
