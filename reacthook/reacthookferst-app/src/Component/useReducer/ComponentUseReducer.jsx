import React, {useReducer} from 'react';

import "./useRedCom.css"
import "../componentBase.css"

const colors = ["#454140", "#bd5734", "#a79e84", "#7a3b2e"]
const initialState = {
    count: 0,
    color: 0
}

function reducer(state, action){
    switch (action.type){
        case "increment":
            return {
                ...state,
                count: state.count + 1
            }
        case "decrement":
            return {
                ...state,
                count: state.count - 1
            }
        case "change-color":
            return {
                ...state,
                color: action.payload
            }
        default:
            throw  new Error()
    }
}

const ComponentUseReducer = () => {

    const [state, dispatch] = useReducer(reducer, initialState)
    const style = {
        color: colors[state.color]
    }

    const onChangeColor = () => {
      dispatch({
          type: "change-color",
          payload: state.color + 1 >= colors.length ? 0 : state.color + 1
      })
    }

    const onIncrement = () => dispatch({ type: "increment" })
    const onDecrement = () => dispatch({ type: "decrement" })
    return (
        <div className="component flex column">
            <h1 style={style}> Нажато {state.count} раз</h1>
            <div className="flex">
                <button onClick={onIncrement}> + </button>
                <button onClick={onDecrement}> - </button>
            </div>
            <button onClick={onChangeColor}>Поменять цвет</button>
        </div>
    );
};

export default ComponentUseReducer;