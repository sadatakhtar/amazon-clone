const functions = require("firebase-functions");
const express = require('express')
const cors = require('cors');
const stripe = require('stripe')('sk_test_51JOhEJB3nmyJKnm1K0VkCc0WQWoMAODC7s3MvuyyUUsOlrYGzACv1e5eQkjTco1VoIgR7jHKawSqZPJKbJlLKXp200S7MasiDY')


//API

// App config
const app = express();

//Middleware
app.use(cors({ origin: true}));
app.use(express.json())

//Routes
app.get('/', (request, response) => {
    response.status(200).send('Welcome to test endpoint!');
})

app.get('/test', (request, response) => {
    response.status(200).send('haaaritttteee!');
})

app.post('/payments/create', async (request, response) => {
    const total = request.query.total;

    console.log('Payment request recieved BOOOM!!!!', total)

    const paymentIntent = await stripe.paymentIntents.create({
        amount: total,
        currency: 'usd',
    });

    //ok - created
    response.status(201).send({
        clientSecret: paymentIntent.client_secret 

    });

})

//Listen
exports.api = functions.https.onRequest(app)

//Example endpoint
//http://localhost:5001/clone-76120/us-central1/api