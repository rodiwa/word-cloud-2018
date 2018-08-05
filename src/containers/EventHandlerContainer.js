import { connect } from "react-redux";
import { bindActionCreators } from 'redux'
import EventHandlerComponent from '../components/EventHandlerComponent'
import { startEditing, stopEditing } from '../actions/AppStateActions'

const mapDispatchToProps = dispatch => {
  return {
    startEditing: bindActionCreators(startEditing, dispatch),
    stopEditing: bindActionCreators(stopEditing, dispatch)
  }
}

export default connect(null, mapDispatchToProps)(EventHandlerComponent)
