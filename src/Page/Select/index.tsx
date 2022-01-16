import { Link } from 'react-router-dom';
import { Nav } from '../../components/Nav';
import {
  ButtonCreate,
  Buttons,
  Container,
  DigitOther,
  SubContainer,
} from './style';
import rh from '../../components/assets/images/rh.svg';
import financeiro from '../../components/assets/images/financeiro.svg';
import atendimento from '../../components/assets/images/atendimento.svg';
import juridico from '../../components/assets/images/juridico.svg';
import logistica from '../../components/assets/images/logistica.svg';
import educacao from '../../components/assets/images/educacao.svg';
import saude from '../../components/assets/images/saude.svg';
import { useEffect, useState } from 'react';

export const Select = () => {
  const [validation, setValidation] = useState([]);
  const [next, setNext] = useState(false);
  const [other, setOther] = useState('');
  console.log(next);
  function handleClick(event: any) {
    let element = event.currentTarget;
    if (!event.currentTarget.classList.contains('active')) {
      event.currentTarget.classList.add('active');
      setValidation((prevState: any): any => [...prevState, element]);
    } else {
      event.currentTarget.classList.remove('active');
      setValidation((prevState: any): any =>
        prevState.filter((item: any): any => item !== element),
      );
    }
  }
  useEffect(() => {
    if (validation.length > 0 || other.length > 0) {
      setNext(true);
    } else {
      setNext(false);
    }
  }, [validation.length, other.length]);

  return (
    <Container>
      <Nav />
      <h2>
        Selecione uma ou mais necessidades para pré-configurarmos o sistema para
        você
      </h2>

      <SubContainer>
        <div>
          <ul>
            <div>
              <li onClick={handleClick}>
                <img src={rh} alt="" />
                <p>Recursos Humanos</p>
              </li>
              <li onClick={handleClick}>
                <img src={financeiro} alt="" />
                <p>Financeiro</p>
              </li>
              <li onClick={handleClick}>
                <img src={atendimento} alt="" />
                <p>Atendimento</p>
              </li>
            </div>
            <div>
              <li onClick={handleClick}>
                <img src={juridico} alt="" />
                <p>Jurídico</p>
              </li>
              <li onClick={handleClick}>
                <img src={logistica} alt="" />
                <p>Logística</p>
              </li>
              <li onClick={handleClick}>
                <img src={educacao} alt="" />
                <p>Educação</p>
              </li>
            </div>
            <div>
              <li onClick={handleClick}>
                <img src={saude} alt="" />
                <p>Saúde</p>
              </li>
              <DigitOther>
                <input
                  type="text"
                  value={other}
                  placeholder="Digite um segmento"
                  onChange={({ target }) => setOther(target.value)}
                />
                <p>Outro</p>
              </DigitOther>
            </div>
          </ul>
        </div>

        <Buttons>
          <Link to="/">
            <button>Voltar</button>
          </Link>
          <Link to="/sucess">
            <ButtonCreate disabled={!next}>Criar minha conta</ButtonCreate>
          </Link>
        </Buttons>
      </SubContainer>
    </Container>
  );
};
