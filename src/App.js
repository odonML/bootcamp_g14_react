import { useEffect, useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import logo from "./logo.svg";

function App() {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        const getUsers = async () => {
            const response = await fetch("users.json");
            const data = await response.json();
            console.log(data);
            setUsers(data)
        }
        getUsers();
    }, []);

    const usersUI = users.map((user) => (
        <div key={user.id}>
            <h1>
                {user.firstName} {user.lastName}
            </h1>
        </div>
    ));

    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <Navbar />
                {usersUI}
            </header>
        </div>
    );
}

export default App;
