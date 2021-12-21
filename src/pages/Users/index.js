import React from "react";
import "./Users.css";
import { Link, Outlet } from "react-router-dom";

function Users() {
    return (
        <div className="content">
            <div className="aside">
                <nav className="side-nav">
                    <Link className="link side-link" to="">
                        List users
                    </Link>
                    <Link className="link side-link" to="new">
                        Create user
                    </Link>
                </nav>
            </div>
                <Outlet />
        </div>
    );
}

export default Users;
