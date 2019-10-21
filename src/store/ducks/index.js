import { combineReducers } from 'redux';

import { AuthReducer as Auth } from './auth';
import { HeaderReducer as Header } from './header';

export default combineReducers({
  Auth,
  Header
});
