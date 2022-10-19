import React, { useState} from 'react';

import "../componentBase.css"

const ComponentA = () => {
    const [count, setCount] = useState(1)
    const increment = () => setCount(count => count + 1)
    return (
        <div className="component">
            <h1 onClick={increment}>
                 ComponentA: нажато {count} раз
            </h1>
        </div>
    );
};

export default ComponentA;