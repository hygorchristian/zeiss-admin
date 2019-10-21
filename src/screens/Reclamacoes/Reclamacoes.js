import React, { useEffect } from 'react';

import { useDispatch } from 'react-redux';
import { Container } from './styles';
import { HeaderActions } from '../../store/ducks/header';

function Reclamacoes() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(HeaderActions.headerSetBack(null));
  }, []);

  return <Container />;
}

export default Reclamacoes;
