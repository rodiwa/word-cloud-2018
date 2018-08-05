import { connect } from "react-redux";
import { bindActionCreators } from 'redux'
import AddNewInput from '../components/AddNewInput'
import { startEditing, stopEditing } from '../actions/AppStateActions'

const mapStateToProps = state => {
  return {
    isEditing: state.app.isEditing
  }
}

const mapDispatchToProps = dispatch => {
  return {
    startEditing: bindActionCreators(startEditing, dispatch),
    stopEditing: bindActionCreators(stopEditing, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AddNewInput)
