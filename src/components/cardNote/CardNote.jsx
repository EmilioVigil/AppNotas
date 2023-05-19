import {
    NoteCard,
    NoteContent,
    NoteTitle
} from './CardNote.styled'

export function CardNote({ title, content, id, handleDeleteNoteClick }) {
    return (
        <NoteCard key={id}>
            <NoteTitle>{title}</NoteTitle>
            <NoteContent>{content}</NoteContent>
            <button onClick={() => handleDeleteNoteClick(id)} >X</button>

        </NoteCard>

    )
}