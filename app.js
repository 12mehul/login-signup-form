const connectToDB = require("./db/connection");
const express = require("express");
const app = express();
const users = require("./routes/forms.js");
require("dotenv").config();
const port = 4000;

app.use(express.static("./public"));
app.use(express.json());

app.get("/", (req, res) => {
  res.sendFile("index.html", { root: "public" });
});
app.get("/loginform", (req, res) => {
  res.sendFile("loginform.html", { root: "public" });
});
app.get("/signupform", (req, res) => {
  res.sendFile("signupform.html", { root: "public" });
});
app.use("/api/forms", users);

const startConnection = async () => {
  try {
    await connectToDB(process.env.MONGO_URL);
    app.listen(port, () =>
      console.log(`Example app listening on port ${port}!`)
    );
  } catch (err) {
    console.log(err);
  }
};
startConnection();
