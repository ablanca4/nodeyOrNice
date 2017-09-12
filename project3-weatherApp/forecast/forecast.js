const request = require('request');
const apiKey = 'f96cb46e4e24f577e60237068a0463b3';

var requestForecast = (lat, lng,callback) => {
    request({
        url: `https://api.darksky.net/forecast/${apiKey}/${lat},${lng}`,
        json: true
    },(error, response, body)=>{
        if(!error && response.statusCode===200){
            callback(undefined,{
                forecast: body.currently.temperature,
                actualtemperature: body.currently.apparentTemperature
            });
        }else{
            callback('unable to fetch weather', undefined);
        }
    });
};

module.exports = {
    requestForecast
};
