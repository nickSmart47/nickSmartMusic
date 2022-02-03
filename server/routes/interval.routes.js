const IntervalController = require('../controllers/Interval.controller');

module.exports = (app) => {
    app.post('/api/intervals', IntervalController.createInterval)
    app.get('/api/intervals', IntervalController.getAllIntervals)
    app.get('/api/intervals/random/easy', IntervalController.getRandomIntervalEasy)
    app.get('/api/intervals/random/intermediate', IntervalController.getRandomIntervalIntermediate)
    app.get('/api/intervals/random/advanced', IntervalController.getRandomIntervalAdvanced)
    app.get('/api/intervals/:id', IntervalController.getInterval)
    app.put('/api/intervals/:id', IntervalController.updateInterval)
    app.delete('/api/intervals/:id', IntervalController.deleteInterval)
}