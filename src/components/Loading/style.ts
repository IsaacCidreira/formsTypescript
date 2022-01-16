import styled, { keyframes } from 'styled-components';
const ldsring = keyframes`
    0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }

`;
export const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  box-shadow: 0px 3px 30px #00000029;
  width: 450px;
  background: #f9f9f9 0% 0% no-repeat padding-box;
  margin: 0 auto;
  margin-bottom: 287px;
  position: relative;
  nav {
    margin-bottom: 165px;
  }
  h2 {
    width: 281px;
    height: 51px;
    text-align: center;
    font: normal normal bold 24px/24px Arial;
    letter-spacing: 0px;
    color: #c83d2f;
    margin-top: 55px;
    margin-bottom: 217px;
  }
  .lds-ring {
    display: inline-block;
    position: relative;
    width: 80px;
    height: 80px;

    div {
      box-sizing: border-box;
      display: flex;
      justify-content: center;
      position: absolute;
      left: -15%;
      width: 100px;
      height: 100px;
      margin: 8px;
      border: 13px solid #fff;
      border-radius: 50%;
      animation: ${ldsring} 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
      border-color: ${({theme})=> theme.colors.secundary} transparent transparent transparent;
      &:div:nth-child(1) {
        animation-delay: -0.45s;
      }
      &:div:nth-child(1) {
        animation-delay: -0.45s;
      }
    }
  }

  .lds-ring div:nth-child(1) {
    animation-delay: -0.45s;
  }
  .lds-ring div:nth-child(2) {
    animation-delay: -0.3s;
  }
  .lds-ring div:nth-child(3) {
    animation-delay: -0.15s;
  }
`;
