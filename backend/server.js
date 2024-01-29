import express from "express";
import "dotenv/config";

const app = express();
const port = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.send("server is ready");
});

app.get("/api/jokes", (req, res) => {
  const jokes = [
    {
      id: 1,
      title: "A joke",
      content: "this is a joke",
    },
    {
      id: 2,
      title: "A big  joke",
      content: "this is big joke",
    },
    {
      id: 3,
      title: "Another  joke",
      content: "this is another joke",
    },
  ];
  res.send(jokes);
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
