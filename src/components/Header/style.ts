import styled from "styled-components";

export const Container = styled.header`
  width: 100%;
  height: 201px;
  background: ${({theme})=> theme.colors.secundary};
  display: flex;
  justify-content: center;
  align-items: flex-end;

`
export const Infos = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: center;
    align-items: center;
    width: 100%;
    max-width: 450px;
    height: 100%;
    max-height:155px ;
    background:#fff ;

    h2{
      font: normal normal bold 24px Arial;
      margin-top: 22px;
      color: ${({theme})=> theme.colors.secundary};
      letter-spacing: 0px;
      margin-bottom: 2px;
      
    }
    p{
      font: normal normal normal 18px Arial;
      color: #707070;
      
    }
    
    ul{
      display: flex;
      justify-content: space-between;
      width: 300px;
      max-width: 100%;
      list-style: none;

      li{
        margin-top: 23.83px;
        margin-bottom: 21.33px;
         flex: 1;
         display: flex;
         flex-direction: column;
         
        &.user{
           justify-content: flex-end;
           align-items: flex-end;
           text-align: center;
           h3{
             
             text-align: center;
           }
        }
        &.espaco{
          border-right : 1px solid #E5E5E5 ;
          
        }

        &.impressao{
           justify-content:flex-start;
           align-items:flex-start;
           text-align: center;
           border-right : 1px solid #E5E5E5 ;
           h3{
             text-align: center;
           }
        }

        h3{
          color: ${({theme})=> theme.colors.secundary};
          font:  bold 18px Arial;
          letter-spacing: 0px;
       
        }
        p{
          font: normal normal normal 11px Arial;
          letter-spacing: 0px;
          color: #707070;
          
        }
      }
     
    }
`