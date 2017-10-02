const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('Hello');
});

app.get('/test', (req, res) => {
    res.send('OK BB');
})
app.get('/test2', (req, res) => {
    res.send('OK BB2');
})

app.all('/help1', (req, res) => {
    res.send('ok1');
});


app.all('/help', (req, res) => {
    res.send('ok');
});


app.listen(8099);