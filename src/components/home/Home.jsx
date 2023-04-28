import { Link } from "react-router-dom";
import { useState } from "react"
import { NoteContainer, Container } from "./Home.styled";
// Importamos el hook
import { useNote } from "../../hooks/useNotes";

export function Home() {
    const { user, setUser, notes } = useNote()


    return (
        <Container>
            <h2>Notas de {user.userName} </h2>
            {
                !notes.length ? <p>Loading...</p> :
                    (
                        notes.map(note => {
                            return (
                                <NoteContainer key={note._id}>
                                    <div>
                                        <h2>{note.title}</h2>
                                        <p>{note.content}</p>
                                    </div>
                                </NoteContainer>

                            )
                        })
                    )
            }
            <Link
                to={'/createNote'}>
                <button >Create Note</button>
            </Link>
        </Container>
    )
}


