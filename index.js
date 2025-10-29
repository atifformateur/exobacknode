//import des outils
const express = require('express');
const cors = require('cors');
//configure lance les outils
const app = express();
const PORT = 3000;

//middleware
app.use(express.json());
app.use(cors());

//importer les routes
const exo1Router = require('./routes/exo1.route');

//activation des routes
app.use('/', exo1Router);

//la logique qui gere les erreurs 404
app.use((req, res) => {
    res.status(404).json({
        message: 'page non existante',
        path: req.originalUrl
    });
});

//lance notre server node
app.listen(PORT, ()=> {
    console.log('server bien lancé ! sur le port' + PORT)
});

