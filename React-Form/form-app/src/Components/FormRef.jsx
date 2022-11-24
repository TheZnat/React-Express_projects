import React, {useRef} from 'react';

const FormRef = () => {
    const loginRef = useRef()
    const passwordRef = useRef()
    const onSubmit = event => {
        // Предотвращаем отправку формы по умолчанию
        event.preventDefault()

        const login = loginRef.current.value
        const password = passwordRef.current.value
        console.log(`${login}, ${password}`)
    }

    return (
        <div>
            <form onSubmit={onSubmit}>
                <input
                    ref={loginRef}
                    type="text"
                    placeholder="Введите логин"
                />
                <input
                    ref={passwordRef}
                    type="password"
                    placeholder="Введите пароль"
                />
                <button>Войти</button>
            </form>
        </div>

    )
}

export default FormRef;