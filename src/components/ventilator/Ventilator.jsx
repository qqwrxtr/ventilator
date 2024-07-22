import React, { useEffect, useRef } from "react";
import './ventilator.css';
import fan from "../../assets/img/Fan_center.png";
import circle from "../../assets/img/Circle.png";
import bottom from "../../assets/img/Bottom.png";

const Ventilator = ({ rotate, animationDuration }) => {
    const fanRef = useRef(null);

    useEffect(() => {
        if (fanRef.current) {
            fanRef.current.style.setProperty('--animation-duration', animationDuration);
            fanRef.current.style.animationPlayState = rotate === 'yes' ? 'running' : 'paused';
        }
    }, [rotate, animationDuration]);

    return (
        <div className="col-12 d-flex flex-column align-items-center justify-content-center aaa">
            <div  className={`firstimg rotate`}>
                <img src={fan} alt="" ref={fanRef} className={`firstimg rotate img`}/>
            </div>
            <div className="absolute_reshotka">
                <img src={circle} alt="" />
            </div>
            <div className="piciorul">
                <img src={bottom} alt="" />
            </div>
        </div>
    );
};

export default Ventilator;
