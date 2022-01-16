import { useEffect, useRef } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { NavContainer } from './style';

export const Nav = () => {
  const digitDate = useRef<HTMLDivElement>(null);
  const select = useRef<HTMLDivElement>(null);
  const backg = useRef<HTMLDivElement>(null);
  const line = useRef<HTMLDivElement>(null);
  const navDisplay = useRef<HTMLDivElement>(null);
  const location = useLocation();
  useEffect(() => {
    const { pathname } = location;

    if (
      digitDate.current &&
      select.current &&
      backg.current &&
      line.current &&
      navDisplay.current
    )
      switch (pathname) {
        case '/select':
          digitDate.current.style.color = '#BFBFBF';
          break;
        case '/sucess':
          digitDate.current.style.color = '#BFBFBF';
          select.current.style.color = '#BFBFBF';
          backg.current.style.background = '#C83D2F';
          line.current.style.background = '#C83D2F';
          break;
        default:
      }
  }, [location]);
  return (
    <NavContainer ref={navDisplay}>
      <ul>
        <li>
          <NavLink to="/">
            <div></div>
            <p ref={digitDate}> Digite seus dados</p>
          </NavLink>
        </li>
        <li>
          <NavLink to="/select">
            <div ref={backg}></div>
            <p ref={select}>Selecione suas necessidades</p>
            <span ref={line}></span>
          </NavLink>
        </li>
        <li>
          <NavLink to="/sucess">
            <div></div>
            <p>Finalizar cadastro</p>
            <span></span>
          </NavLink>
        </li>
      </ul>
    </NavContainer>
  );
};
