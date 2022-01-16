import React, { useState } from 'react';
import { Container, Infos, SubContainer } from './style';
import bye from '../../components/assets/images/bye.svg';
import { Link } from 'react-router-dom';
import { Loading } from '../../components/Loading/Loading';
export const Sucess = () => {
  const [loading, setLoading] = useState(true);
  setTimeout(() => {
    setLoading(false);
  }, 2000);
  if (loading) return <Loading loading={loading} />;
  return (
    <Container>
      <SubContainer>
        <div>
          <img src={bye} alt="" />
          <h2>AdeusPapel!</h2>
          <h2>Seu portal está pronto</h2>
        </div>
        <h2 className="subtitle">
          Seu plano gratuíto garante acesso vitalício a
        </h2>
        <Infos>
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
        <Link to="/">
          <button>Ir para o meu portal</button>
        </Link>
      </SubContainer>
    </Container>
  );
};
