const express = require('express');
const {
    getVideoDescription,
    helloWorld
} = require('../controllers/controller');



const router = express.Router();

//get request
router.get('/', helloWorld)

//post request
router.post('/', getVideoDescription)



module.exports = router;