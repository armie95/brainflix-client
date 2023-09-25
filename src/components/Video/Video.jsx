import React from 'react'
import { Link } from 'react-router-dom'
import './Video.scss'

const Video = ({ video }) => {
  return (
    <Link
      to={`/${video.id}`}
      style={{ display: 'block', textDecoration: 'none' }}
    >
      <div className="video">
        <div className="video__left-col">
          <div className="video__img-container">
            <img
              src={video.image}
              alt="Video thumbnail"
              className="video__img"
            />
          </div>
        </div>

        <div className="video__right-col">
          <h4 className="video__title">{video.title}</h4>
          <p className="video__channel">{video.channel}</p>
        </div>
      </div>
    </Link>
  )
}

export default Video
