import axios from 'axios'
import React, { useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import './UploadForm.scss'
// import imagePlaceholder from '../../assets/Images/upload-video-preview.jpg'

const imagePlaceholder = 'http://localhost:8080/images/upload-video-preview.jpg'

const UploadForm = () => {
  const navigate = useNavigate()

  const titleInputRef = useRef(null)
  const channelInputRef = useRef(null)
  const descriptionInputRef = useRef(null)

  const isFormEntriesValid = () => {
    const title = titleInputRef.current.value
    const channel = channelInputRef.current.value
    const description = descriptionInputRef.current.value

    if (title && channel && description) {
      return true
    }

    return false
  }

  const showValidationError = () => {
    const title = titleInputRef.current
    const channel = channelInputRef.current
    const description = descriptionInputRef.current

    title.classList.remove('invalid')
    channel.classList.remove('invalid')
    description.classList.remove('invalid')

    if (title.value === '') title.classList.add('invalid')

    if (channel.value === '') channel.classList.add('invalid')

    if (description.value === '') description.classList.add('invalid')
  }

  const handleUpload = (e) => {
    e.preventDefault()

    const form = new FormData(e.target).entries()
    const videoInfo = Object.fromEntries(form)

    if (isFormEntriesValid()) {
      axios
        .post('http://localhost:8080/videos/', videoInfo)
        .then((data) => {
          alert('The new video has been uploaded successfully!')
        })
        .catch((err) => {
          alert(`There was an error: ${String(err.message)}`)
        })
    } else {
      alert('Invalid form. Please, double check the indicated fields in red.')
      showValidationError()
    }
  }

  const handleCancel = (e) => {
    e.preventDefault()
    navigate('/')
  }

  return (
    <form className="upload-form" onSubmit={handleUpload}>
      <h1 className="upload-form__title">Upload Video</h1>

      <div className="upload-form__img-input-wrapper">
        <div className="upload-form__image-container">
          <label className="upload-form__label">Video Thumbnail</label>
          <img
            src={imagePlaceholder}
            alt="Video Thumbnail"
            className="upload-form__img"
          />
        </div>
        <div className="upload-form__inputs-container">
          <div className="upload-form__input-group">
            <label className="upload-form__title__label" htmlFor="title">
              Title Your Video
            </label>
            <input
              ref={titleInputRef}
              onBlur={showValidationError}
              className="upload-form__title__input"
              type="text"
              name="title"
              id="title"
              placeholder="Add a title to your video"
            />
          </div>
          <div className="upload-form__input-group">
            <label className="upload-form__title__label" htmlFor="title">
              Your Channel Name
            </label>
            <input
              ref={channelInputRef}
              onBlur={showValidationError}
              className="upload-form__title__input"
              type="text"
              name="channel"
              id="channel"
              placeholder="Add a channel name"
            />
          </div>
          <div className="upload-form__input-group">
            <label
              className="upload-form__description__label"
              htmlFor="description"
            >
              Add a video description
            </label>
            <textarea
              ref={descriptionInputRef}
              onBlur={showValidationError}
              id="description"
              name="description"
              placeholder="Add a description to your video"
              className="upload-form__description__input"
            />
          </div>
        </div>
      </div>
      <div className="upload-form__btn-group">
        <button type="submit" className="upload-form__submit-btn">
          Publish
        </button>
        <button className="upload-form__cancel-btn" onClick={handleCancel}>
          Cancel
        </button>
      </div>
    </form>
  )
}

export default UploadForm
