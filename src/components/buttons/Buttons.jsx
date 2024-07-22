import React, { useState, useEffect, useRef } from "react";
import './buttons.css';
import Ventilator from "../ventilator/Ventilator";
import start from "../../assets/img/Start.png";
import buttonStopImg from "../../assets/img/Stop.png";
import speed1 from "../../assets/img/1.png";
import speed2 from "../../assets/img/2.png";
import speed3 from "../../assets/img/3.png";
import speed1_clicked from "../../assets/img/1_dark.png";
import speed2_clicked from "../../assets/img/2_dark.png";
import speed3_clicked from "../../assets/img/3_dark.png";
import start_clicked from "../../assets/img/Start_dark.png";
import clickSound from "../../assets/sounds/click_1.mp3";
import soundBtn1 from "../../assets/sounds/1.mp3";
import soundBtn2 from "../../assets/sounds/2.mp3";
import soundBtn3 from "../../assets/sounds/3.mp3";

const Buttons = () => {
    const [isRunning, setIsRunning] = useState(false);
    const [buttonStartImg, setButtonStartImg] = useState(start);
    const [speed1Img, setSpeed1Img] = useState(speed1);
    const [speed2Img, setSpeed2Img] = useState(speed2);
    const [speed3Img, setSpeed3Img] = useState(speed3);
    const [animationDuration, setAnimationDuration] = useState('0.8s');
    
    const clickAudioRef = useRef(new Audio(clickSound));
    const speed1AudioRef = useRef(new Audio(soundBtn1));
    const speed2AudioRef = useRef(new Audio(soundBtn2));
    const speed3AudioRef = useRef(new Audio(soundBtn3));
    const audioRefs = [speed1AudioRef, speed2AudioRef, speed3AudioRef];

    useEffect(() => {
        audioRefs.forEach(audioRef => {
            audioRef.current.volume = 0.3;
            audioRef.current.loop = true;
        });
    });

    const stopAllAudio = () => {
        audioRefs.forEach(audioRef => {
            audioRef.current.pause();
            audioRef.current.currentTime = 0;
        });
    };

    const handleStartClick = () => {
        clickAudioRef.current.play();
        if (!isRunning) {
            setIsRunning(true);
            setButtonStartImg(start_clicked);
            setAnimationDuration('0.8s');
            speed1AudioRef.current.play(); 
        }
    };

    const handleStopClick = () => {
        clickAudioRef.current.play();
        setIsRunning(false);
        setButtonStartImg(start);
        setSpeed1Img(speed1);
        setSpeed2Img(speed2);
        setSpeed3Img(speed3);
        stopAllAudio();
    };

    const handleSpeedClick = (speed, speedIndex) => {
        clickAudioRef.current.play();
        stopAllAudio();

        setAnimationDuration(speed);

        if (speedIndex === 1) {
            speed1AudioRef.current.play();
        } else if (speedIndex === 2) {
            speed2AudioRef.current.play();
        } else if (speedIndex === 3) {
            speed3AudioRef.current.play();
        }

        if (!isRunning) {
            setIsRunning(true);
            setButtonStartImg(start_clicked);
        }

        setSpeed1Img(speedIndex === 1 ? speed1_clicked : speed1);
        setSpeed2Img(speedIndex === 2 ? speed2_clicked : speed2);
        setSpeed3Img(speedIndex === 3 ? speed3_clicked : speed3);
    };

    const rotate = isRunning ? "yes" : "no";

    return (
        <>
            <div className="row">
                <div className="col-12 fan">
                    <Ventilator rotate={rotate} animationDuration={animationDuration} />
                </div>
            </div>
            <div className="row">
                <div className="col-12">
                    <div className="buttons">
                        <div className="upravlenie">
                            <div className="start batabn">
                                <button className="button"
                                    type="submit"
                                    id="start"
                                    onClick={handleStartClick}
                                    disabled={isRunning} >
                                    <img src={buttonStartImg} alt="Start" />
                                </button>
                            </div>
                            <div className="stop batabn">
                                <button className="button"
                                    type="submit"
                                    id="stop"
                                    onClick={handleStopClick}
                                >
                                    <img src={buttonStopImg} alt="Stop" />
                                </button>
                            </div>
                        </div>
                        
                        <div className="speed_buttons">
                            <div className="speed1 batabn">
                                <button className="button" onClick={() => handleSpeedClick('0.6s', 1)}>
                                    <img src={speed1Img} alt="Speed 1" />
                                </button>
                            </div>
                            <div className="speed2 batabn">
                                <button className="button" onClick={() => handleSpeedClick('0.4s', 2)}>
                                    <img src={speed2Img} alt="Speed 2"/>
                                </button>
                            </div>
                            <div className="speed3 batabn">
                                <button className="button" onClick={() => handleSpeedClick('0.3s', 3)}>
                                    <img src={speed3Img} alt="Speed 3" />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Buttons;
