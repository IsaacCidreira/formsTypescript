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
`;

export const SubContainer = styled.div`
  width: 100%;
  max-width: 325px;
  .subtitle {
    margin: 0 auto;
    margin-top: 77px;
    margin-bottom: 25.83px;
    text-align: center;
    width: 190px;
    height: 33px;
    text-align: center;
    font: normal normal normal 16px/16px Arial;
    letter-spacing: 0px;
    color: #707070;
  }
  div {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    margin-top: 66px;
    img {
      margin-bottom: 21.65px;
    }
    h2 {
      width: 262px;
      text-align: center;
      font: normal normal bold 24px/27px Arial;
      letter-spacing: 0px;
      color: #c83d2f;
    }
  }
  button {
    width: 325px;
    height: 53px;
    background: #c83d2f 0% 0% no-repeat padding-box;
    border-radius: 2px;
    color: #fff;
    border: none;
    margin-top: 34.33px;
    margin-bottom: 54px;
  }
`;

export const Infos = styled.div`
  width: 301px;
  height: 39px;
  margin: 0px !important;
  ul {
    width: 301px;
    height: 39px;
    display: flex;
    justify-content: space-between;
    width: 300px;
    max-width: 100%;
    list-style: none;

    li {
      div {
        margin: 0px;
      }
      flex: 1;
      display: flex;
      flex-direction: column;

      &.user {
        justify-content: flex-start;
        align-items: flex-start;
        text-align: center;
        h3 {
          text-align: center;
        }
      }
      &.espaco {
        border-right: 1px solid #e5e5e5;
        text-align: center;
      }

      &.impressao {
        justify-content: flex-start;
        align-items: flex-start;
        text-align: center;
        border-right: 1px solid #e5e5e5;
        h3 {
          text-align: center;
        }
      }

      h3 {
        color: ${({ theme }) => theme.colors.secundary};
        font: bold 18px Arial;
        letter-spacing: 0px;
      }
      p {
        font: normal normal normal 11px Arial;
        letter-spacing: 0px;
        color: #707070;
      }
    }
  }
`;
