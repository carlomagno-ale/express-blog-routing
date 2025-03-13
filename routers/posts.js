const express = require('express')
const router = express.Router();

// index
router.get('/',(req, res) => {
    res.send('visualizza tutti i post');
});

//show
router.get('/:id', (req, res) => {
    res.send(`visualizza solo i post con id:${req.params.id}`)
});

//create/store
router.post('/', (req, res) => {
    res.send('crea un nuovo post')
});

//update
router.put('/:id', (req, res) => {
    res.send(`modifica totalemnte un post con id:${req.params.id}`)
});

//update/modify 
router.patch('/:id', (req, res) => {
    res.send(`modifica parzialmente un post con id ${req.params.id}`)
});

//delete
router.delete('/:id', (req, res) => {
    res.send(`elimina un post con id ${req.params.id}`)
});


module.exports = router;