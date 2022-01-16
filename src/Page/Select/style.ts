import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  box-shadow: 0px 3px 30px #00000029;
  top: 46px;
  left: 734px;
  width: 450px;
  background: #f9f9f9 0% 0% no-repeat padding-box;
  margin: 0 auto;
  margin-bottom: 287px;
  h2 {
    width: 267px;
    height: 32px;
    text-align: center;
    font: normal normal normal 14px/16px Arial;
    letter-spacing: 0px;
    color: #9c9b99;
  }
  button {
    border-radius: 2px;
    width: 100px;
    height: 53px;
    border: 1px solid #707070;
    a {
      text-decoration: none;
      font: normal normal normal 14px/16px Arial;
      letter-spacing: 0px;
      color: #707070;
    }
  }
`;

export const SubContainer = styled.div`
  width: 100%;
  max-width: 325px;
  div {
    width: 100%;
    display: flex;
    ul {
      list-style: none;
      display: flex;
      flex-direction: column;
      width: 100%;
      justify-content: space-between;
      align-items: center;
      div {
        display: flex;
        justify-content: space-between;
        align-items: center;
        &:first-child {
          margin-top: 21px;
        }
        &:not(:last-child) {
          margin-bottom: 10.56px;
        }
        li {
          width: 100px;
          height: 117px;
          background: #ffffff 0% 0% no-repeat padding-box;
          border-radius: 3px;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-direction: column;
          text-align: center;
          cursor: pointer;
          &.active {
            border: 1px solid ${({ theme }) => theme.colors.secundary};
          }

          p {
            text-align: center;
            font: normal normal normal 12px/12px Arial;
            letter-spacing: 0px;
            color: #707070;
            margin-top: 8.22px;
          }
        }
      }
    }
  }
`;
export const Buttons = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 52px;
  margin-top: 22px;
`;

export const ButtonCreate = styled.button`
  width: 214px !important;
  height: 53px;
  background: #c83d2f 0% 0% no-repeat padding-box;
  border-radius: 2px;
  text-align: center;
  font: normal normal normal 14px/16px Arial;
  letter-spacing: 0px;
  color: #ffffff;
  &[disabled] {
    background: #ccc;
    cursor: default;
  }
`;

export const DigitOther = styled.li`
  position: relative;
  height: 100%;
  width: 100%;
  flex: 1;
  margin-left: 12.4px;
  justify-content: space-between;
  align-items: flex-end;
  cursor: default;
  input {
    display: flexbox;
    align-items: flex-end;
    cursor: pointer;
    outline: none;
    text-align: center;
    border: none;
    border-bottom: 1px solid #989898;
    &::placeholder {
      text-align: center;
      font: normal normal normal 12px/12px Arial;
      letter-spacing: 0px;
      color: #989898;
    }
  }
  p {
    text-align: center;
    cursor: default;
    font: normal normal normal 12px/12px Arial;
    letter-spacing: 0px;
    position: absolute;
    top: 86px;
  }
`;
