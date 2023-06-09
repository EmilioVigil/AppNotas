import { useEffect, useState } from "react";

import axios from "axios";

export function useNote() {
    const [user, setUser] = useState('');
    const [notes, setNotes] = useState('');
    const userLogged = JSON.parse(window.localStorage.getItem('loggedNoteappUser'))

    useEffect(() => {
        if (userLogged) {
            setUser(userLogged)
            axios.get(`http://localhost:3000/users/note?username=${userLogged.userName}`).then((response) => {
                setNotes(response.data);
            })
        }
    }, [])

    const deleteNote = async (id) => {
        const noteDelete = await axios.delete(`http://localhost:3000/notes/delete/${id}`)
        setNotes(notes.filter((note) => note._id != id))
    }


    return { user, setUser, notes, deleteNote }
}