import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { withRouter } from 'react-router-dom';
import 'animate.css/animate.css';
import Animate from 'animate.css-react';

import {
 FiChevronDown, FiChevronLeft, FiMenu, FiBell
} from 'react-icons/fi';
import routes from '..';

import {
 Container, Content, Header, Main, Menu, MenuController, Open, MenuItem, Left, Right, ProfileMenu, Notification, NotificationMenu
} from './styles';
import { MenuActions } from '../../store/ducks/menu';

function Item({ route, aberto, selected }) {
  const Icon = route.icon;

  let color = '';

  if (aberto) {
    color = '#ffffff';
  } else if (`/${selected}` === route.path) {
    color = '#008BD0';
  } else {
    color = '#000000';
  }

  return (
    <MenuItem to={route.path} selected={`/${selected}` === route.path}>
      <Icon size={22} color={color} />
      {aberto && <span>{route.label}</span>}
    </MenuItem>
  );
}

function Dashboard({ children, history, match: { path } }) {
  const dispatch = useDispatch();
  const [profileOpen, setProfileOpen] = useState(false);
  const { back, notifications } = useSelector((state) => state.Header);
  const aberto = useSelector((state) => state.Menu.opened);

  const selected = path.split('/')[1];

  const fechar = () => {
    dispatch(MenuActions.menuSetOpen(false));
  };
  const abrir = () => {
    dispatch(MenuActions.menuSetOpen(true));
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
        { routes.map((route) => <Item aberto={aberto} route={route} selected={selected} />) }
      </Menu>
      <Main aberto={aberto}>
        <Header>
          <Left>
            {
              back && (
                <div onClick={() => history.push(back.route)}>
                  <FiChevronLeft size={20} />
                  <h3>{back.label}</h3>
                </div>
              )
            }

          </Left>
          <Right>
            <Notification>
              <FiBell size={20} />
              {
                notifications && (
                  <div className="badge">
                    <span>{notifications.count}</span>
                  </div>
                )
              }
            </Notification>
            <h3>Olá, Carl</h3>
            <img alt="Avatar" src="https://i.pinimg.com/236x/97/7a/e2/977ae2f909bb8f3389b3065287452b32.jpg" />
            <span onClick={() => setProfileOpen(!profileOpen)}>
              <FiChevronDown />
            </span>
            {profileOpen && (
            <Animate appear="flipInY" durationAppear={1000} leave="flipOutY" durationLeave={1000}>
              <ProfileMenu>
                <div className="item-menu">
                  <span>Editar Perfil</span>
                </div>
                <div className="item-menu">
                  <span>Minha Conta</span>
                </div>
                <div className="logout">
                  <span>Logout</span>
                </div>
              </ProfileMenu>
            </Animate>
            )}
          </Right>
        </Header>
        <Content>
          {children}
        </Content>
      </Main>
    </Container>
);
}

export default withRouter(Dashboard);
