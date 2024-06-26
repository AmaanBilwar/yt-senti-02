// import React from 'react'
// import {axios}  from 'axios'
// import {useState} from 'react'



// const Home = () => {
//   const[ youtubeLink, setYoutubeLink] = useState([])
//   const[ responseMessage, setResponseMessage] = useState([]) 


//   const handleSubmit = async (event) => {
//     event.preventDefault();
//     try {
//       const response = await axios.post('/', {
//         youtubeLink: youtubeLink
//     })
//     console.log('Response from server:', response.data);
//     setResponseMessage(response.data.message);

//   }catch (error) {
//     console.error('Error submitting request', error);
//   }
//   return (
//     <>
//     <div>
//       <form onSubmit={handleSubmit}>
//       <input
//         type="text"
//         value={youtubeLink}
//         onChange={(e) => setYoutubeLink(e.target.value)}
//         placeholder="Enter YouTube link"
//       />
//       <button type="submit">Submit</button>
//     </form>
//     {responseMessage && <p>Response: {responseMessage}</p>}</div>
      
//     </>
//   )
// }
// }

// export default Home;
import React from 'react';
import axios from 'axios';
import { useState } from 'react';



const Home = () => {

      const[ youtubeLink, setYoutubeLink] = useState([])
        const[ responseMessage, setResponseMessage] = useState([]) 
      
      
        const handleSubmit = async (event) => {
          event.preventDefault();
          try {
            const response = await axios.post('/', {
              youtubeLink: youtubeLink
          })
          console.log('Response from server:', response.data);
          setResponseMessage(response.data.message);
      
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
          </form>
          </ div>
          </>
            
          
    );}
};

export default Home;
