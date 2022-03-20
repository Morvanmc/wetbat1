import React from "react";
import { Route, BrowserRouter, Routes } from "react-router-dom";

import Main from "./pages/Main";
import Quotes from "./pages/Quotes";

const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route element={<Main/>} path="/" exact></Route>
                <Route element={<Quotes/>} path="/quotes"></Route>
            </Routes>
        </BrowserRouter>
    )
}

export default Router;