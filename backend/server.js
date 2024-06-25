const express = require('express');
const app = express();
const {google} = require('googleapis');
const port = 4000;


app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Something broke!');
    });


const youtubeClient = google.youtube({
    version: 'v3',
    //auth comes here
})

app.post('/analyze-youtube', async (res, req) => {
    console.log('Received POST request to /analyze-youtube');
    const youtubeLink = req.body.youtubeLink;
    console.log('YouTube Link:', youtubeLink);
    try{
        const videoId = extractVideoId(youtubeLink);
        const videoResponse = await youtubeClient.videos.list({
            part: 'snippet',
            id: videoId
    })
    const videoTitle = videoResponse.data.items[0].snippet.title;
    const videoDescription = videoResponse.data.items[0].snippet.description;   
    
// Construct response
    const response = {
        title: videoTitle,
        description: videoDescription,
        
    }
// Send response
res.json(response);
    } catch (error) {
        console.error('error analyzing vidoe',error);
        res.statusCode(500).json({error: 'Internal Server Error'});
    }
})




app.get('/', (req, res) => {
    res.send('hello')
})



app.listen(4000, () => {
    console.log(`server is running on port ${port}`)
})
