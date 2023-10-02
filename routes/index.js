// Sehajpreet Kaur
const express = require("express");
const router = express.Router();
const path = require("path");

router.get("/", function (req, res, next) {
  res.render("home");
});

router.get("/about", function (req, res, next) {
  res.render("about");
});

router.get("/projects", function (req, res, next) {
  res.render("projects");
});

router.get("/services", function (req, res, next) {
  res.render("services");
});

router.get("/contact", function (req, res, next) {
  res.render("contact");
});

router.get("/resume", function (req, res, next) {
  const pdfFilePath = path.join(__dirname, "../public", "resume.pdf");
  res.download(pdfFilePath, "resume.pdf");
});

router.post("/form-data", function (req, res, next) {
  res.send('<p>Data Received!<br></br><a href=" / ">Home</a></p>');
});
module.exports = router;
