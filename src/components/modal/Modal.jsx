import { useState } from "react";


export function DeleteConfirmationModal({ onConfirm, onCancel }) {
    return (
        <div>
            <div>
                <p>¿Está seguro de que desea eliminar esta nota?</p>
                <div>
                    <button onClick={onConfirm}>Aceptar</button>
                    <button onClick={onCancel}>Cancelar</button>
                </div>
            </div>
        </div>
    )
}


