import { Link } from "react-router-dom";
import { NoteContainer, Container } from "./Home.styled";
import { useState } from "react";
// Importamos el hook
import { useNote } from "../../hooks/useNotes";
import { CardNote } from "../cardNote/CardNote";
import { DeleteConfirmationModal } from "../modal/Modal";

export function Home() {
    const { user, setUser, notes, deleteNote } = useNote()

    const [showDeleteConfirmation, setShowDeleteConfirmation] = useState(false)
    const [noteToDelete, setNoteToDelete] = useState(null)


    function handleDeleteNoteClick(id) {
        setNoteToDelete(id);
        setShowDeleteConfirmation(true);
    }
    function handleCancelDeleteNote() {
        setNoteToDelete(null);
        setShowDeleteConfirmation(false);
    }

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
                                        handleDeleteNoteClick={handleDeleteNoteClick}
                                    />

                                </NoteContainer>

                            )
                        })
                    )
            }

            {
                showDeleteConfirmation && (
                    <DeleteConfirmationModal
                        onConfirm={() => {
                            setShowDeleteConfirmation(false)
                            deleteNote(noteToDelete)
                        }}
                        onCancel={handleCancelDeleteNote}
                    />
                )
            }

            <Link
                to={'/createNote'}>
                <button >Create Note</button>
            </Link>
        </Container>
    )
}


