const express = require('express');
const path = require('path');

const app = express();
const port = 3000;

// Static files middleware
app.use('/simulate', express.static(path.join(__dirname, 'quickstart-web-master')));
app.use('/', express.static(path.join(__dirname, 'main-page')));

// Routes (optional)
app.get('/simulate', (req, res) => {
    res.sendFile(path.join(__dirname, 'quickstart-web-master', 'index.html'));
});

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'main-page', 'index.html'));
});

// Start server
app.listen(port, '0.0.0.0', () => {
    console.log(`Server running at http://0.0.0.0:${port}/`);
});
