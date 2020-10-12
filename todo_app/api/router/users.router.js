var express = require('express');

var userAPI = require('../controller/users.api');

var router = express.Router()

router.get('/', userAPI.index);
router.get('/:id', userAPI.getId);

module.exports = router