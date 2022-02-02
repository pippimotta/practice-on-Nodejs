const express = require('express');

const app = express();

const bodyParser = require("body-parser")

const date = require(__dirname + '/date.js')

app.use(bodyParser.urlencoded({extended: true}))

app.use(express.static(__dirname));
app.set('view engine', "ejs");


const items = ["Buy food", "cooking", "coding", "learning Japanese"];
const workItems = ['open PC', 'touching fish', 'go to WC', 'leaving office']
app.get('/', (req, res) => {

  let day = date.getDate()
  res.render('list', {listTitle: day,  newListItems : items})

})

app.post('/', (req,res) => {
  let item = req.body.newItem;
  if (req.body.list === 'Workday') {
    workItems.push(item)
    res.redirect("/work")
  } else {
    items.push(item)
    res.redirect("/")
  }

})

app.get('/work', (req,res) => {
   res.render('list', {listTitle:'Workday', newListItems:workItems})
})

app.get('/about', (req,res) => {
  res.render('about')
})

app.listen(3000,() => {
  console.log("Server is running on port 3000");
})
