import React from 'react'
import { auth } from '../../firebase'
import { useHistory } from 'react-router-dom';
import { useAuth } from "../../contexts/AuthContext"

const Space = () => {
    const history = useHistory();
    const { user } = useAuth();
    console.log(user);
    const handleLogout = async () => {
        await auth.signOut();
        history.push('/')
    }
    return (
        <div>
            <h1>Welcome {user.displayName}</h1>
            <button onClick={handleLogout}>Logout</button>
        </div>
    )
}

export default Space
