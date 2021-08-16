//mongodb+srv://asim:<password>@reactwithnode.f909o.mongodb.net/myFirstDatabase?retryWrites=true&w=majority

const express = require("express");
const PORT = process.env.PORT || 3001;

const mongoose = require("mongoose");

const usersModel = require("./models/users");
const app = express();

app.use(express.json());

mongoose
  .connect(
    "mongodb+srv://asim:asim@reactwithnode.f909o.mongodb.net/programming?retryWrites=true&w=majority",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  )
  .then(() => {
    console.log("database connection successful");
  })
  .catch((err) => {
    console.log("Something went wrong", err);
  });

app.get("/api", (req, res) => {
  res.json({ message: "Hello from Node js server" });
});

app.post("/insert", async (req, res) => {
  const name = req.body.name;
  const email = req.body.email;

  const user = new usersModel({
    name: name,
    email: email,
  });

  try {
    await user.save().then((result) => {
      console.log(result);
      res.send("Record is inserted Successfully");
    });
  } catch (error) {
    console.log("data is not inserted because of :  ", error);
  }
});

app.listen(PORT, () => {
  console.log(`Server running at port ${PORT}`);
});
