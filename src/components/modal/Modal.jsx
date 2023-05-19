import {
    Modal,
    Button,
    ModalContent
} from './Modal.styled'

export function DeleteConfirmationModal({ onConfirm, onCancel }) {
    return (
        <Modal>
            <ModalContent>
                <p>¿Está seguro de que desea eliminar esta nota?</p>
                <div>
                    <Button onClick={onConfirm} primary  >Borrar</Button>
                    <Button onClick={onCancel} >Cancelar</Button>
                </div>
            </ModalContent>
        </Modal>
    )
}


