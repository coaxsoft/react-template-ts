import { Route, BrowserRouter, Routes } from "react-router-dom";

// pages
import Home from "../Home";
import LogIn from "../LogIn";


function Router() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/auth/login" element={<LogIn/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
