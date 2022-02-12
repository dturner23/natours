const express = require('express');
const { router } = require('../app');
const tourController = require('./../controllers/tourController');

const Router = express.Router();

Router.param('id', tourController.checkID);

Router
    .route('/')
    .get(tourController.getAllTours)
    .post(tourController.checkBody, tourController.createTour);

Router
    .route('/:id')
    .get(tourController.getTour)
    .patch(tourController.updateTour)
    .delete(tourController.deleteTour);

module.exports = Router;