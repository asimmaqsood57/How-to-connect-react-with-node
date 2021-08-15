const express = require("express");
const PORT = process.env.PORT || 3001;

const app = express();

app.get("/api", (req, res) => {
  res.json({ message: "Hello from Node js server" });
});

app.listen(PORT, () => {
  console.log(`Server running at port ${PORT}`);
});
