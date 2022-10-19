import React, {useState, useEffect, useRef} from 'react';

import "../componentBase.css"
import {clear} from "@testing-library/user-event/dist/clear";

const ComponentUseRef = () => {

    const [second, addSecond] = useState(0)
    const [isStart, toggleStart] = useState(false)
    let interval = useRef()

    useEffect(() => {
        if (isStart) {
            interval.current = setInterval(() => {
                addSecond(second => second + 1)
            }, 1000)
        } else {
            clearInterval(interval.current)
        }
    }, [isStart])

    return (
        <div className="component">
            <div className="flex column">
                <h1>Прошло секунд: {second}</h1>
                <div className="flex">
                    <button onClick={() => toggleStart(true)}>Старт</button>
                    <button onClick={() => toggleStart(false)}>Стоп</button>
                </div>
            </div>
        </div>
    );
};

export default ComponentUseRef;