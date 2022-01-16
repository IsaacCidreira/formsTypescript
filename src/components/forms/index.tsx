import React, { ReactNode } from 'react';
import { Container } from './style';

interface PropsForm {
  children?: ReactNode;
  error?: any;
}
export const FormsContainer = ({ children, error }: PropsForm) => {
  return (
    <Container>
      {children}
      {error && <small>{error}</small>}
    </Container>
  );
};
