// Needed for dotenv
require("dotenv").config();

// Needed for Express
var express = require('express')
var app = express()

// Needed for EJS
app.set('view engine', 'ejs');

// Needed for public directory
app.use(express.static(__dirname + '/public'));

// Needed for parsing form data
app.use(express.json());       
app.use(express.urlencoded({extended: true}));

// Needed for Prisma to connect to database
const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient();

// Generate variables for cards and questions

let questions = [];
let currentCard = {};

// Home page
app.get('/', function(req, res) {
  res.render('pages/home');
});

// Load card page

app.get('/cards', async function(req, res) {

  // Get questions 
  card_db = await prisma.card.findMany({
    orderBy: [
      {
        id: 'desc'
      }
    ]

  });

  await nextCard();
  console.log(currentCard);

res.render('pages/cards', { card: currentCard , card_db: card_db});

});

// Get a new question

app.post("", (req, res) => {

  nextCard();

  res.render("pages/cards", { card: currentCard , card_db: card_db });

});

async function nextCard() {
  const randomCard = card_db[Math.floor(Math.random() * card_db.length)];
  currentCard = randomCard;
}

// Tells the app which port to run on
app.listen(8080);

