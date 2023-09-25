import { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import CommentsSection from '../components/CommentsSection/CommentsSection'
import Container from '../components/Container/Container'
import NewCommentForm from '../components/NewCommentForm/NewCommentForm'
import VideoDetailsSection from '../components/VideoDetailsSection/VideoDetailsSection'
import VideoPlayer from '../components/VideoPlayer/VideoPlayer'
import VideosList from '../components/VideosList/VideosList'
import axios from 'axios'

//! Constants:
const API_URL = 'https://brainflix-api-final-a60c2f2d3754.herokuapp.com/'
const VideosEndPoint = 'videos/'

const Home = () => {
  const [videosList, setVideosList] = useState([])
  const [originalVideosList, setOriginalVideosList] = useState([])
  const [currentVideo, setCurrentVideo] = useState(null)
  let navigate = useNavigate()
  let params = useParams()

  //! function to fetch the videos list from the API:
  async function fetchVideosList() {
    try {
      const response = await axios.get(API_URL + VideosEndPoint)
      const data = response.data.data

      setVideosList(data)
      setOriginalVideosList(data)

      const firstVideoID = data[0].id
      navigate('/' + firstVideoID)
    } catch (err) {
      console.log(`There was an error ${err.message}`)
    }
  }

  useEffect(() => {
    fetchVideosList()
  }, [])

  useEffect(() => {
    setVideosList(
      originalVideosList.filter((video) => video.id !== currentVideo.id)
    )
  }, [currentVideo])

  useEffect(() => {
    const { videoId } = params
    if (videoId) {
      handelVideoIdChange(videoId)
    }
  }, [params.videoId])

  const handelVideoIdChange = async (videoID) => {
    try {
      const response = await axios.get(API_URL + VideosEndPoint + videoID)
      setCurrentVideo(response.data.data)
      window.location.hash = '#top'
    } catch (err) {
      console.log(`There was an error ${err.message}`)
    }
  }

  return (
    <>
      <VideoPlayer video={currentVideo} />
      <Container className={'wrapper'}>
        <Container>
          <VideoDetailsSection video={currentVideo} />
          <NewCommentForm />
          <CommentsSection video={currentVideo} />
        </Container>
        <VideosList videosList={videosList} />
      </Container>
    </>
  )
}

export default Home
