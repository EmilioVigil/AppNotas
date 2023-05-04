export function CardNote({ title, content, id, handleDeleteNoteClick }) {
    return (
        <div>
            <h2>{title}</h2>
            <p>{content}</p>
            <button onClick={() => handleDeleteNoteClick(id)} >X</button>



        </div>

    )
}