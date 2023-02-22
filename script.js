            
// request({     
//     url: 'https://data.usajobs.gov/api/historicjoa?PageSize=10&PageNumber=2&PositionSeries=2210&StartPositionOpenDate=10-01-2015&EndPositionOpenDate=09-30-2016',     
//     method: 'GET' 
// }, function(error, response, body) {     
//     var data = JSON.parse(body); 
//     console.log(data);
// });



let url = 'https://usajobs-cors-proxy.westus3.cloudapp.azure.com:443/proxy/historicjoa?PageSize=10&PageNumber=2&PositionSeries=2210&StartPositionOpenDate=10-01-2015&EndPositionOpenDate=09-30-2016';

print('accessing data...');

fetch(url)
  .then(response => {
    return response.json()
   }).then(body => {

    console.log(body);
    console.log(data);
   }
);

// var request = require('request');    
            
// request({     
//     url: 'https://data.usajobs.gov/api/historicjoa?PageSize=10&PageNumber=2&PositionSeries=2210&StartPositionOpenDate=10-01-2015&EndPositionOpenDate=09-30-2016',     
//     method: 'GET' 
// }, function(error, response, body) {     
//     var data = JSON.parse(body); 
// });