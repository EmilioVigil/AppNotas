import styled from 'styled-components'

const NoteCard = styled.div`
  background-color: #fff;
  border-radius: 8px;
  padding: 20px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.05);
  }
`;

const NoteTitle = styled.h3`
  color: #333;
  font-size: 18px;
  margin-bottom: 10px;
`;

const NoteContent = styled.p`
  color: #666;
  font-size: 14px;
  margin-bottom: 20px;
`;
export {
    NoteCard,
    NoteContent,
    NoteTitle
}