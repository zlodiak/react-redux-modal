import { connect } from "react-redux";
import { setModalVisibilityCreator, setModalTextCreator } from '../../redux/appReducer';

import Page1 from './Page1';

const mapStateToProps = state => {
  return {
    isVisibleModal: state.appReducer.isVisibleModal,
  }
}

export default connect(mapStateToProps, { setModalVisibilityCreator, setModalTextCreator })(Page1);