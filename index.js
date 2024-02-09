// import express dan axios
import axios from 'axios';
import express from 'express';
// inisialisasi express
const app = express();
const port = 3000;  

app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));

const API_URL = 'https://v2.jokeapi.dev/joke/';

// get
app.get('/', (req, res) => {
  res.render('index.ejs', { type:"API Response" });
});

//post

app.post('/randomJoke', async (req, res) => {
  try {
    const response = await axios.get(API_URL+'Any');
    const result = response.data;
    res.render('index.ejs', { 
      joke: result.joke, 
      category: result.category, 
      type: result.type, 
      setup: result.setup, 
      delivery: result.delivery });
  } catch (error) {
    res.send(error.message);
  }
}
);

app.post('/search', async (req, res) => {
  try{
    const category = req.body.category;
    const type = req.body.type;
    const response = await axios.get(`${API_URL}${category}?type=${type}`);
    const result = response.data;
    res.render('index.ejs', { 
      joke: result.joke, 
      category: result.category, 
      type: result.type, 
      setup: result.setup, 
      delivery: result.delivery });
  } catch (error) {
    res.send(error.message);
  }
});



// listen

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
} );
