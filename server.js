/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable no-undef */
const express = require('express');
const dotenv = require('dotenv');
const axios = require('axios');
const cors = require('cors');

dotenv.config();

const app = express();
const PORT = process.env.PORT || 4000;

app.use(cors());

const OMDB_URL = process.env.OMDB_URL;

async function fetchMovies(keyword) {
  try {
    const { data } = await axios.get(`${OMDB_URL}&s=${keyword}`);
    return data;
  } catch (error) {
    throw new Error(error);
  }
}

app.get('/api/movies', async (req, res) => {
  try {
    const movieData = await fetchMovies(req.query.keyword);
    return res.status(200).send(movieData);
  } catch (error) {
    console.log(error);
    res.status(400).send(error.message);
  }
});

if (['production'].includes(process.env.NODE_ENV)) {
  app.use(express.static('build'));

  const path = require('path');
  app.get('*', (req, res) => {
    res.sendFile(path.resolve('build', 'index.html'));
  });
}

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
