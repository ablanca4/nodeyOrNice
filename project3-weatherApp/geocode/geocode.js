const request = require('request');

var geocodeAddress = (rawAddress, callback) => {
    var encodedAddress = encodeURIComponent(rawAddress);
    //making a request
    // accepts an object, and a callback function.
    request({
        url: `https://maps.googleapis.com/maps/api/geocode/json?address=${encodedAddress}`,
        json: true
    }, (error, response, body)=>{
        // inside callback function for the request.

        //handling errors
        if(error){
            //something went wrong
            callback('Unable to connect to google servers.',undefined);
        }else if(body.status === 'ZERO_RESULTS'){
            //invalid address because of no results.
            callback(`unable to find address`, undefined);
        }else if(body.status ==='OK'){
            //success
            //accessomg formatted address, lat, and lng
            callback(undefined,{
                Address: body.results[0].formatted_address,
                Lat: body.results[0].geometry.location.lat,
                Lng: body.results[0].geometry.location.lng
            });
            // console.log(`Address: ${body.results[0].formatted_address}`);
            // console.log(`Lat: ${body.results[0].geometry.location.lat}`);
            // console.log(`Lng: ${body.results[0].geometry.location.lng}`);
        }
    });
};

module.exports = {
    geocodeAddress
};

