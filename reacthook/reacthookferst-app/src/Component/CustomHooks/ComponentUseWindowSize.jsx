import React from 'react';
import useWindowSize from "./useWindowSize"

const ComponentUseWindowSize = () => {
    const {width, height} = useWindowSize()
    return (
        <div className='component'>
            <h1>Поменяй размер экрана: { width }px, { height }px</h1>
        </div>
    );
};

export default ComponentUseWindowSize;