import { PrismaClient } from '@prisma/client'; 
import { log } from 'console';

const prisma = new PrismaClient();

const data = [
        { question: 'What is a vegetable you dislike?', theme: 'Food', heat: 2 },
        { question: 'What was an occupation you wanted to have as a kid?', theme: 'Nostalgia', heat: 1 },
        { question: 'What is one productivity hack you like to use?', theme: 'Work', heat: 2 },
        { question: 'How do you like your fries?', theme: 'Food', heat: 2 },
        { question: 'If you didn\'t have to worry about paying bills or relevant skills, what job would you want to do?', theme: 'Life & Career', heat: 3 },
        { question: 'What takes up too much of your time?', theme: 'Hobbies & Habits', heat: 3 },
        { question: 'What’s a skill you’ve always wanted to learn but haven’t yet?', theme: 'Hobbies & Habits', heat: 3 },
        { question: 'What are you willing to spend money/splurge on? ', theme: 'Shopping', heat: 2 },
        { question: 'What is one thing you would want in your dream house?', theme: 'Life & Career', heat: 3 },
        { question: 'What is your favorite time of the day and why?', theme: 'Hobbies & Habits', heat: 3 },
        { question: 'What is a catchphrase of yours?', theme: 'Hobbies & Habits', heat: 3 },
        { question: 'What item do you always pack with you when going on a trip? ', theme: 'Travel', heat: 1 },
        { question: 'What is the best country to go to on vacation? ', theme: 'Travel', heat: 3 },
        { question: 'What is one item you would be happy to receive as a birthday present? ', theme: 'Hobbies & Habits', heat: 2 },
        { question: 'What is the first thing you do when you wake up in the morning? ', theme: 'Hobbies & Habits', heat: 1 },
        { question: 'Which mall is the best mall?', theme: 'Shopping', heat: 3 },
        { question: 'What do you usually eat for breakfast?', theme: 'Food', heat: 1 },
        { question: 'What dish do you usually get at a hawker centre?', theme: 'Food', heat: 2 },
        { question: 'What is your nearest MRT station, and how near is it to you?', theme: 'Hobbies & Habits', heat: 1 },
        { question: 'Which neighbourhood did you grow up?', theme: 'Nostalgia', heat: 1 },
        { question: 'What subject in school do you wish you had learned better?', theme: 'Nostalgia', heat: 3 },
        { question: 'If you could make an office rule that everyone had to follow for a day, what would it be?', theme: 'Work', heat: 3 },
        { question: 'How do you feel about taking pictures of food before eating?', theme: 'Food', heat: 3 },
        { question: 'What is your McDonald\'s order?', theme: 'Food', heat: 1 },
        { question: 'What’s your favorite type of cuisine?', theme: 'Food', heat: 2 },
        { question: 'What is something you really like to eat with rice?', theme: 'Food', heat: 2 },
        { question: 'What was your first job?', theme: 'Occupation', heat: 1 },
        { question: 'What is your standard office lunch?', theme: 'Office', heat: 1 },
        { question: 'What do you like to do to relax after a long day?', theme: 'Hobbies & Habits', heat: 2 },
        { question: 'What’s a cause or charity that means a lot to you?', theme: 'Passions', heat: 3 },
        { question: 'What is one way you like to spend a day off?', theme: 'Hobbies & Habits', heat: 2 },
        { question: 'When was the last time you felt inspired to create something?', theme: 'Hobbies & Habits', heat: 1 },
        { question: 'What is a character trait you admire?', theme: 'Hobbies & Habits', heat: 2 },
        { question: 'Share one thing that is in your wallet', theme: 'Hobbies & Habits', heat: 2 },
        { question: 'Name one thing you plan to do this weekend ', theme: 'Hobbies & Habits', heat: 3 },
        ]

async function main() {
    await prisma.card.createMany({
        data,
        skipDuplicates: true,
    })
}

main()
    .catch((e) => {
        console.log(e);
        process.exit(1);

    })
    .finally(() => {
        prisma.$disconnect();
    })