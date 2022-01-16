import React from 'react';
import { useLocation } from 'react-router-dom';
import { Container, Infos } from './style';

export const Header = () => {
  const location = useLocation();
  const { pathname } = location;

  return (
    <Container>
      {pathname === '/sucess' ? (
        <Infos>
          <h2>Nome do Cadastro</h2>
          <p
            style={{
              color: ' #707070',
              font: 'normal normal normal 18px/21px Arial',
              marginTop: '28px',
              marginBottom: '19px',
              width: '339px',
            }}
          >
            Bem-vindo a revolução em gerenciamento de documento e impressões em
            nuvem
          </p>
        </Infos>
      ) : (
        <Infos>
          <h2>Cadastre-se Gratuitamente</h2>
          <p>e tenha um plano vitalício com</p>

          <ul>
            <li className="impressao">
              <div>
                <h3>1000</h3>
                <p>impressões</p>
              </div>
            </li>
            <li className="espaco">
              <h3>1GB</h3>
              <p>de espaço</p>
            </li>
            <li className="user">
              <div>
                <h3>3</h3>
                <p>usuários</p>
              </div>
            </li>
          </ul>
        </Infos>
      )}
    </Container>
  );
};
