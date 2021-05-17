const express = require("express");
const app = express();
const port = process.env.PORT || 3000;

//load and parse incoming request object
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

let router = require("./Routers/router.js");

app.use("/data", router);

app.listen(port, () => {
  console.log(`Listening at port ${port} .....`);
});

module.exports=app;