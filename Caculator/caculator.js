const express = require('express');



const app = express();
app.use(express.urlencoded());

app.get("/", (req,res)=>{
  res.sendFile(__dirname+ "/bmicaculator.html")
});

app.post('/', (req, res) => {
  // console.log(req.body)
  // res.send('Thx for posting')
  var num1 = Number(req.body.num1);
  var num2 = Number(req.body.num2);
  var result = num1 + num2;
  res.send("The result of caculation is " + result);
})


app.post('/bmicaculator', (req,res)=> {
  var height = Number(req.body.height);
  var weight = Number(req.body.weight);
  var result = (weight /height ** 2).toFixed(2);
  // res.send(`Your BMI is ${result}.`)
  if (result < 18.5) {
    res.send(`Your BMI is ${result}. You are a little slim.`)
  } else if (result > 18.5 && result < 24.9) {
    res.send(`Your BMI is ${result}. That's healthy.`)
  } else {
    res.send(`Your BMI is ${result}. Try to keep more slim.`)
  }

})
app.listen(3000,()=>{
  console.log("This server runs on port 3000");
})
