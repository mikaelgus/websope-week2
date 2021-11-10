'use strict';
// userRoute
const express = require('express');
const multer = require('multer');
const upload = multer ({dest: './uploads/'});
const { user_list_get, user_get, user_post } = require('../controllers/userController');
const router = express.Router();

router.post('/', user_post);
  
  router.put('/', (req, res) => {
    res.send('From this endpoint you can put user.')
  });
  
  router.delete('/', (req, res) => {
    res.send('From this endpoint you can delete user.')
  });
  
  router.get('/', user_list_get);

  router.get('/', user_post);

  router.get('/:id', user_get);
  
  router.get('/:id', (req, res) => {
    res.send('You reqested a user whose id is ' + req.params.id)
  });

module.exports = router;