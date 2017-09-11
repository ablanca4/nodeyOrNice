const geocode = require('./geocode/geocode');
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

var rawAddress = argv.a;
// calling geocodeAddress with a callback function.
geocode.geocodeAddress(rawAddress,(errorMessage, results)=>{
    if(errorMessage){
        console.log(errorMessage);
    }else{
        console.log(JSON.stringify(results,undefined,2));
    }
});