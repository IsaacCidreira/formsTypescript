import React from 'react';
import { Nav } from '../Nav';
import { Container } from './style';

interface LoadingType {
  loading: boolean;
}
export const Loading = ({ loading }: LoadingType) => {
  if (loading)
    return (
      <Container>
        <Nav />
        <div className="lds-ring">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
        <h2>Aguarde enquanto preparamos o seu portal</h2>
      </Container>
    );
  else return null;
};
