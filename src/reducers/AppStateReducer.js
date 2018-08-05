import { EDIT_ON, EDIT_OFF } from '../constants'

const AppStateReducer = (state = { isEditing: false }, action) => {
  switch(action.type) {
    case EDIT_ON:
      return {
        ...state,
        isEditing: true
      }
    case EDIT_OFF:
      return {
        ...state,
        isEditing: false
      }
    default:
      return state
  }
}

export default AppStateReducer
