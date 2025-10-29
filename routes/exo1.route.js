const express = require('express');
const router = express.Router();

//route post sur exo1
router.post('/', (req, res)=> {
    const data = req.body;
    
    res.status(200).json({
        message: 'renvois des datas ok',
        data: data
    })
})

module.exports = router;
