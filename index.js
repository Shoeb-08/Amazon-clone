const functions = require('firebase-functions');
const express = require("express");
//const  = require("express");
const cors=require("cors");
const { response } = require("express");
const stripe = require("stripe")
('sk_test_51J8nM4SJwsXcce7B7ETh7kSVNKDu04bg7ouI9rcUSpEDF8b0DqhT5T6idc1D6ibCPJGPBFbQMTmIl4IaolcGr4ZG00PKIUoUax')


//-app config
const app=express();

// middlewares
app.use(cors({origin:true}));
app.use(express.json());
app.get('/',(request,response)=> response.status(200).send('hello world'))
app.post('/payments/create', async(request,response)=>{
    const total=request.query.total;
    console.log('Payment Request Recieved>>>>', total);
    const paymentIntent =await stripe.paymentIntents.create({
        amount:total,
        currency:"usd",
    });
    response.status(201).send({
        clientSecret: paymentIntent.client_secret,
    });
});

exports.api= functions.https.onRequest(app);

//http://localhost:5001/clone-19986/us-central1/api
