import React,{useState, useCallback} from 'react';

import "../componentBase.css"

function Button(props) {
    return <button onClick={props.onClick}>{props.name}</button>;
}

const ComponentUseCallback = () => {
    const [count, setCount] = useState(0);
    const [isActive, setActive] = useState(false);

    const handleCount = useCallback(() => setCount(count + 1), [count]);
    const handleShow = useCallback(() => setActive(!isActive), [isActive]);

    return (
        <div className="component">
            {isActive && (
                <div>
                    <h1>{count}</h1>
                    <Button onClick={handleCount} name="Increment" />
                </div>
            )}
            <Button
                onClick={handleShow}
                name={isActive ? "Hide Counter" : "Show Counter"}
            />
        </div>
    );
};

export default ComponentUseCallback;

/*
* Здесь наши две функции handleCount и handleShow обернуты с useCallback помощью hook, а второй аргумент
*  - это зависимость, так что функции создаются заново только в том случае,
*  если изменяется одно из значений его зависимости.
*
* Теперь, если мы нажмем на Increment кнопкуcount, значение будет изменено,
* и handleCountфункция будет создана заново.
*
*
* Когда у вас действительно будет проблема с оптимизированным, с помощью функции memo
* компонентом, то тогда есть повод задуматься использовать этот хук.
* */