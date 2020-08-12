var express = require('express');
var app = express();

var bodyParser = require("body-parser");

app.use(express.static(__dirname +'/'));
app.use(bodyParser.json());

var port = 4000;

var items =[
    {
        id:1,filmadi:"Lotr:Return of the King",filmyili:"2003",IMDb:8.9,
    },
    {
        id:2,filmadi:"The Silence Of The Lambs",filmyili:"1991",IMDb:8.6,
    },
    {
        id:3,filmadi:"Dağ ||",filmyili:"2016",IMDb:9
    }
];

var newId = 3;
app.get('/items', function(req,res){
    res.send({items: items});
})

app.post('/items',function(req, res){
    items.push({
        id: ++newId,
        filmadi: req.body.filmadi,filmyili: req.body.filmyili,IMDb:req.body.IMDb,

    })
    res.send("added")
})

app.put('/items/:id', function(req,res){
    var id = req.params.id;
    console.log(id);
    var index = items.findIndex((item) =>item.id == parseInt(id));
    
    var editedItem = {
        id: id,
        filmadi: req.body.filmadi,
        filmyili: req.body.filmyili,
        IMDb: req.body.IMDb,
       
    }
    items[index]=editedItem;
    res.send("updated");
})

app.delete('/items/:id',function (req,res){
    var id = req.params.id;
    console.log(id);
    var removedItem = items.findIndex(item => item.id == parseInt(id));
    items.splice(removedItem,1)

    res.send("deleted")
})

app.listen(port, () => {
    console.log('Listening on ' + port);
});