import styled from "styled-components";

export const Container = styled.div`
width: 100%;
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
padding-bottom: 287px;
input{
  outline: none;
  padding-left: 10px;
  padding-right: 10px;
}
form{
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
}
label{
  display: flex;
  align-content: center;
  font: normal normal normal 14px/16px Arial;
  letter-spacing: 0px;
  color: #9C9B99;
  margin-bottom: 7px;
  span{
    margin-left: 4px ;
    margin-top: 1px;
  }
}
button{
  cursor: pointer;
  width: 116px;
  height: 53px;
  background:  #707070 0% 0% no-repeat padding-box;
  border-radius: 2px;
  border: none;
  color: #fff;
  &[disabled] {
    background: #ccc;
    cursor: default;
  }
}
  
`


export const DominioContainer = styled.div`
    position: relative;
    display: flex;
    align-content: center;
    justify-content: end;
    outline: none;
      input{
        outline: none;
      }
    span{
      position: absolute;
      width: 122px;
      height: 46px;
      background: #EEEEEE 0% 0% no-repeat padding-box;
      border: 1px solid #E5E5E5;
      border-radius: 2px;
      font: normal normal normal 14px/16px Arial;
      letter-spacing: 0px;
      color: #9C9B99;
      display: flex;
      align-items: center;
      justify-content: center;
    }
`

export const DivInput = styled.div`
    width: 100%;
    max-width: 325px;
    display: flex;
    text-align: center;
    input{
      text-align: center;
      &:nth-child(1){
        width: 62px;
        height: 46px;
        margin-right: 7px;
      }
      &:nth-child(2){
        width: 62px;
        height: 46px;
        margin-right: 7px;
      }
      &:nth-child(3){
        width: 187px;
        height: 46px;
      }
    }
`
export const ButtonCheck = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  max-width: 325px;
  margin-top: 30px;
    div{
      display: flexbox;
      align-items: center;
      width: 145px;
    height: 22px;
    }
  
  label{
  margin-left: 3px;
  width: 146px;
  height: 22px;
  text-align: left;
  font: normal normal normal 10px Arial;
  letter-spacing: 0px;
  color: #9C9B99;
  }

`

export const CheckedBox  = styled.div`
  position: relative;
    input{
      position: absolute;
      cursor: pointer;
      opacity: 0;
      z-index: 1000;
      top: 5px;
      left: 5px;

    

      &:checked ~ span::after{
        display: block;
      }

    }

    label{
      cursor: pointer;
      position: relative;
      left: 22px;
    }
    span{
      left: 0;
      top: 0;
      width: 20px;
      height: 20px;
      background: #fff;
      border: 1px solid #E5E5E5;
      position: absolute;
      cursor: pointer;

      &::after{
        content: '';
        display: none;
        position: absolute;
        top: -6px;
        left: 5px;
        width: 7px;
        height: 20px;
        border: solid #878787 ;
        border-width: 0 3px 3px 0;
        transform: rotate(45deg);
      }
    }


`