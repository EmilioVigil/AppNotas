import { useEffect, useState } from "react";

import axios from "axios";
export function useNote() {
    const [user, setUser] = useState('');
    const [notes, setNotes] = useState('');

    useEffect(() => {
        const userLoggedJson = window.localStorage.getItem('loggedNoteappUser')
        if (userLoggedJson) {
            const userLogged = JSON.parse(userLoggedJson)
            setUser(userLogged)

            axios.get(`http://localhost:3000/users/note?username=${userLogged.userName}`).then((response) => {
                setNotes(response.data);
            })
        }
    }, [])


    return { user, setUser, notes }
}