import express from 'express';
import path from 'path';

const app = express();

app.get('', (request, response) => {
    response.send('Hello Express!');
});

app.get('/help', (request, response) => {
    response.send('Help page');
});

app.get('/about', (request, response) => {
    response.send('About page');
});

app.listen(3000, () => {
    console.log('Server is up on port 3000');
});
