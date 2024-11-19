// Needed for dotenv
require("dotenv").config();

// Needed for popups
const notifier = require('node-notifier');

// Needed for Express
var express = require('express');
var app = express();

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
app.get('/', async function(req, res) {

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
  
  res.render('pages/home');
});

// Load card page

app.get('/cards', function(req, res) {

res.render('pages/cards', {card_db: card_db, card_themes: card_themes});

});

// About page
app.get('/about', function(req, res) {
  res.render('pages/about');
});

// Lists page
app.get('/list', function(req, res) {
  res.render('pages/list');
});

// New post page
app.get('/new', function(req, res) {
  res.render('pages/new');
});

// Create a new question
app.post('/new', async function(req, res) {
    
  // Try-Catch for any errors
  try {
      // Get the title and content from submitted form
      question = req.body.question;
      heat = parseInt(req.body.heat);
      theme = req.body.theme;

      // Reload page if empty title or content
      if (!question || !heat || !theme) {
          console.log("Unable to submit new question, missing question, heat or theme.");
          res.render('pages/new');
      } else {
          // Create post and store in database
          const blog = await prisma.card.create({
              data: { question, heat , theme },
          });

          notifier.notify({
            title: 'Success!',
            message: 'Thanks for submitting your question! You will now be redirected to the homepage. Check the izzyQ or izzyList apps for your new question!',
          });
          
          // Redirect to homepage upon successful submission 
          res.redirect('/');
      }
    } catch (error) {
      console.log(error);
      res.render('pages/new');
    }

});

// Tells the app which port to run on
app.listen(8080);

