const URLBASE = 'http://localhost:3000'
import axios from "axios";

const updateNote = (id, data) => {
    const req = fetch.put(`${URLBASE}/${id}`, data)
    const response = req.then(res => res.json());
    return response;
}

const deleteNote = (id) => {
    const req = fetch.delete(`${URLBASE}/${id}`);
    const response = req.then(res => res.json());
    return response;
}

export {
    getAllNotes,
    updateNote,
    deleteNote
}