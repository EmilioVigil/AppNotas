import { Link } from "react-router-dom";
import {
    Container,
    NotesList,
    MainContent,
    CreateNoteButton,
    Sidebar,
    SidebarTitle
}
    from "./Home.styled";
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
            <Sidebar>
                Notas de {user.userName}
                <SidebarTitle>{user.userName}</SidebarTitle>
                <CreateNoteButton>
                    <Link
                        to={'/createNote'}>
                        Create Note
                    </Link>
                </CreateNoteButton>
            </Sidebar>
            <MainContent>
                <NotesList>
                    {

                        !notes.length ? <p>Loading...</p> :
                            (
                                notes.map(note => {
                                    return (
                                        <CardNote
                                            id={note._id}
                                            title={note.title}
                                            content={note.content}
                                            handleDeleteNoteClick={handleDeleteNoteClick}
                                        />
                                    )
                                })
                            )
                    }
                </NotesList>

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

            </MainContent>

        </Container>
    )
}







