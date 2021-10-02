# Welcome to MVYA - web

Greetings everyone! Here we are creating an app that would be just like Yelp, but for merchandises instead. No more wasting time surfing online reading reviews from different websites (Many websites are paid to write good/bad reviews for products).

This would be an all-in-one app that would allow consumers to read and write reviews for a variety of products. Literally for any merchandise. The ultimate goal is to collect as much real user-experience reviews to create an unbiased ranking of "the best" products out there.

## A Open Source Web Client

We believe that there is no better way to design a beautiful interface and features than to welcome all developers to add their taste to the design. There is no perfect way to tailor it; but through blending a bit of spice from here and there, we believe that we can create a interface that would be favored and accepted by the majority. Hopefully!

## Installing Requirements and Creating a Simple Node Server

First download the repo by running:

`git clone https://github.com/anthonyyang87/MVYA-web.git`

If you haven't already, install [Node.js](https://nodejs.dev/download/), [npm](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm), along with the required dependencies. Then create a simple node server.

A simple node server looks this:

```
const express = require("express");

const PORT = process.env.PORT || 3001;

const app = express();

app.get("/api", (req, res) => {
  res.json({
    message: "Hello from server!"
  });
});

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});
```

Learn more about [Node.js](https://nodejs.dev/learn) and [npm](https://docs.npmjs.com/about-npm)!

## Running Server and Client

To test code changes/features, navigate to your server directory and run:

`npm start`

Then navigate to your client directory and run:

`npm start`

## Happy coding!

To contribute, please fork the repo and submit a pull request.
