const { google } = require('googleapis');
const api_key = process.env.YOUTUBE_API_KEY;


const youtubeClient = google.youtube({
    version: 'v3',
    auth: api_key
});

const helloWorld = (req, res) => {
    res.json({message:'Hello World'});

}

const extractVideoId = (url) => {
    const regex = /(?:youtube\.com\/(?:[^\/\n\s]+\/\S+\/|(?:v|e(?:mbed)?)\/|.*[?&]v=)|youtu\.be\/)([a-zA-Z0-9-_]{11})/;
    const matches = url.match(regex);
    return matches ? matches[1] : null;

}


const getVideoDescription = async(req,res) => {
    const youtubeLink = req.body.youtubeLink;
    console.log('Received YouTube Link:', youtubeLink);
    
    try {

        const videoId = extractVideoId(youtubeLink);
        if (!videoId) {
            return res.status(400).json({ error: 'Invalid YouTube link' });
        }

        const videoResponse = await youtubeClient.videos.list({
            part: 'snippet',
            id: videoId
        });

        
        const videoTitle = videoResponse.data.items[0].snippet.title;
        const videoDescription = videoResponse.data.items[0].snippet.description;

        const response = {
            title: videoTitle,
            description: videoDescription
        };

        res.json({...response });
    } catch (error) {
        console.error('Error analyzing video', error)
        res.status(500).json({ error: 'Internal Server Error' });
    }

    // const regex = /(?:youtube\.com\/(?:[^\/\n\s]+\/\S+\/|(?:v|e(?:mbed)?)\/|.*[?&]v=)|youtu\.be\/)([a-zA-Z0-9-_]{11})/;
    // const matches = url.match(regex);
    // return matches ? matches[1] : null; 


};


module.exports = {
    getVideoDescription,
    helloWorld};