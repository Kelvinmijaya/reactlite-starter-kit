import { combineReducers } from 'redux'
import { routerReducer as routing } from 'react-router-redux'
import { home } from '../module/home'

export default combineReducers({
  home,
  routing
})
