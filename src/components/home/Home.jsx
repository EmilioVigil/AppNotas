import { getAllNotes } from "../../services/Notes"
import { useState } from "react"
export function Home() {

    const [notes, setNotes] = useState('')



    return (
        <div>
            <h1>Notas:</h1>

        </div>
    )
}