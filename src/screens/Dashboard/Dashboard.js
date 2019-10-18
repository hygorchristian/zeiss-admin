import React, { useState } from 'react';
import { Switch, Route } from 'react-router-dom';
import { FiChevronDown, FiChevronLeft, FiMenu } from 'react-icons/fi';
import routes from '..';

import {
 Container, Content, Header, Main, Menu, MenuController, Open, MenuItem
} from './styles';

function Item({ route, aberto }) {
  const Icon = route.icon;

  return (
    <MenuItem to={route.path}>
      <Icon size={22} color={aberto ? '#ffffff' : '#000000'} />
      {aberto && <span>{route.label}</span>}
    </MenuItem>
  );
}

function Dashboard({ children }) {
  const [aberto, setAberto] = useState(true);

  const fechar = () => {
    setAberto(false);
  };
  const abrir = () => {
    setAberto(true);
  };

  return (
    <Container aberto={aberto}>
      <Menu aberto={aberto}>
        <MenuController aberto={aberto}>
          <img src="/icons/logo.svg" alt="Logo" />
          {aberto && (
            <span onClick={fechar}>
              <FiChevronLeft size={20} color="#ffffff" />
            </span>
          )}
        </MenuController>
        <Open onClick={abrir}>
          {!aberto && <FiMenu size={20} color={aberto ? '#ffffff' : '#000000'} />}
        </Open>
        { routes.map((route) => <Item aberto={aberto} route={route} />) }
      </Menu>
      <Main aberto={aberto}>
        <Header>
          <h3>Olá, Carl</h3>
          <img alt="Avatar" src="https://i.pinimg.com/236x/97/7a/e2/977ae2f909bb8f3389b3065287452b32.jpg" />
          <span>
            <FiChevronDown />
          </span>
        </Header>
        <Content>
          {children}
        </Content>
      </Main>
    </Container>
);
}

export default Dashboard;
