import { GET_INVITE_FULFILLED } from '../actions/get_invite'
import { ADD_GUEST_FULFILLED, ADDED_GUEST_FROM_DB } from '../actions/add_guests'

export default function InviteReducer(state = {}, action) {

  switch(action.type) {

    case GET_INVITE_FULFILLED:
      return action.invite

    case ADD_GUEST_FULFILLED:
      return state

    case ADDED_GUEST_FROM_DB:
      return state

    default:
      return state
  }

}