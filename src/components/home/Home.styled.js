
// --------------------------------------------------------
import styled from 'styled-components';


const Container = styled.div`
  display: flex;
  height: 100vh;
`;

const Sidebar = styled.div`
  width: 300px;
  background-color: #333;
  color: #fff;
  padding: 20px;
`;

const SidebarTitle = styled.h2`
  font-size: 24px;
  margin-bottom: 20px;
`;

const CreateNoteButton = styled.button`
  background-color: #3498db;
  color: #fff;
  padding: 10px 20px;
  border: none;
  border-radius: 4px;
  font-size: 16px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #2980b9;
  }
`;

const MainContent = styled.div`
  flex: 1;
  padding: 20px;
`;

const NotesList = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  grid-gap: 20px;
`;





export {
    Container,
    NotesList,
    MainContent,
    CreateNoteButton,
    Sidebar,
    SidebarTitle

}