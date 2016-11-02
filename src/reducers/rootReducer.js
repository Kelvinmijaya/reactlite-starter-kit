import { combineReducers } from 'redux'
import { routerReducer as routing } from 'react-router-redux'
import { counter } from '../module/home'

export default combineReducers({
  counter,
  routing
})
