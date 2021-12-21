import React from "react";
import { Outlet } from 'react-router-dom';

function UsersDetailContainer() {
    return (
        <div className="content">
            <Outlet />
        </div>
    );
}

export default UsersDetailContainer;
