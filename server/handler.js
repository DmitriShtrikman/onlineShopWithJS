const cart = require('./cart');
const fs = require('fs');

const actions = {
    add: cart.add,
    change: cart.change,
    remove: cart.remove,
};

let handler = (req, res, action, file) => {
    fs.readFile(file, 'utf-8', (err, data)=> {
        if(err){
            console.log(error);
        } else {
            let newCart = actions[action](JSON.parse(data), req);
            fs.writeFile(file, newCart, (err) => {
                if(err){
                    console.log(error);
                } else {
                    res.send(JSON.stringify({result: 1}))
                }
            })
        }
    })
};

module.exports = handler;