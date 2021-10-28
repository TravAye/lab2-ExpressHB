// require the express module
import express from "express";

// create a new Router object
const pizzaRouter = express.Router();

pizzaRouter.get("/", (req, res) => {
  res.render("homepage");
});

pizzaRouter.get("/specialty", (req, res) => {
  res.render("specialty", req.query);
});

pizzaRouter.get("/review", (req, res) => {
  res.render("review", req.body);
});

pizzaRouter.post("/rthanks", (req, res) => {
  console.log(req.body);
  res.render("rthanks", req.body);
});

pizzaRouter.get("/custom", (req, res) => {
  res.render("custom", req.body);
});

pizzaRouter.get("/rpizza", (req, res) => {
  res.render("rpizza", {});
});

export default pizzaRouter;
