import { useNavigate } from "react-router-dom";
import { useState } from "react"
import { Link } from "react-router-dom"
import axios from 'axios'
import './CreateNote.css'
export function CreateNote() {

    const [input, setInput] = useState({
        title: '',
        content: ''
    })

    const [createNote, setCreateNote] = useState(false)
    const browse = useNavigate()

    const handleChange = (e) => {
        setInput({
            ...input,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmitCreate = async (e) => {
        e.preventDefault()
        const user = JSON.parse(window.localStorage.getItem('loggedNoteappUser'))
        const token = `bearer ${user.token}`
        const config = {
            headers: { Authorization: token }
        }

        const response = await axios.post('http://localhost:3000/create/note', input, config)
        setInput({
            title: '',
            content: ''
        })

        if (response.data) {
            setTimeout(() => {
                setCreateNote(!createNote)
            }, 4000);
        }

        return browse('/home')
    }


    return (
        <div>

            <p className={createNote ? 'createNote' : 'notCreate'} >Note created!</p>

            <form>
                <label>
                    Charge new note:
                </label>
                <input
                    type="text"
                    name="title"
                    value={input.title}
                    onChange={handleChange}
                />
                <label>
                    Note content:
                </label>
                <textarea
                    name="content"
                    value={input.content}
                    onChange={handleChange}
                ></textarea>
                <button
                    type='submit'
                    onClick={handleSubmitCreate}>
                    Create Note
                </button>
            </form>




            <Link to={'/home'}>
                <button>Volver a la pagina principal</button>
            </Link>
        </div >
    )
}