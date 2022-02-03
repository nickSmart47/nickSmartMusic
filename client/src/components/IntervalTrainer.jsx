import React, { useState, useEffect } from 'react';
import useSound from 'use-sound';
import perfectFourth from '../sound_files/P4.mp3';
import perfectFifth from '../sound_files/P5.mp3';
import perfectEighth from '../sound_files/P8.mp3';
import minorThird from '../sound_files/mi3.mp3';
import MajorThird from '../sound_files/M3.mp3';
import minorSixth from '../sound_files/mi6.mp3';
import MajorSixth from '../sound_files/M6.mp3';
import minorSecond from '../sound_files/mi2.mp3';
import MajorSecond from '../sound_files/M2.mp3';
import minorSeventh from '../sound_files/mi7.mp3';
import MajorSeventh from '../sound_files/M7.mp3';
import Tritone from '../sound_files/a4d5.mp3';


import axios from 'axios';



const IntervalTrainer = (props) => {

    const [p4] = useSound(perfectFourth);
    const [p5] = useSound(perfectFifth);
    const [p8] = useSound(perfectEighth);

    const [m3] = useSound(minorThird);
    const [M3] = useSound(MajorThird);
    const [m6] = useSound(minorSixth);
    const [M6] = useSound(MajorSixth);

    const [m2] = useSound(minorSecond);
    const [M2] = useSound(MajorSecond);
    const [m7] = useSound(minorSeventh);
    const [M7] = useSound(MajorSeventh);

    const [a4d5] = useSound(Tritone);



    let [interval, setInterval] = useState({});
    let [currentInterval, setCurrentInterval] = useState('');
    let [previousIntervalName, setPreviousIntervalName] = useState("");

    let [totalGuesses, setTotalGuesses] = useState(0);
    let [correctGuesses, setCorrectGuesses] = useState(0);

    let [answered, setAnswered] = useState(false);
    let [clicked, setClicked] = useState(false);

    let [answerMessage, setAnswerMessage] = useState('');
    let [currentScoreMessage, setCurrentScoreMessage] = useState('')

    let userAnswer = "";
    let correctAnswer = "";




    const handleClick = (e) => {
        setPreviousIntervalName(interval.name)
        setTotalGuesses(totalGuesses + 1)
        userAnswer = e.target.value;
        correctAnswer = currentInterval
        console.log({ userAnswer, correctAnswer })
        e.preventDefault();
        if (userAnswer === correctAnswer) {
            setCorrectGuesses(correctGuesses + 1)
            setAnswerMessage(`Correct! That was a  ${previousIntervalName}`)
            let scoreMessage = `Total score thus far is ${totalGuesses}/${correctGuesses}`
            setCurrentScoreMessage(scoreMessage)
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
        else if (previousIntervalName === "Perfect 8th (Octave)") {
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
        else if (previousIntervalName === "Minor 2nd") {
            m2()
            setCurrentInterval("m2")
            correctAnswer = "m2"
        }
        else if (previousIntervalName === "Major 2nd") {
            M2()
            setCurrentInterval("M2")
            correctAnswer = "M2"
        }
        else if (previousIntervalName === "Minor 7th") {
            m7()
            setCurrentInterval("m7")
            correctAnswer = "m7"
        }
        else if (previousIntervalName === "Major 7th") {
            M7()
            setCurrentInterval("M7")
            correctAnswer = "M7"
        }
        else if (previousIntervalName === "Augmented 4th/Diminished 5th") {
            a4d5()
            setCurrentInterval("a4d5")
            correctAnswer = "a4d5"
        }
    }

    const playSound = () => {
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
        else if (interval.name === "Perfect 8th (Octave)") {
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
        else if (interval.name === "minor 6th") {
            m6()
            setCurrentInterval("m6")
            correctAnswer = "m6"
        }
        else if (interval.name === "Major 6th") {
            M6()
            setCurrentInterval("M6")
            correctAnswer = "M6"
        }
        else if (interval.name === "Minor 2nd") {
            m2()
            setCurrentInterval("m2")
            correctAnswer = "m2"
        }
        else if (interval.name === "Major 2nd") {
            M2()
            setCurrentInterval("M2")
            correctAnswer = "M2"
        }
        else if (interval.name === "Minor 7th") {
            m7()
            setCurrentInterval("m7")
            correctAnswer = "m7"
        }
        else if (interval.name === "Major 7th") {
            M7()
            setCurrentInterval("M7")
            correctAnswer = "M7"
        }
        else if (interval.name === "Augmented 4th/Diminished 5th") {
            a4d5()
            setCurrentInterval("a4d5")
            correctAnswer = "a4d5"
        }
        setPreviousIntervalName(interval.name)


    }

    const getInterval = (req, res) => {
        if (props.difficulty == "advanced") {
            axios.get(`http://localhost:8000/api/intervals/random/advanced`)
                .then(res => {
                    // console.log(res.data.results[0])
                    setInterval(res.data.results[0])
                    setPreviousIntervalName(interval.name)
                    // console.log(interval)
                    if (previousIntervalName == undefined) {
                        correctAnswer = previousIntervalName
                    }
                    else {
                        correctAnswer = interval.name
                    }

                })
                .catch(err => console.log(err))
        }

        else if (props.difficulty == "intermediate") {
            axios.get(`http://localhost:8000/api/intervals/random/intermediate`)
                .then(res => {
                    // console.log(res.data.results[0])
                    setInterval(res.data.results[0])
                    setPreviousIntervalName(interval.name)
                    // console.log(interval)
                    if (previousIntervalName == undefined) {
                        correctAnswer = previousIntervalName
                    }
                    else {
                        correctAnswer = interval.name
                    }

                })
                .catch(err => console.log(err))
        }

        else if (props.difficulty == "beginner") {
            axios.get(`http://localhost:8000/api/intervals/random/beginner`)
                .then(res => {
                    // console.log(res.data.results[0])
                    setInterval(res.data.results[0])
                    setPreviousIntervalName(interval.name)
                    // console.log(interval)
                    if (previousIntervalName == undefined) {
                        correctAnswer = previousIntervalName
                    }
                    else {
                        correctAnswer = interval.name
                    }

                })
                .catch(err => console.log(err))
        }



    }

    useEffect(() => {
        getInterval()
        playSound()
        console.log("Difficulty: " + props.difficulty)

    }, [answered, clicked]);

    return (
        <>
            <br />
            <br />
            <h1>Interval Trainer {props.difficulty.charAt(0).toUpperCase() + props.difficulty.slice(1)}</h1>
            <br />
            <p>Listen to the sound you hear and choose the interval name that matches below</p>
            <br />
            <div className="d-flex justify-content-center align-items-center gap-3">
                <div className="d-flex flex-wrap justify-content-center align-items-center">
                    <ul className="list-group gap-3">
                        <button onClick={handleClick} value="p4" className="btn btn-light list-group-item">Perfect 4th
                        </button>
                        <button onClick={handleClick} value="p5" className="btn btn-light list-group-item">Perfect 5th
                        </button>
                        <button onClick={handleClick} value="p8" className="btn btn-light list-group-item">Perfect 8th (Octave)
                        </button>
                        {props.difficulty == "advanced" &&

                            <button onClick={handleClick} value="a4d5" className="btn btn-light list-group-item">Augmented 4th/Diminished 5th
                            </button>
                        }
                    </ul>
                </div>
                {(props.difficulty == "intermediate" || (props.difficulty == "advanced")) &&

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
                }
                {props.difficulty == "advanced" &&

                    <div className="d-flex justify-content-center align-items-center">
                        <ul className="list-group gap-3">
                            <button onClick={handleClick} value="m2" className="btn btn-light list-group-item">Minor 2nd
                            </button>
                            <button onClick={handleClick} value="M2" className="btn btn-light list-group-item">Major 2nd
                            </button>
                            <button onClick={handleClick} value="m7" className="btn btn-light list-group-item">Minor 7th
                            </button>
                            <button onClick={handleClick} value="M7" className="btn btn-light list-group-item">Major 7th
                            </button>
                        </ul>
                    </div>
                }
            </div>

            <button onClick={replaySound} className="btn btn-warning m-3">Replay Previous Interval</button>

            <button onClick={() => { setClicked(!clicked) }} className="btn btn-primary m-3">Play New Interval</button>

            <p className='mt-3'>{answerMessage}</p>
            <p className='mt-3'>{currentScoreMessage}</p>


        </>
    );
}


export default IntervalTrainer;
