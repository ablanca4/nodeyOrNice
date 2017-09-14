const request = require('request');
const geocode = require('./geocode/geocode');
const yargs = require('yargs');
const forecast = require('./forecast/forecast')

const apiKey = 'f96cb46e4e24f577e60237068a0463b3';
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

var rawAddress = argv.a;

// calling geocodeAddress with a callback function.
geocode.geocodeAddress(rawAddress,(errorMessage, results)=>{
    if(errorMessage){
        console.log(errorMessage);
    }else{
        console.log(results.Address);
        //fetching the forecast using forecast js passing in lat and lng from the google api call
        forecast.requestForecast(results.Lat, results.Lng, (errorMessage, weatherResults) => {
            !errorMessage ? console.log(`It is currently: ${weatherResults.forecast}. It feels like ${weatherResults.actualtemperature}`) : console.log(errorMessage);
        });
    }
});

//f96cb46e4e24f577e60237068a0463b3

