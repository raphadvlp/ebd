import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Turmas from "./pages/Turmas";

function RoutesApp() {

    return(
       <BrowserRouter>
        <Routes>
            <Route path="/" element={ <Dashboard/> } />
            <Route path="/login" element={ <Login/> }/>
            <Route path="/turmas" element={ <Turmas/> } />
        </Routes>
       </BrowserRouter> 
    )
}

export default RoutesApp;