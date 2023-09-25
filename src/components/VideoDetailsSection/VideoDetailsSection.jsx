import React from 'react'
import './VideoDetailsSection.scss'

const VideoDetailsSection = ({ video }) => {
  const timestampToDate = (timestamp) => {
    return new Date(timestamp).toLocaleDateString()
  }

  return (
    <section className="video-details-section">
      <h1 className="video-details-section__title">{video?.title}</h1>
      <div className="video-details-section__statistics-container">
        <div className="video-details-section__channel-and-date">
          <h5 className="video-details-section__channel">
            By {video?.channel}
          </h5>
          <h5 className="video-details-section__date">
            {timestampToDate(video?.timestamp)}
          </h5>
        </div>
        <div className="video-details-section__views-and-likes">
          <div className="video-details-section__likes-container">
            <h5 className="video-details-section__views">
              <svg
                width="22"
                height="15"
                viewBox="0 0 22 15"
                fill="current"
                xmlns="http://www.w3.org/2000/svg"
                className="video-details-section__views-icon"
              >
                <path
                  d="M11 0C6 0 1.73 3.11 0 7.5C1.73 11.89 6 15 11 15C16 15 20.27 11.89 22 7.5C20.27 3.11 16 0 11 0ZM11 12.5C8.24 12.5 6 10.26 6 7.5C6 4.74 8.24 2.5 11 2.5C13.76 2.5 16 4.74 16 7.5C16 10.26 13.76 12.5 11 12.5ZM11 4.5C9.34 4.5 8 5.84 8 7.5C8 9.16 9.34 10.5 11 10.5C12.66 10.5 14 9.16 14 7.5C14 5.84 12.66 4.5 11 4.5Z"
                  fill="#AFAFAF"
                />
              </svg>
              {video?.views}
            </h5>
          </div>
          <div className="video-details-section__likes-container">
            <h5 className="video-details-section__likes">
              <svg
                width="17"
                height="16"
                viewBox="0 0 17 16"
                fill="current"
                xmlns="http://www.w3.org/2000/svg"
                className="video-details-section__likes-icon"
              >
                <path
                  d="M12.325 0C10.846 0 9.4265 0.682105 8.5 1.76C7.5735 0.682105 6.154 0 4.675 0C2.057 0 0 2.03789 0 4.63158C0 7.81474 2.89 10.4084 7.2675 14.3495L8.5 15.4526L9.7325 14.3411C14.11 10.4084 17 7.81474 17 4.63158C17 2.03789 14.943 0 12.325 0Z"
                  fill="#AFAFAF"
                />
              </svg>
              {video?.likes}
            </h5>
          </div>
        </div>
      </div>
      <p className="video-details-section__description">{video?.description}</p>
      <h3 className="video-details-section__comments-count">
        {video?.comments?.length} Comments
      </h3>
    </section>
  )
}

export default VideoDetailsSection
