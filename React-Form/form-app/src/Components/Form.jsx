import React, {useReducer} from 'react';

const initialState = {
    login: "",
    password: ""
}

function reducer (state, action){
    switch (action.type) {
        case "set-field-value":
            return{
                ...state,
                [action.payload.name]: action.payload.value
            }

        default:
            throw new Error("Unknown action")
    }
}

const Form = () => {

    const [fields, dispatch] = useReducer(reducer, initialState)
    const handlerSubmit = (event) => {
        // Предотвращаем отправку формы по умолчанию
        event.preventDefault()
        // Тут нужно передать логин и пароль на сервер
        console.log(fields)
    }

    const onSetValue = (event) => {
        dispatch({
            type: "set-field-value",
            payload: {
                name: event.target.name,
                value: event.target.value
            }
        })
    }

    return (
        <div>
            <form onSubmit={handlerSubmit}>
                <input
                    type="text"
                    placeholder="Введите логин"
                    name="login"
                    value={fields.login}
                    onChange={onSetValue}
                />
                <input
                    type="password"
                    placeholder="Введите пароль"
                    name="password"
                    value={fields.password}
                    onChange={onSetValue}
                />
                <button>Войти</button>
            </form>
            <div>
                <p>{JSON.stringify(fields)}</p>
            </div>
        </div>
    );
};

export default Form;