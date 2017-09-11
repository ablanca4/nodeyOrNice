const request = require('request');

//making a request
request({
    url: 'https://maps.googleapis.com/maps/api/geocode/json?address=950%20Glenn%20Dr%20folsom',
    json: true
}, (error, response, body)=>{
    // inside callback function for the request.

    // JSON.stringify makes it easy to see the json object. Takes 3 arguments,
    //value, replacer, and number of spaces.
    console.log(JSON.stringify(body, undefined, 4));
});