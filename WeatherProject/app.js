const express = require('express');

const https = require('https');

const bodyParser = require('body-parser')

const app = express();

app.use(bodyParser.urlencoded({extended: true}))

app.get('/', (req, res) => {
  res.sendFile(__dirname +'/index.html')
})

app.post('/', (req,res) => {
  const query = req.body.cityName;
  const apiKey = '13f1ee0270162c49bc1398e3975ee70a'
  const unit = 'metric'
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${query}&units=${unit}&appid=${apiKey}`
  https.get(url, (r) => {
      r.on('data', (d) => {
        const weatherData = JSON.parse(d)
        const weatherIcon = weatherData.weather[0].icon
        const temp = weatherData.main.temp
        const city = weatherData.name
        const weatherDescription = weatherData.weather[0].description
        res.write('<head><meta charset="utf-8"></head>');
        res.write(`<h2>The temprature in ${city} is ${temp}°C now.<br>It is ${weatherDescription}.</h2>`)
        res.write(`<img src="http://openweathermap.org/img/wn/${weatherIcon}@2x.png" alt="an icon of ${weatherDescription} ">`)
        res.send()
        });
        r.on('error', (e) => {
          console.console.error(e);
        });
    });
  })




app.listen(3000, ()  => {
  console.log("The server is running on Port 3000");
})
