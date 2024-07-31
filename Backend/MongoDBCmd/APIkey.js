var axios = require('axios');
var data = JSON.stringify({
    "collection": "movies",
    "database": "sample_mflix",
    "dataSource": "Cluster0",
    "projection": {
        "_id": 1
    }
});

var config = {
    method: 'post',
    url: 'https://ap-south-1.aws.data.mongodb-api.com/app/data-xcisuow/endpoint/data/v1/action/findOne',
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Request-Headers': '*',
      'api-key': 'd1qg3IVE0rUazdFHXajqWdKrBHNGDfYMvjXspYVOpXGnzrdpdsDQ31pk5IAM1P5k',
      'Accept': 'application/ejson'
    },
    data: data
};

axios(config)
    .then(function (response) {
        console.log(JSON.stringify(response.data));
    })
    .catch(function (error) {
        console.log(error);
    });
