import styled, { keyframes } from "styled-components";

const colorize = keyframes`
 from {
    color: #333;
  }

  to {
    color: #C83D2F;
  }
`
const colorizeBack = keyframes`
 from {
    background: initial;
  }

  to {
    background:  #C83D2F;
  }
`

const colorizeSpan = keyframes`
 from {
    background: initial;
  }

  to {
    background:  #C83D2F;
  }
`


export const NavContainer = styled.nav`
  display: flex;
  width: 100%;
  max-width: 356px;
  margin-bottom: 35px;
  ul{
    width: 100%;
    display: flex;
    list-style: none;
    text-align: center;
    font: normal 10px Arial;
    letter-spacing: 0px;
    justify-content: space-between;
    li{
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      width: 100%;
      max-width: 56px;
        p{
          text-align: center;
          font: normal normal normal 10px/10px Arial;
          letter-spacing: 0px;
          color: #707070;
        }
      
      :first-child{
        position: relative;
         z-index: 50;
          div{
            background-color: ${({theme})=> theme.colors.secundary};
          }
        
      }

      :nth-child(2){
        position: relative;
         z-index: 50;
        
         span{
          height: 3px;
          top: 37px;
          left: -107px;
          width: 136px;
          position: absolute;
          background: #707070 ;
          }

          /* span{
          height: 3px;
          top: 37px;
          left: 35px;
          width: 145px;
          position: absolute;
          background: #707070 ;
          } */
      }

      :nth-child(3){
        position: relative;
         z-index: 50;

         span{
          height: 3px;
          top: 37px;
          left: -115px;
          width: 136px;
          position: absolute;
          background: #707070 ;
          }

      }
      
      a{
        text-decoration: none;
        display: flex;
        flex-direction: column;
        text-align: center;
        justify-content: center;
        align-items: center;
        pointer-events: none;
      }
      .active{  
        font-weight: bold;
        animation: ${colorize} 0.1s linear forwards;
        div{
            animation: ${colorizeBack} 0.1s linear forwards;
          }
          span{
              animation: ${colorizeSpan} 0.1s forwards;
          }
          p{
            color: ${({theme})=>theme.colors.secundary};
            font: normal normal bold 10px/10px Arial;
          }
      }
       
      &:nth-child(2){
        max-width: 73px;
      }
      div{
        margin-top: 32px;
        margin-bottom: 4px;
        width: 15px;
        height: 15px;
        border-radius: 50%;
        background: #707070;
      }
    }
  }

`
