const express = require('express');
const fs = require('fs');

const router = express.Router();
const handler = require('./handler');

router.get('/', (req, res) => {
    fs.readFile('server/db/userCart.json', 'utf-8', (err, data) => {
        if(err){
            console.log(error);
        } else {
            res.send(data);
        }
    })
});
router.post('/:id', (req, res) => {
    handler(req, res, 'add', 'server/db/userCart.json');
});
router.put('/:id', (req, res) => {
    handler(req, res, 'change', 'server/db/userCart.json');
});
router.delete(`/:id`, (req, res) => {
    handler(req, res, 'remove', `server/db/userCart.json`);
});

module.exports = router;