const express = require('express');
const router = express.Router();

router.use(express.json());

router.post('/', (req, res) => {
    console.log(req.body);

    const {text} = req.body;
    const length = text.length;

    res.status(200).json({
        message: "le text fait " + length + " de caracs",
        length: length
    });
})

module.exports = router;