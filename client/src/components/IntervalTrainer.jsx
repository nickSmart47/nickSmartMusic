import React, { useState } from 'react';
import {Link} from 'react-router-dom'

const IntervalTrainer = (props) => {
    return (
        <>
            <h1>Interval Trainer</h1>
            <h2>Choose a Difficulty level</h2>
            <p>Please click one of the colored buttons below to choose a difficulty level</p>

            <div className="d-flex justify-content-center">
                <div className>
                    <ul className="list-group">
                        <Link to ="/intervals/beginner" className="btn btn-success">Beginner</Link>
                        <li className="list-group-item">Perfect Intervals only</li>
                        <li className="list-group-item">Perfect 4ths, 5ths, and 8ths</li>
                    </ul>
                </div>
                <div>
                    <ul className="list-group">
                        <button className="btn btn-warning">Intermediate</button>
                        <li className="list-group-item">Perfect Intervals plus thirds and sixths</li>
                        <li className="list-group-item">Perfect 4ths, 5ths, and 8ths</li>
                        <li className="list-group-item">Major and Minor 3rds and 6ths</li>
                    </ul>
                </div>
                <div>
                    <ul className="list-group">
                        <button className="btn btn-danger">Advanced</button>
                        <li className="list-group-item">All Intervals!</li>
                        <li className="list-group-item">Perfect 4ths, 5ths, and 8ths</li>
                        <li className="list-group-item">Major and Minor 3rds and 6ths</li>
                        <li className="list-group-item">Augmented 4ths and Diminished 5ths</li>
                        <li className="list-group-item">Major and Minor 2nds and 7ths</li>
                    </ul>
                </div>
            </div>


        </>
    );
}


export default IntervalTrainer;
