import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.div`
  height: 100vh;
  width: 100vw;
  background-color:  ${({ aberto }) => (aberto ? '#008BD0' : '#ffffff')};
  transition: all 350ms ease-in-out;
  
  display: flex;
  flex-direction: row;
`;

export const Menu = styled.div`
  display: flex;
  flex-direction: column;
  align-items: ${({ aberto }) => (aberto ? 'flex-start' : 'center')};
  width: ${({ aberto }) => (aberto ? '300px' : '110px')};
  padding-left: ${({ aberto }) => (aberto ? '35px' : '0')};
  padding-top: 35px;
  transition: all 350ms ease-in-out;
  
  img{
    height: 36px;
    width: 36px;
  }
  
  
`;

export const MenuController = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 100%;
  justify-content: ${({ aberto }) => (aberto ? 'space-between' : 'center')};
  
  span{
    display: flex;
    height: 20px;
    width: 20px;
    justify-content: center;
    align-items: center;
    margin-right: 40px;
    transition: all 100ms ease-in-out;
    cursor: pointer;
    
    &:active{
      opacity: 0.4;
    }
  }
`;

export const Open = styled.div`
  margin-top: 55px;
  margin-bottom: 30px;
  height: 15px;
  
  &:active{
    opacity: 0.6;
  }
`;


export const Main = styled.div`
  flex:1;
  background: white;
  border-top-left-radius: 20px;
  border-bottom-left-radius: 20px;
  box-shadow: ${({ aberto }) => (aberto ? '0px 2px 10px 2px rgba(0, 0, 0, .4)' : '0px 2px 10px 2px rgba(0, 0, 0, 0)')};
  transition: all 350ms ease-in-out; 
`;

export const Header = styled.header`
  width: 100%;
  height: 90px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;
  padding-right: 45px
 
  h3{
    font-weight: 500;
    font-size: 16px;
  }
  
  img{
    height: 50px;
    width: 50px;
    border-radius: 50%;
    object-fit: cover;
    margin-left: 28px;
  }
  
  span{
    display: inline-flex;
    margin-left: 20px;
    width: 20px;
    height: 20px;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    
    &:active{
      opacity: .6;
    }
  }
  
  
`;

export const Content = styled.main`
  flex:1;
  height: 200%;
  max-height: calc(100vh - 90px);
`;

export const MenuItem = styled(Link)`
  display: flex;
  flex-direction: row;
  align-items: center;  
  height: 40px;
  margin-bottom: 5px;
  cursor: pointer;
  text-decoration: none;
  
  &:active{
    opacity: 0.5;
  }
  
  span{
    margin-left: 10px;
    color: #ffffff;
  }
  
 
`;
