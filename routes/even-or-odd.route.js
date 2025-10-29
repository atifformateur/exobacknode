const express = require('express');
const router = express.Router();
router.use(express.json());
//route post qui verifie si le nbr est pair ou impair
router.post('/', (req, res) => {
    console.log('dans ma route even or odd', req.headers, req.body );
    const {number} = req.body;

    //verif de la parité
    const result = number % 2 === 0 ? 'pair' : 'impair';

    res.status(200).json({
        message: "le nombre " + number + " est " + result,
    });
});

module.exports = router;