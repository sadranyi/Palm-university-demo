// Create a basic express server with one endpoint (/api/ticket) that returns a random ticket number for a lottery
// The ticket number should be a random number between 1 and 1000
// The endpoint should return a JSON object with the ticket number and a message

const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.get('/api/ticket', (req, res) => {
    const ticketNumber = Math.floor(Math.random() * 1000) + 1;
    res.json({ ticketNumber, message: 'Good luck!' });
    }
);

// Add a basic landing page
app.get('/', (req, res) => {
    res.send('Welcome to the lottery!');
});


// Add a route to handle 404 errors
app.use((req, res, next) => {
    res.status(404).send('Page not found');
});

// Add a route to handle 500 errors
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Something went wrong');
});


app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
