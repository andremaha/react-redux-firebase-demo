import database from '../store/database'
import { getInvite } from './get_invite'

export const ADD_GUEST_REQUESTED = 'ADD_GUEST_REQUESTED'
export const ADD_GUEST_FULFILLED = 'ADD_GUEST_FULFILLED'
const ADD_GUEST_REJECTED = 'ADD_GUEST_REJECTED'
export const ADDED_GUEST_FROM_DB = 'ADDED_GUEST_FROM_DB,'

export function addGuest(name) {

  return dispatch => {

    dispatch(addGuestRequested())

    const guestsRef = database.ref('/guests')

    guestsRef.push({
      name
    })
      .then(() => {
        dispatch(addGuestFulfilled({ name }))
        dispatch(getInvite())
      })
      .catch( error => {
        console.log(error)
        addGuestRejected()
      })
  }

}

export function watchGuestAddedEvent(dispatch) {
  database.ref('/guests').on('value', snap => {
    dispatch(guestAddedAction(snap.val()))
    dispatch(getInvite())
  })
}

function guestAddedAction(guest) {
  return {
    type: ADDED_GUEST_FROM_DB,
    guest
  }
}

function addGuestRequested() {
  return {
    type: ADD_GUEST_REQUESTED
  }
}

function addGuestFulfilled(guest) {
  return {
    type: ADD_GUEST_FULFILLED,
    guest
  }
}

function addGuestRejected() {
  return {
    type: ADD_GUEST_REJECTED
  }
}