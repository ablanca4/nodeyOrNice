const request = require('request');

//making a request
// accepts an object, and a callback function.
request({
    url: 'https://maps.googleapis.com/maps/api/geocode/json?address=950%20Glenn%20Dr%20folsom',
    json: true
}, (error, response, body)=>{
    // inside callback function for the request.

    //accessomg formatted address, lat, and lng
    console.log(`Address: ${body.results[0].formatted_address}`);
    console.log(`Lat: ${body.results[0].geometry.location.lat}`);
    console.log(`Lng: ${body.results[0].geometry.location.lng}`);

});
