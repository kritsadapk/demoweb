const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('Hello');
});

app.all('/health', (req, res) => {
    res.send('ok');
});

app.listen(8080);