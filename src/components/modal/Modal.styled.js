import styled, { keyframes } from 'styled-components';

// Definimos un keyframe para la animación de entrada de la modal
const fadeIn = keyframes`
  from {
    transform: translateY(-100%);
  }
  to {
    transform: translateY(0);
  }
`;

// Componente de la modal
const Modal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.5);
  animation: ${fadeIn} 0.3s ease-in-out;
`;

const ModalContent = styled.div`
  background-color: white;
  border-radius: 4px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
  padding: 20px;

  p{
    margin-bottom: 1rem;
  }

`;

// Componente del botón
const Button = styled.button`
  background-color: ${props => (props.primary ? '#e74c3c' : '#bdc3c7')};
  color: white;
  padding: 8px 16px;
  border-radius: 4px;
  margin-right: 8px;
  border: none;
  cursor: pointer;
  transition: background-color 0.3s ease-in-out;

  &:hover {
    background-color: ${props => (props.primary ? '#c0392b' : '#95a5a6')};
  }
`;

export {
    Modal,
    ModalContent,
    Button
}
