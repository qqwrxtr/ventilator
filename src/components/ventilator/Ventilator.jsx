import React, { useEffect, useRef } from "react";
import './ventilator.css'
import fan from "../../assets/img/Fan_center.png"
import circle from "../../assets/img/Circle.png"
import bottom from "../../assets/img/Bottom.png"

const Ventilator = ({ rotate }) => {
    const fanRef = useRef(null);

    useEffect(() => {
        if (fanRef.current) {
            if (rotate === 'yes') {
                fanRef.current.style.animationPlayState = 'paused';
            } else {
                fanRef.current.style.animationPlayState = 'running';
            }
        }
    }, [rotate]);

    return (
            <div className="col-12 d-flex flex-column align-items-center justify-content-center">
                <div className={`firstimg rotate`}>
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
}

export default Ventilator;
