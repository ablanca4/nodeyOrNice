const request = require('request');

//making a request
request({
    url: 'https://maps.googleapis.com/maps/api/geocode/json?address=1122%20Skywest%20Ct%20Fairfield',
    json: true
}, (error, response, body)=>{
    console.log(body);
});