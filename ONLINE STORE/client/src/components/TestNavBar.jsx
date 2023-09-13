import React, {useContext} from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {Context} from "../index";
import {NavLink, useNavigate} from "react-router-dom";
import {ADMIN_ROUTE, LOGIN_ROUTE, SHOP_ROUTE} from "../utils/constant";
import {Button} from "react-bootstrap";
import {observer} from "mobx-react-lite";


const TestNavBar = observer( () => {
    const {user} = useContext(Context);
    const navigate = useNavigate();

    const logOut = () => {
        user.setUser({});
        user.setIsAuth(false);
        localStorage.removeItem('token');
    }


    return (
        <>
            <Navbar bg="dark" data-bs-theme="dark">
                <Container>
                   <NavLink style={{color: 'white'}} to={SHOP_ROUTE}>КупиДевайс</NavLink>
                    {user.isAuth ?
                        <Nav className="ml-auto" style={{color: 'white'}}>
                            <Button
                                variant={"outline-light"}
                                onClick={() => navigate(ADMIN_ROUTE)}
                            >
                                Админ панель</Button>
                            <Button
                                variant={"outline-light"}
                                className="ms-2"
                                onClick={() => logOut()}
                            >
                                Выйти</Button>
                        </Nav>
                        :
                        <Nav className="ml-auto" style={{color: 'white'}}>
                            <Button
                                variant={"outline-light"}
                                onClick={() => navigate(LOGIN_ROUTE)}
                            >Авторизация</Button>
                        </Nav>
                    }
                </Container>
            </Navbar>
        </>
    );
});

export default TestNavBar;