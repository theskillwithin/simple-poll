const { createServer } = require("http");
const { parse } = require("url");
const next = require("next");

const express = require("express");
const graphqlHTTP = require("express-graphql");
const mongoose = require("mongoose");
const schema = require("./schema/schema");

const dev = process.env.NODE_ENV !== "production";
const app = next({ dev });
const handle = app.getRequestHandler();

const graphqlApp = express();

const mongoURL = `mongodb+srv://${process.env.DB_USER}:${
  process.env.DB_PASSWORD
}@cluster0-3xwgx.mongodb.net/test?retryWrites=true&w=majority`;

mongoose.connect(mongoURL, { useFindAndModify: false, useNewUrlParser: true });
mongoose.connection.once("open", () => {
  console.log("connected to database");
});

app.prepare().then(() => {
  const server = express();
  server.use(
    "/graphql",
    graphqlHTTP({
      schema
    })
  );

  server.get("/", (req, res) => {
    req.data = "hello";
    return app.render(req, res, "/index", req.query);
  });

  server.get("*", (req, res) => {
    return handle(req, res);
  });

  server.listen(3000, err => {
    if (err) throw err;
    console.log(`> Ready on http://localhost:3000`);
  });
});
