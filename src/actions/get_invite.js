import database from '../store/database'

export const GET_INVITE_REQUESTED = 'GET_INVITE_REQUESTED'
export const GET_INVITE_FULFILLED = 'GET_INVITE_FULFILLED'
export const GET_INVITE_REJECTED = 'GET_INVITE_REJECTED'

export function getInvite() {

  return dispatch => {

    dispatch(getInviteRequested())

    return database.ref('/').once('value', snap => {
      const invite = snap.val()
      dispatch(getInviteFulfilled(invite))
    })
      .catch( error => {
        console.log(error)
        dispatch(getInviteRejected())
      })
  }

}

function getInviteRequested() {
  return {
    type: GET_INVITE_REQUESTED
  }
}

function getInviteFulfilled(invite) {
  return {
    type: GET_INVITE_FULFILLED,
    invite
  }
}

function getInviteRejected() {
  return {
    type: GET_INVITE_REJECTED
  }
}