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
    user-select: none;
    
    &:active{
      opacity: 0.4;
    }
  }
`;

export const Open = styled.div`
  margin-top: 55px;
  margin-bottom: 30px;
  height: 15px;
  user-select: none;
  
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
  justify-content: space-between;
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
  user-select: none;
  
  &:active{
    opacity: 0.5;
  }
  
  span{
    margin-left: 10px;
    color: #ffffff;
    font-weight: ${({ selected }) => (selected ? 600 : 400)};
  }
  
 
`;

export const Right = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  flex: 1;
  justify-content: flex-end;  
  
  & > span{
    display: inline-flex;
    margin-left: 20px;
    width: 20px;
    height: 20px;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    user-select: none;
    
    &:active{
      opacity: .6;
    }
  }
`;

export const Left = styled.div`  
  display: flex;
  flex-direction: row;
  flex: 1;
  align-items: center;
  padding-left: 54px;
  color: #008BD0;
  
  
  div{
    display: flex;
    flex-direction: row;
    align-items: center;
    height: 100%;
    cursor: pointer;
    transition: all 100ms ease-in-out;
    user-select: none;
    
    &:active{
      opacity: .5;
    }
    
    
    h3{
      font-weight: 500;
      margin-top: 3px;
      margin-left: 10px;
    }   
  }
`;

export const ProfileMenu = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  height: 200px;
  width: 250px;
  border-radius: 5px;
  background-color: #ffffff;
  box-shadow: 0 3px 6px rgba(0, 0, 0, .25);
  top: 90px;
  right: 45px;
  overflow: hidden;
  
  .item-menu{
    flex: 1;
    display: flex;
    flex-direction: row;
    align-items: center;
    border-bottom: 1px rgba(112,112,112,0.1) solid;
    justify-content: flex-end;
    transition: all 100ms ease-in-out;
    cursor: pointer;
    user-select: none;
    
    &:active{
      opacity: 0.5;
    }
    
    span{
      margin-right: 28px;
      font-size: 16px;
    }
  }
  
  .logout{
    height: 48px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    background-color: rgba(255,26,0,0.40);
    transition: all 100ms ease-in-out;
    cursor: pointer;
    user-select: none;
    
    &:active{
      opacity: 0.5;
    }
    
    span{
      color: #ffffff;
      font-size: 16px;
      font-weight: 600;
    }
  }
`;

export const Notification = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  transition: all 100ms ease-in-out;
  cursor: pointer;
  user-select: none; 
  margin-right: 50px; 
  position: relative;
  
  &:active{
    opacity: 0.5;
  }
  
  .badge{
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    border-radius: 7px;
    position: absolute;
    padding-left: 6px;
    padding-right: 6px;
    height: 14px;
    background-color: red;
    top: 0;
    right: 0;
    margin-right: -8px;  
    margin-top: -5px; 
  
    span{
      line-height: 10px;
      font-size: 10px;
      color: #ffffff;
      font-weight: 600;
      margin-top: 1px;
    }
  }
`;

export const NotificationMenu = styled.div`
  
`;
