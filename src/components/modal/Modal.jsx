import styled from 'styled-components'

export function DeleteConfirmationModal({ onConfirm, onCancel }) {
    return (
        <Modal>
            <div>
                <p>¿Está seguro de que desea eliminar esta nota?</p>
                <div>
                    <button onClick={onConfirm}>Aceptar</button>
                    <button onClick={onCancel}>Cancelar</button>
                </div>
            </div>
        </Modal>
    )
}


const Modal = styled.div`
    background-color: red;

`