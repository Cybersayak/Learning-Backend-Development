const express =require('express');
const app = express();

app.use(express.json);
app.use(express.urlencoded({ extended: true }));

app.get('/', function(req,res) {
    res.send(' Server is fucking running ');
});

app.listen(3000, function(){
    console.log('Server is running on port 3000')  
});