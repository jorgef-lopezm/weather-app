import express from 'express';

const app = express();

app.get('', (request, response) => {
    response.send('Hello Express!');
});

app.get('/help', (request, response) => {
    response.send('Help page');
});

app.listen(3000, () => {
    console.log('Server is up on port 3000');
});
