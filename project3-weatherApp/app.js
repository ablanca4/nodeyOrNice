const request = require('request');
const yargs = require('yargs');

const argv = yargs
    .options({
        a: {
            demand: true,
            alias: 'address',
            describe: 'Address to fetch weather for',
            string: true //string tells yargs to always parse the arg as a string.
        }
    })
    .help()
    .alias('help', 'h')
    .argv;

// console.log(argv);
//getting passed in address and encoding it to include %20 instead of spaces.
var encodedAddress = encodeURIComponent(argv.a);

//making a request
// accepts an object, and a callback function.
request({
    url: `https://maps.googleapis.com/maps/api/geocode/json?address=${encodedAddress}`,
    json: true
}, (error, response, body)=>{
    // inside callback function for the request.

    //handling errors
    if(error){
        //someething went wrong
        console.log('Unable to connect to google servers.');
    }else if(body.status === 'ZERO_RESULTS'){
        //invalid address because of no results.
        console.log(`unable to find address: ${argv.a}`);
    }else if(body.status ==='OK'){
        //success
        //accessomg formatted address, lat, and lng
        console.log(`Address: ${body.results[0].formatted_address}`);
        console.log(`Lat: ${body.results[0].geometry.location.lat}`);
        console.log(`Lng: ${body.results[0].geometry.location.lng}`);
    }
});
