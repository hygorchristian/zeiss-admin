import React from 'react';
import { FiUsers, FiUser } from 'react-icons/fi';
import Clientes from './Clientes';
import Reclamacoes from './Reclamacoes';

export default [
  {
    label: 'Clientes',
    icon: FiUsers,
    path: 'clientes',
    component: Clientes,
  },
  {
    label: 'Reclamações',
    icon: FiUser,
    path: 'reclamacoes',
    component: Reclamacoes,
  },
];
