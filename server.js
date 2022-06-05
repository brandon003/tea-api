const express = require('express');
const app = express();
const PORT = 8000;
const cors = require('cors');
const tea = {
    'oolong':{
        'name':'Oolong',
        'type':'black',
        'origin':'Yo mommas House',
        'waterTemp': 200,
        'steepTime':180,
        'caffeinated': true,
        'flavor':'delicious'
     },
    'unknown': {
        'name': 'Unknown',
        'type': 'unknown',
        'origin': 'unknown',
        'waterTemp': 0,
        'steepTime': 0,
        'caffeinated': false,
        'flavor': 'unknown'
    },
    'matcha':{
        'name': 'Matcha',
        'type': 'green',
        'origin': 'backyard',
        'waterTemp': 180,
        'steepTime': 120,
        'caffeinated': false,
        'flavor': 'delicious'
    }
    };

app.get('/',(request,response)=>{

    response.sendFile(__dirname+'/index.html');

});

app.get( '/api/:Name',(request, response)=>{

    const teaName = request.params.Name.toLowerCase()

    if(tea[teaName]){
    response.json(tea[teaName]);
    }else{
        response.json(tea['unknown']);
    }
});


app.listen(process.env.PORT || PORT, () => {
    console.log(`The server is running on port${PORT}! Betta go catch it!`)
});