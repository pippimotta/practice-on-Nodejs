const express = require('express');

const app = express();

app.get("/", function(req, res){
  console.log(req);
  res.send('Hello')
});

app.get("/contact",(req, res)=>{
  res.send('Contact me at mushroom@gmail.com')
})

app.get('/about',(req,res)=>{
  res.send("I am a professional sleeper and I love capypara")
})

app.get('/hobbies',(req,res)=>{
  res.send('sleep, watching anime, cooking')
})
app.listen(3000, ()=> {
  console.log('Server is on port 3000')
});
