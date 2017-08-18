import { connect } from 'react-redux'
import Invite from '../components/invite'
import { getInvite } from '../actions/get_invite'
import {addGuest, watchGuestAddedEvent} from '../actions/add_guests'

function mapStateToProps(state) {
  return {
    invite: state.invite
  }
}

function mapDispatchToProps(dispatch) {
  watchGuestAddedEvent(dispatch)
  return {
    onGetInvite: () => dispatch(getInvite()),
    onAddToInvite: (name) => dispatch(addGuest(name))
  }
}

const inviteContainer = connect(mapStateToProps, mapDispatchToProps)(Invite)

export default inviteContainer