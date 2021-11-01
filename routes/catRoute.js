'use strict';
// catRoute
const express = require('express');
const multer = require('multer');
const upload = multer ({dest: './uploads/'});
const { cat_list_get, cat_get, cat_post } = require('../controllers/catController');
const router = express.Router();

router.post('/', upload.single('cat'), cat_post);
  
  router.put('/', (req, res) => {
    res.send('From this endpoint you can put cats.')
  });
  
  router.delete('/', (req, res) => {
    res.send('From this endpoint you can delete cats.')
  });
  
  router.get('/', cat_list_get);

  router.get('/:id', cat_get);
  
  router.get('/:id', (req, res) => {
    res.send('You reqested a cat whose id is ' + req.params.id)
  });

module.exports = router;