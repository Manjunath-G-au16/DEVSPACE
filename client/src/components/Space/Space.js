import React, { useRef, useState, useEffect } from 'react'
import { auth } from '../../firebase'
import { useHistory } from 'react-router-dom';
import { useAuth } from "../../contexts/AuthContext";
import { ChatEngine } from "react-chat-engine";
import axios from 'axios';

const Space = () => {
    const didMountRef = useRef(false)
    const [loading, setLoading] = useState(true)
    const { user } = useAuth()
    const history = useHistory()



    async function handleLogout() {
        await auth.signOut()
        history.push("/")
    }

    async function getFile(url) {
        let response = await fetch(url);
        let data = await response.blob();
        return new File([data], "test.jpg", { type: 'image/jpeg' });
    }

    useEffect(() => {
        if (!didMountRef.current) {
            didMountRef.current = true

            if (!user || user === null) {
                history.push("/")
                return
            }

            axios.get(
                'https://api.chatengine.io/users/me/',
                {
                    headers: {
                        "project-id": process.env.REACT_APP_CHAT_ENGINE_ID,
                        "user-name": user.email,
                        "user-secret": user.uid
                    }
                }
            )

                .then(() => setLoading(false))

                .catch(e => {
                    let formdata = new FormData()
                    formdata.append('email', user.email)
                    formdata.append('username', user.email)
                    formdata.append('secret', user.uid)

                    getFile(user.photoURL)
                        .then(avatar => {
                            formdata.append('avatar', avatar, avatar.name)

                            axios.post(
                                'https://api.chatengine.io/users/',
                                formdata,
                                { headers: { "private-key": process.env.REACT_APP_CHAT_ENGINE_KEY } }
                            )
                                .then(() => setLoading(false))
                                .catch(e => console.log('e', e.response))
                        })
                })

        }
    }, [user, history])


    if (!user || loading) return <div />

    return (
        <div>
            <button onClick={handleLogout}>Logout</button>
            <ChatEngine
                height="calc(100vh -66px)"
                projectID={process.env.REACT_APP_CHAT_ENGINE_ID}
                userName={user.email}
                userSecret={user.uid}
            />
        </div>
    )
}

export default Space
