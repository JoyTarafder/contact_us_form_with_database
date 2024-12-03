const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

const app = express();
app.use(bodyParser.json());
app.use(express.static("public"));

mongoose.connect("mongodb://localhost:27017/contactApp", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const contactSchema = new mongoose.Schema({
  name: String,
  email: String,
  phone: String,
  subject: String,
  message: String,
});

const Contact = mongoose.model("Contact", contactSchema);

app.post("/submit", async (req, res) => {
  const contact = new Contact(req.body);
  await contact.save();
  res.sendStatus(200);
});

app.get("/data", async (req, res) => {
  const data = await Contact.find();
  res.json(data);
});

app.listen(3000, () => {
  console.log("Server is running on http://localhost:3000");
});
