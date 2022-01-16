import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FormsContainer } from '../../components/forms';
import { useErros } from '../../hooks/useErros';
import Input from '../../components/Input';
import { Nav } from '../../components/Nav';
import {
  ButtonCheck,
  CheckedBox,
  Container,
  DivInput,
  DominioContainer,
} from './style';
import isEmailValid from '../../utils/isEmailValid';
import isPasswordValid from '../../utils/isPassword';
import question from '../../components/assets/images/question.svg';
import formatPhone, { formatArea, formatDDD } from '../../utils/formatPhone';

export const Home = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [dominio, setDominio] = useState('');
  const [phone, setPhone] = useState('');
  const [ddd, setDdd] = useState('');
  const [areaPhone, setAreaPhone] = useState('');

  const { setError, errors, getErrorMessageByFieldName, removeError } =
    useErros();

  const isFormValid = name && phone && email && password && errors.length === 0;

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
  }

  function handleNameChange(event: React.ChangeEvent<HTMLInputElement>) {
    setName(event.target.value);
    if (!event.target.value) {
      setError({ field: 'name', message: 'Nome é Obrigatório.' });
    } else {
      removeError('name');
    }
  }

  function handleEmailChange(event: React.ChangeEvent<HTMLInputElement>) {
    setEmail(event.target.value);
    if (!event.target.value && !isEmailValid(event.target.value)) {
      setError({ field: 'email', message: 'E-mail inválido.' });
    } else {
      removeError('email');
    }
  }

  function handlePasswordChange(event: React.ChangeEvent<HTMLInputElement>) {
    setPassword(event.target.value);
    if (!isPasswordValid(event.target.value)) {
      setError({
        field: 'password',
        message:
          'A senha precisa ter: 1 caracter maíusculo, 1 minúsculo e 1 caracter especial. Com no mínimo 8 caracteres.',
      });
    } else {
      removeError('password');
    }
  }

  function handlePhoneChange({ target }: React.ChangeEvent<HTMLInputElement>) {
    setPhone(formatPhone(target.value));
    if (!target.value) {
      setError({ field: 'telephone', message: 'Telefone é Obrigatório.' });
    } else {
      removeError('name');
    }
  }

  function handleDddChange({ target }: React.ChangeEvent<HTMLInputElement>) {
    setDdd(formatDDD(target.value));
  }

  function handleAreaChange({ target }: React.ChangeEvent<HTMLInputElement>) {
    setAreaPhone(formatArea(target.value));
  }
  return (
    <Container>
      <Nav />
      <form onSubmit={handleSubmit}>
        <FormsContainer error={getErrorMessageByFieldName('name')}>
          <label htmlFor="name">Nome</label>

          <Input
            error={getErrorMessageByFieldName('name')}
            type="text"
            id="name"
            value={name}
            onChange={handleNameChange}
          />
        </FormsContainer>

        <FormsContainer error={getErrorMessageByFieldName('email')}>
          <label htmlFor="email">Email</label>
          <Input
            error={getErrorMessageByFieldName('email')}
            type="email"
            id="email"
            value={email}
            onChange={handleEmailChange}
          />
        </FormsContainer>
        <FormsContainer error={getErrorMessageByFieldName('password')}>
          <label htmlFor="senha">Senha</label>
          <Input
            error={getErrorMessageByFieldName('password')}
            type="password"
            id="senha"
            value={password}
            onChange={handlePasswordChange}
          />
        </FormsContainer>
        <FormsContainer>
          <label htmlFor="dominio">
            Domínio{' '}
            <span>
              <img src={question} alt="Question" />
            </span>
          </label>
          <DominioContainer>
            <Input
              type="text"
              id="dominio"
              value={dominio}
              onChange={(event) => setDominio(event.target.value)}
            />
            <span>.selbetti.com.br</span>
          </DominioContainer>
        </FormsContainer>

        <FormsContainer error={getErrorMessageByFieldName('telephone')}>
          <label htmlFor="telephone">Telefone</label>
          <DivInput>
            <Input
              error={getErrorMessageByFieldName('telephone')}
              type="tel"
              id="telephone"
              value={areaPhone}
              maxLength={2}
              onChange={handleAreaChange}
            />

            <Input
              error={getErrorMessageByFieldName('telephone')}
              type="tel"
              id="telephone"
              value={ddd}
              maxLength={2}
              onChange={handleDddChange}
            />
            <Input
              error={getErrorMessageByFieldName('telephone')}
              type="tel"
              id="telephone"
              value={phone}
              maxLength={10}
              onChange={handlePhoneChange}
            />
          </DivInput>
        </FormsContainer>
        <ButtonCheck>
          <CheckedBox>
            <input id="aceite" type="checkbox" />
            <span></span>
            <label htmlFor="aceite">
              Concordo em receber novidades sobre a Selbetti via email
            </label>
          </CheckedBox>

          <Link to="/select">
            <button disabled={!isFormValid}>Continuar</button>
          </Link>
        </ButtonCheck>
      </form>
    </Container>
  );
};
