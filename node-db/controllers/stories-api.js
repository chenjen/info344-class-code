'use strict';

var express = require('express');

module.exports.Router = function(Story) {
    var router = express.Router();
    router.get('/stories', function(req, res, next) { 
        //return all stories from database
        Story.getAll()
            .then(function(rows) {
                res.json(rows);
            })
            .catch(next);
    });
    
    router.post('/stories', function(req, res, next) {
        //inster a new story into the database
        //and return the data with default values applied
        Story.insert(req.body)
            .then(function(row) {
                res.json(row)
            })
            .catch(next);
    });
    
    router.post('/stories/:id/votes', function(req, res, next) {
        //upvote the story and return the full story with current # of votes
        res.json({});
    });
    
    return router;
};