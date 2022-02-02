import React, { useState, useEffect } from 'react';
import useSound from 'use-sound';
import perfectFourth from '../sound_files/P4.mp3';
import perfectFifth from '../sound_files/P5.mp3';
import perfectEighth from '../sound_files/P8.mp3';
import axios from 'axios';



const IntervalsBeginner = (props) => {

    const [p4] = useSound(perfectFourth);
    const [p5] = useSound(perfectFifth);
    const [p8] = useSound(perfectEighth);

    let [interval, setInterval] = useState({})
    let [currentInterval, setCurrentInterval] = useState('');
    let [previousIntervalName, setPreviousIntervalName] = useState("")

    let [totalGuesses, setTotalGuesses] = useState(0)
    let [correctGuesses, setCorrectGuesses] = useState(0)

    let [answered, setAnswered] = useState(false);
    let [answerMessage, setAnswerMessage] = useState('');
    let [currentScoreMessage, setCurrentScoreMessage] = useState('')

    let userAnswer = ""
    let correctAnswer = ""




    const handleClick = (e) => {
        e.preventDefault();
        setPreviousIntervalName(interval.name)
        setTotalGuesses(totalGuesses + 1)
        userAnswer = e.target.value;
        correctAnswer = currentInterval
        console.log({ userAnswer })
        console.log({ userAnswer, correctAnswer })
        if (userAnswer === correctAnswer) {
            setCorrectGuesses(correctGuesses + 1)
            setAnswerMessage(`Correct! That was a  ${previousIntervalName}`)
            setCurrentScoreMessage(`Total score thus far is ${correctGuesses}/${totalGuesses}`)
            setAnswered(!answered)
        }
        else {
            setAnswerMessage("Incorrect.")
            setAnswered(!answered)
            setCurrentScoreMessage(`Total score thus far is ${correctGuesses}/${totalGuesses}`)

        }
    }


    const playSound = () => {
        // let randomChoice = (Math.floor(Math.random() * 3))
        if (interval.name === "Perfect 4th") {
            p4()
            setCurrentInterval("p4")
            correctAnswer = "p4"
        }
        else if (interval.name === "Perfect 5th") {
            p5()
            setCurrentInterval("p5")
            correctAnswer = "p5"

        }
        else {
            p8()
            setCurrentInterval("p8")
            correctAnswer = "p8"

        }
        console.log({ correctAnswer })

    }

    const getInterval = (req, res) => {
        axios.get(`http://localhost:8000/api/intervals/random/easy`)
            .then(res => {
                // console.log(res.data.results[0])
                setInterval(res.data.results[0])
                setPreviousIntervalName(interval.name)
                // console.log(interval)
            })
            .catch(err => console.log(err))


    }

    useEffect(() => {
        getInterval()
        playSound()

    }, [answered]);

    return (
        <>

            <h1>Interval Trainer</h1>
            <p>Listen to the sound you hear and choose the interval name that matches below</p>

            <div className="d-flex justify-content-center">
                <ul className="list-group gap-3">
                    <button onClick={handleClick} value="p4" className="btn btn-light list-group-item">Perfect 4th
                    </button>
                    <button onClick={handleClick} value="p5" className="btn btn-light list-group-item">Perfect 5th
                    </button>
                    <button onClick={handleClick} value="p8" className="btn btn-light list-group-item">Perfect 8th (Octave)
                    </button>
                </ul>
            </div>

            <button onClick={playSound} className="btn btn-primary mt-3">Play sound</button>

            <p className='mt-3'>{answerMessage}</p>
            <p className='mt-3'>{currentScoreMessage}</p>


        </>
    );
}


export default IntervalsBeginner;
