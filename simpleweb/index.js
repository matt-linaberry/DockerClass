const express = require('express');

const app = express();

app.get('/', (req, res) => {
    res.send('Hi there, you silly bafoon! you aint breaking the cache!');
});

app.listen(8080, () => {
    console.log("Listening on 8080!");
});