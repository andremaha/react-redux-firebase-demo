import { combineReducers } from 'redux'
import InviteReducer  from './invite_reducer'

const rootReducer = combineReducers({
  invite: InviteReducer
})

export default rootReducer