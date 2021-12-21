import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from "./App";
import "./index.css";
import Home from './pages/Home/index';
import UserDetail from './pages/UserDetail/index';
import UserNew from "./pages/UserNew";
import Users from "./pages/Users";
import UsersList from './pages/UsersList';
import reportWebVitals from "./reportWebVitals";

ReactDOM.render(
    <React.StrictMode>
        <BrowserRouter>
            <Routes>
                <Route path="*" element={<h1>NOT FOUND!</h1>} />
                <Route path="/" element={<App />}>
                    <Route index element={<Home />} />
                    <Route path="users" element={<Users />}>
                        <Route index element={<UsersList />} />
                        <Route path="new" element={<UserNew />} />
                        <Route path=":userID" element={<UserDetail />} />
                    </Route>
                </Route>
            </Routes>
        </BrowserRouter>
    </React.StrictMode>,
    document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
