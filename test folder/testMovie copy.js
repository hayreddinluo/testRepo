var AWS = require("aws-sdk");

var docClient = new AWS.DynamoDB.DocumentClient({region: 'us-east-1'});

console.log("Importing movies into DynamoDB. Please wait.");

/**
*   Add movies into the table.
*/


var allMovies = [
    {
        "UserID" : "NewReleasedKing",
        "Actor" : "Nix Oul",
        "BoxOffice" : 19291278917,
        "DomesticMovie" : true
    },
    {
        "UserID" : "NewReleasedQueen",
        "Actor" : "Nix Oul",
        "BoxOffice" : 119127232,
        "Domestic" : false
    }
];

allMovies.forEach(function(movie) {
    var params = {
        TableName: "AnimalMaster",
        Item: {
            "UserID" :  movie.UserID,
            "Actor" : movie.Actor,
            "Box Office" :  movie.BoxOffice,
            "Domestic" : movie.DomesticMovie
        }
    };

    docClient.put(params, function(err, data) {
       if (err) {
           console.error("Unable to add movie", movie.MovieName, ". Error JSON:", JSON.stringify(err, null, 2));
       } else {
           console.log("PutItem succeeded:", movie.MovieName);
       }
    });
});


/**
*   Read data from DynamoDB.
*/

/*
var params = {
    TableName: "testTable",
    Key:{
        "MovieName": "SuperFei"
    }
};

var movieInfo;

docClient.get(params, function(err, data) {
    if (err) {
        console.error("Unable to read item. Error JSON:", JSON.stringify(err, null, 2));
    } else {
        console.log("GetItem succeeded:", JSON.stringify(data, null, 2));
        movieInfo = data.Item;
        console.log(movieInfo);
    }
});
*/

/**
*   Delete Item in a table.
*/

/*
var params = {
    TableName: "testTable",
    Key:{
        "MovieName": "NewReleasedKing",
    }
};

console.log("Attempting a conditional delete...");
docClient.delete(params, function(err, data) {
    if (err) {
        console.error("Unable to delete item. Error JSON:", JSON.stringify(err, null, 2));
    } else {
        console.log("DeleteItem succeeded:", JSON.stringify(data, null, 2));
    }
});
*/

