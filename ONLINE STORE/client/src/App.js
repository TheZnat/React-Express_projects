import {BrowserRouter} from "react-router-dom";
import AppRouter from "./components/AppRouter";
import TestNavBar from "./components/TestNavBar";
import {observer} from "mobx-react-lite";
import {useContext, useEffect, useState} from "react";
import {Context} from "./index";
import {check} from "./http/userAPI";
import {Spinner} from "react-bootstrap";

const App = observer( () => {
    const {user} = useContext(Context);
    const [loading, setLoading] = useState(true);

    useEffect(()=>{
        setTimeout(() => {
            check().then(data =>{
                user.setUser(data);
                user.setIsAuth(true);
            }).finally(() => setLoading(false));
        }, 1000);
    },[]);

    if (loading){
        return <Spinner animation={"grow"}/>
    }

  return (
    <BrowserRouter>
        <TestNavBar/>
        <AppRouter />
    </BrowserRouter>
  );
});

export default App;
