const express = require('express');
const app = express();
const PORT = process.env.PORT || 3007;
const mongoose = require('mongoose');

app.use(express.urlencoded({extended:true}));
app.use(express.json());
app.use(express.static('public'))

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workout", {
  useNewUrlParser: true,
  useFindAndModify: false
});
app.use("/api", require('./routes/api-routes'))
app.use(require('./routes/html-routes'));
app.listen(PORT, ()=> console.log("app is listening on port "+ PORT))