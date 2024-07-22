import React, { useState } from "react";
import './buttons.css';
import Ventilator from "../ventilator/Ventilator";

const Buttons = () => {
    const [clicks, setClicks] = useState(1);
    const [buttonText, setButtonText] = useState("Start");
    const [buttonColor, setButtonColor] = useState("green");


    const handleClick = () => {
        const newClicks = clicks + 1;
        setClicks(newClicks);

        if (newClicks % 2 === 0) {
            setButtonText("Going");
            setButtonColor("rgb(0, 63, 0)")
        } else {
            setButtonText("Start");
            setButtonColor("green")
        }

        console.log(newClicks);
    };

    const rotate = clicks === 1 || clicks % 2 !== 0 ? "yes" : "no";

    return (
        <>

            <div className="row">
                <div className="col-12 fan">
                    <Ventilator rotate={rotate}/>
                </div>
            </div>
            <div className="row">
                <div className="col-12">
                    <div className="col-12">
                        <div className="buttons">
                            <div className="start">
                                <button className="button"
                                        type="submit"
                                        id="start"
                                        onClick={handleClick}
                                        style={{backgroundColor: buttonColor}}
                                        >
                                    {buttonText}
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
