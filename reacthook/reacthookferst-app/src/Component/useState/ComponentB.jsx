import React, {useState} from 'react';

import "../componentBase.css"

const ComponentB = () => {
    const [count, setCount] = useState(1)
    const increment = () => setCount(count => count + 1)
    return (
        <div className="component">
            <h1 onClick={increment}>
                ComponentB: Нажато {count} раз
            </h1>
        </div>
    );
};

export default ComponentB;