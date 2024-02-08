// import express dan axios
import axios from 'axios';
import express from 'express';
// inisialisasi express
const app = express();
const port = 3000;  

app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));

const API_URL = 'https://v2.jokeapi.dev/Any';

// get
app.get('/', (req, res) => {
  res.render('index.ejs');
});

app.get('/randomJoke', async (req, res) => {
  try {
    const response = await axios.get(API_URL);
    const joke = response.data;
    res.render('joke.ejs', { joke });
  } catch (error) {
    res.send(error.message);
  }
});

// post



// listen

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
} );
