import React from 'react'
import {axios}  from 'axios'
import {useState} from 'react'

const Home = () => {
  const[youtubeLink, setYoutubeLink] = useState('')
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:4000/analyze-youtube', {
        youtubeLink: youtubeLink
    })

    console.log('Response:', response.data);

  }catch (error) {
    console.error('Error submitting request', error);
  }
  return (
    <>
    <div>
      <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={youtubeLink}
        onChange={(e) => setYoutubeLink(e.target.value)}
        placeholder="Enter YouTube link"
      />
      <button type="submit">Submit</button>
    </form></div>
      
    </>
  )
}
}

export default Home;
