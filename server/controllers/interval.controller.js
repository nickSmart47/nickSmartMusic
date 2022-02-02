const { response } = require('express');
const { Interval } = require('../models/Interval.model')


module.exports.createInterval = (req, res) => {
    const { name, quality, number, soundFilePath } = req.body;
    Interval.create({
        name,
        quality,
        number,
        soundFilePath
    })
        .then(intervals => res.json(intervals))
        .catch(err => res.json(err))
}


module.exports.getAllIntervals = (req, res) => {
    Interval.find({})
        .then(intervals => res.json(intervals))
        .catch(err => res.json(err))
}

module.exports.getInterval = (req, res) => {
    Interval.find({ _id: req.params.id })
        .then(interval => res.json(interval))
        .catch(err => res.json(err))
}

module.exports.getRandomIntervalEasy = (req, res) => {
    Interval.aggregate([
        {$match: {quality: 'P'}},
        { $sample: { size: 1 }}])
        .then(randomInterval => {
            res.json({ results: randomInterval })
        })
        .catch(err => res.json({ message: "Something went wrong", error: err }))
}

module.exports.getRandomIntervalIntermediate = (req, res) => {
    Interval.aggregate([
        { $sample: { size: 1 }},
    ])
        .then(randomInterval => {
            res.json({ results: randomInterval })
        })
        .catch(err => res.json({ message: "Something went wrong", error: err }))
}

module.exports.updateInterval = (req, res) => {
    Interval.findOneAndUpdate({ _id: req.params.id },
        req.body,
        { new: true, runValidators: true }
    )
        .then(updatedInterval => {
            // console.log(res.json)
            res.json(updatedInterval)
        })
        .catch(err => {
            console.log(err)
            res.json(err)
        })
}
module.exports.deleteInterval = (req, res) => {
    Interval.deleteOne({ _id: req.params.id })
        .then(deleteConfirmation => res.json(deleteConfirmation))
        .catch(err => response.json(err))
}