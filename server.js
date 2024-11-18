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

  card_themes = await prisma.card.findMany({
    distinct: ['theme'],
    select: { theme: true }
  });

res.render('pages/cards', {card_db: card_db, card_themes: card_themes});

});

// New post page
app.get('/new', function(req, res) {
  res.render('pages/new');
});

// Create a new post
app.post('/new', async function(req, res) {
    
  // Try-Catch for any errors
  try {
      // Get the title and content from submitted form
      const { question, heat, theme } = req.body;

      // Reload page if empty title or content
      if (!question || !heat || !theme) {
          console.log("Unable to submit new question, missing question, heat or theme.");
          res.render('pages/new');
      } else {
          // Create post and store in database
          const blog = await prisma.card.create({
              data: { question, heat, theme },
          });

          // Redirect back to the homepage
          res.redirect('/');
      }
    } catch (error) {
      console.log(error);
      res.render('pages/new');
    }

});

// Tells the app which port to run on
app.listen(8080);

