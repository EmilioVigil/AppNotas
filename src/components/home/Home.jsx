import { Link } from "react-router-dom";
import { NoteContainer, Container } from "./Home.styled";
// Importamos el hook
import { useNote } from "../../hooks/useNotes";
import { CardNote } from "../cardNote/CardNote";

export function Home() {
    const { user, setUser, notes, deleteNote } = useNote()
    return (
        <Container>
            <h2>Notas de {user.userName} </h2>
            {
                !notes.length ? <p>Loading...</p> :
                    (
                        notes.map(note => {
                            return (
                                <NoteContainer key={note._id}>
                                    <CardNote
                                        title={note.title}
                                        content={note.content}
                                        id={note._id}
                                        deleteNote={deleteNote}
                                    />

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


