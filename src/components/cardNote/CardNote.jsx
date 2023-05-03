export function CardNote({ title, content, id, deleteNote }) {
    return (
        <div>
            <h2>{title}</h2>
            <p>{content}</p>
            <button onClick={() => deleteNote(id)} >X</button>
        </div>
    )
}