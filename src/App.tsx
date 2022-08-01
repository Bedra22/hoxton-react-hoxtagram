import { useEffect, useState } from 'react'
import './App.css'
import { ImageContainer } from './components/ImageContainer'
import { Logo } from './components/Logo'
import './index.css'

function App() {
  const [image, setImages] = useState([])


  const [comments, setComments] = useState([])




  useEffect(() => {
    fetch('http://localhost:3000/images')
      .then(resp => resp.json())
      .then(imagesFromServer => setImages(imagesFromServer))
  }, [])
  useEffect(() => {
    fetch('http://localhost:3000/comments')
      .then(resp => resp.json())
      .then(commentsFromServer => setComments(commentsFromServer))
  }, [])

  return (
    <div className="App">

      <Logo />

      <ImageContainer image={image} comments={comments} post={[]} />

    </div>
  )
}

export default App
