import { connect } from 'react-redux'
import Invite from '../components/invite'

function mapStateToProps(state) {
  return {
    invite: state.invite
  }
}

function mapDispatchToProps(dispatch) {
  return {

  }
}

const inviteContainer = connect(mapStateToProps, mapDispatchToProps)(Invite)

export default inviteContainer