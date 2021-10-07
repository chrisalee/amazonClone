const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
const stripe = require("stripe")("sk_test_51HlzmZBqekqPCRsWQ2g0RRsgbjOoUc5fnaFMH4uZyIayhba8ub1Fb0x6JiSNpmiIWcal75VJTuK6XabXm0PV3hYP007yA6hr3K");

// API  ****************************************************************************************

// - App config
const app = express();

// - Middlewares
app.use(cors({ origin: true }));
app.use(express.json());

// - API routes
app.get("/", (request, response) => response.status(200).send("hello amazon clone"));

app.post("/payments/create", async (request, response) => {
    const total = request.query.total;

    //check terminal for this console.log()
    console.log("Payment Request Recieved for this amount >>> $", total, ' ************************************************************************************');

    const paymentIntent = await stripe.paymentIntents.create({
        amount: total, // subunits of the currency
        currency: "usd",
    });

  // 201 - OK good- something Created
    response.status(201).send({
        clientSecret: paymentIntent.client_secret,
    });
});

// - Listen command
exports.api = functions.https.onRequest(app);

// Example endpoint
// http://localhost:5001/challenge-20d6d/us-central1/api
