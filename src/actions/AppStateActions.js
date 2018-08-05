import { EDIT_ON, EDIT_OFF } from '../constants'

export const startEditing = () => ({ type: EDIT_ON })
export const stopEditing = () => ({ type: EDIT_OFF })
