import React, { useState } from 'react';
import styled, { keyframes } from 'styled-components';

import { Login } from '../login/Login';
import { SignUp } from '../signUp/SignUp';

export const LoginScreen = () => {
    const [formType, setFormType] = useState('');

    const handleFormChange = (type) => {
        setFormType(type);
    };

    return (
        <Container>
            <ToggleButtons>
                <Button active={formType === 'login'} onClick={() => handleFormChange('login')}>
                    Login
                </Button>
                <Button active={formType === 'signup'} onClick={() => handleFormChange('signup')}>
                    Sign Up
                </Button>
            </ToggleButtons>
            {formType === 'login' ? <Login /> : ''}
            {formType === 'signup' ? <SignUp /> : ''}
        </Container>
    );
};


const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
`;

const ToggleButtons = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 2rem;
`;

const Button = styled.button`
  background-color: ${({ active }) => (active ? '#4169e1' : '#fff')};
  color: ${({ active }) => (active ? '#fff' : '#4169e1')};
  border: 2px solid #4169e1;
  padding: 0.5rem 1.5rem;
  font-size: 1rem;
  font-weight: 500;
  border-radius: 0.25rem;
  transition: all 0.3s ease-in-out;

  &:hover {
    background-color: ${({ active }) => (active ? '#3c64d2' : '#4169e1')};
    color: #fff;
    cursor: pointer;
  }
`;