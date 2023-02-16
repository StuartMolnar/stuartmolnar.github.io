            
// request({     
//     url: 'https://data.usajobs.gov/api/historicjoa?PageSize=10&PageNumber=2&PositionSeries=2210&StartPositionOpenDate=10-01-2015&EndPositionOpenDate=09-30-2016',     
//     method: 'GET' 
// }, function(error, response, body) {     
//     var data = JSON.parse(body); 
//     console.log(data);
// });



let url = 'https://data.usajobs.gov/api/historicjoa?PageSize=10&PageNumber=2&PositionSeries=2210&StartPositionOpenDate=10-01-2015&EndPositionOpenDate=09-30-2016';

fetch(url)
  .then(response => {
    return response.json()
   }).then(body => {

    var data = JSON.parse(body);
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