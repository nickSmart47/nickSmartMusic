import React, { useState, useEffect } from 'react';
import useSound from 'use-sound';
import perfectFourth from '../sound_files/P4.mp3';
import perfectFifth from '../sound_files/P5.mp3';
import perfectEighth from '../sound_files/P8.mp3';
import minorThird from '../sound_files/mi3.mp3';
import MajorThird from '../sound_files/M3.mp3';
import minorSixth from '../sound_files/mi6.mp3';
import MajorSixth from '../sound_files/M6.mp3';

import axios from 'axios';



const IntervalsIntermediate = (props) => {

    const [p4] = useSound(perfectFourth);
    const [p5] = useSound(perfectFifth);
    const [p8] = useSound(perfectEighth);

    const [m3] = useSound(minorThird)
    const [M3] = useSound(MajorThird)
    const [m6] = useSound(minorSixth)
    const [M6] = useSound(MajorSixth)


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
            setAnswerMessage(`Incorrect. It was a ${previousIntervalName}`)
            setCurrentScoreMessage(`Total score thus far is ${correctGuesses}/${totalGuesses}`)
            setAnswered(!answered)

        }
    }

    const replaySound = () => {
        // console.log(previousIntervalName)
        if (previousIntervalName === "Perfect 4th") {
            p4()
            setCurrentInterval("p4")
            correctAnswer = "p4"
        }
        else if (previousIntervalName === "Perfect 5th") {
            p5()
            setCurrentInterval("p5")
            correctAnswer = "p5"

        }
        else if (previousIntervalName === "Perfect 8th") {
            p8()
            setCurrentInterval("p8")
            correctAnswer = "p8"

        }
        else if (previousIntervalName === "Minor 3rd") {
            m3()
            setCurrentInterval("m3")
            correctAnswer = "m3"

        }
        else if (previousIntervalName === "Major 3rd") {
            M3()
            setCurrentInterval("M3")
            correctAnswer = "M3"

        }
        else if (previousIntervalName === "Minor 6th") {
            m6()
            setCurrentInterval("m6")
            correctAnswer = "m6"

        }
        else if (previousIntervalName === "Major 6th") {
            M6()
            setCurrentInterval("M6")
            correctAnswer = "M6"

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
        else if (interval.name === "Perfect 8th") {
            p8()
            setCurrentInterval("p8")
            correctAnswer = "p8"

        }
        else if (interval.name === "Minor 3rd") {
            m3()
            setCurrentInterval("m3")
            correctAnswer = "m3"

        }
        else if (interval.name === "Major 3rd") {
            M3()
            setCurrentInterval("M3")
            correctAnswer = "M3"

        }
        else if (interval.name === "Minor 6th") {
            m6()
            setCurrentInterval("m6")
            correctAnswer = "m6"

        }
        else if (interval.name === "Major 6th") {
            M6()
            setCurrentInterval("M6")
            correctAnswer = "M6"

        }
        setPreviousIntervalName(interval.name)

        console.log({ correctAnswer })

    }

    const getInterval = (req, res) => {
        axios.get(`http://localhost:8000/api/intervals/random/intermediate`)
            .then(res => {
                // console.log(res.data.results[0])
                setInterval(res.data.results[0])
                setPreviousIntervalName(interval.name)
                console.log(interval)
                if (previousIntervalName === undefined) {
                    correctAnswer = previousIntervalName
                }
                else {
                    correctAnswer = interval.name
                }

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
            <div className="d-flex justify-content-center align-items-center gap-3">

                <div className="d-flex flex-wrap justify-content-center align-items-center">
                    <ul className="list-group gap-3">
                        <button onClick={handleClick} value="p4" className="btn btn-light list-group-item">Perfect 4th
                        </button>
                        <button onClick={handleClick} value="p5" className="btn btn-light list-group-item">Perfect 5th
                        </button>
                        <button onClick={handleClick} value="p8" className="btn btn-light list-group-item">Perfect 8th (Octave)
                        </button>
                    </ul>
                </div>
                <div className="d-flex justify-content-center align-items-center">
                    <ul className="list-group gap-3">
                        <button onClick={handleClick} value="m3" className="btn btn-light list-group-item">Minor 3rd
                        </button>
                        <button onClick={handleClick} value="M3" className="btn btn-light list-group-item">Major 3rd
                        </button>
                        <button onClick={handleClick} value="m6" className="btn btn-light list-group-item">Minor 6th
                        </button>
                        <button onClick={handleClick} value="M6" className="btn btn-light list-group-item">Major 6th
                        </button>
                    </ul>
                </div>
            </div>

            <button onClick={replaySound} className="btn btn-warning m-3">Replay Previous Interval</button>

            <button onClick={playSound} className="btn btn-primary m-3">Play New Interval</button>

            <p className='mt-3'>{answerMessage}</p>
            <p className='mt-3'>{currentScoreMessage}</p>


        </>
    );
}


export default IntervalsIntermediate;
