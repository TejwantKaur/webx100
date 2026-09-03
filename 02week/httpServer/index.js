const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());

// similar to fs.readFile("a.txt", "utf-8", ()) callback
app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.post("/conversations", (req, res)=> {
    console.log(req.body);
    res.send({
        msg: "2+2=4"
    })
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});