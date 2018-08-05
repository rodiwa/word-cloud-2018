import { combineReducers } from 'redux'
import AppStateReducer from './AppStateReducer'

export default combineReducers({
  app: AppStateReducer
})
