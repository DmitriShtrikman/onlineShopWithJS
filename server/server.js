const express = require('express'); 
const fs = require('fs');

const app = express(); 
const cart = require('./cartRouter');

app.use(express.json());
app.use('/', express.static('.'));
app.use('/api/cart', cart);

app.get('/catalogData', (req, res) => { 
    fs.readFile('server/db/catalog.json','utf8', (err, data)=> {
        if(err){
            console.log('Error');
        } else {
            res.send(data);
        }
        }); 
});

app.listen(3000, () => { 
    console.log('Server is running on port 3000!'); 
});

