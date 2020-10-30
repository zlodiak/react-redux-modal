import { connect } from "react-redux";
import { setModalVisibilityCreator } from '../../redux/appReducer';

import Modal from './Modal';

const mapStateToProps = state => {
  return {
    textModal: state.appReducer.textModal,
  }
}

export default connect(mapStateToProps, { setModalVisibilityCreator })(Modal);