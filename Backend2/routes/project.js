'use strict'
var express = require('express');
var projectController = require('../controllers/project');

var router = express.Router();

var multipart = require('connect-multiparty');
var middleWareMultiparty = multipart({ uploadDir: './uploads'})

router.get('/home', projectController.home);
router.post('/test', projectController.test);
router.post('/save-project',projectController.saveProject);
router.get('/project/:id?', projectController.getProject); // se requiere una validacion para por si es opcional ?
router.get('/projects', projectController.getProjects);
router.put('/project/:id', projectController.updateProject);
router.delete('/project/:id', projectController.deleteProject);
router.post('/upload-image/:id', middleWareMultiparty, projectController.uploadImage);
router.get('/get-image/:image', projectController.getImage)

module.exports = router;