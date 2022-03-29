const express = require('express');
const dotenv = require('dotenv');
const notes = require('./data/notes');

const app = express();
dotenv.config();

const PORT = process.env.PORT || 5500;

app.get('/', (req, res) => {
    res.send('Server running');
});

app.get('/api/notes', (req,res) => {
    res.send(notes);
});

app.get('/api/notes/:id', (req,res) => {
    const note = notes.find(n => n._id === req.params.id);
    res.send(note);
})

app.listen(PORT, console.log(`listening on PORT ${PORT} !`));