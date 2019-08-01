const { createServer } = require("http");
const { parse } = require("url");
const next = require("next");

const express = require("express");
const graphqlHTTP = require("express-graphql");
const schema = require("./schema/schema");

const dev = process.env.NODE_ENV !== "production";
const app = next({ dev });
const handle = app.getRequestHandler();

const graphqlApp = express();

graphqlApp.use(
  "/graphql",
  graphqlHTTP({
    schema
  })
);
graphqlApp.listen(3001, err => {
  if (err) throw err;
  console.log("> Ready on http://localhost:3000");
});

app.prepare().then(() => {
  createServer((req, res) => {
    // Be sure to pass `true` as the second argument to `url.parse`.
    // This tells it to parse the query portion of the URL.
    const parsedUrl = parse(req.url, true);
    const { pathname, query } = parsedUrl;

    if (pathname === "/") {
      req.data = "hello";
      app.render(req, res, "/index", query);
    } else {
      handle(req, res, parsedUrl);
    }
  }).listen(3000, err => {
    if (err) throw err;
    console.log("> Ready on http://localhost:3000");
  });
});
