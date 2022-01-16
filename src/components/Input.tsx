import styled, { css } from 'styled-components';

interface ComponentStyleProps {
  error?: any;
}

export default styled.input<ComponentStyleProps>`
  width: 325px;
  height: 46px;
  background: #ffffff 0% 0% no-repeat padding-box;
  border: 1px solid #e5e5e5;
  border-radius: 2px;

  ${({ theme, error }) =>
    error &&
    css`
      color: ${theme.colors.secundary};
      border-color: ${theme.colors.secundary} !important;
    `}
`;
