import React from 'react'
import { auth } from '../../firebase'
import { useHistory } from 'react-router-dom';

const Space = () => {
    const history = useHistory();
    console.log(auth);
    const handleLogout = async () => {
        await auth.signOut();
        history.push('/')
    }
    return (
        <div>
            <button onClick={handleLogout}>Logout</button>
        </div>
    )
}

export default Space
