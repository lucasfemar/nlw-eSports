import express from 'express';
const app = express();

app.get('/ads', (request, response) => {
    response.json({
        message: 'Acessou Ads!',
    });
});

app.listen(3333, () => {
    console.log('SERVER IS RUNNING!');
});
