const express = require('express');
const path = require('path');
const app = express();
app.listen(8080);
app.use('/src', express.static(__dirname + '/src'));
app.get('/', (req, res) => res.sendFile(path.join(__dirname, '/views/Lead-Capture.html')));
app.get('/Thankyou', (req, res) => res.sendFile(path.join(__dirname, '/views/Thank-you-Page.html')));