import React, {useContext, useState} from 'react';
import {Button, Card, Container, Form} from "react-bootstrap";
import {NavLink, useLocation, useNavigate} from "react-router-dom";
import {LOGIN_ROUTE, REGISTRATION_ROUTE, SHOP_ROUTE} from "../utils/constant";
import {login, registration} from "../http/userAPI";
import {observer} from "mobx-react-lite";
import {Context} from "../index";


const Auth = observer(() => {
    let navigate = useNavigate();
    const {user} = useContext(Context)
    const location = useLocation();
    const isLogin = location.pathname === LOGIN_ROUTE;
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const click = async () => {
        try {
            let data;
            if (isLogin) {
                const data =  await login(email, password);
            } else {
                const data = await registration(email, password);
            }
            user.setUser(user);
            user.setIsAuth(true);
            navigate(SHOP_ROUTE)
        } catch (e) {
            alert(e.response.data.message)
        }

    }

    return (
        <Container
            className="d-flex justify-content-center align-items-center"
            style={{height: window.innerHeight - 54}}
        >
            <Card
                style={{width: 600}}
                className="p-5"
            >
                <h2 className="m-auto">{isLogin ? 'Авторизация' : 'Регистрация'}</h2>
                <Form className="d-flex flex-column">
                    <Form.Control
                        className="mt-3"
                        placeholder="Введите ваш email"
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                        type="email"
                    />
                    <Form.Control
                            className="mt-3"
                            placeholder="Введите ваш пароль"
                            value={password}
                            onChange={e => setPassword(e.target.value)}
                            type="password"
                    />
                    <Button
                    variant={"outline-success"}
                    className="mt-3"
                    onClick={click}
                    >
                        {isLogin ? 'Войти' : 'Зарегистрироваться'}
                    </Button>
                    {isLogin ?
                        <div className="mt-2">
                            Нет аккаунта? <NavLink to={REGISTRATION_ROUTE}>Зарегистрируйся</NavLink>
                        </div>
                        :
                        <div className="mt-2">
                            Есть аккаунт ? <NavLink to={LOGIN_ROUTE}>Войти</NavLink>
                        </div>
                    }

                    </Form>
            </Card>

        </Container>
);
});

export default Auth;