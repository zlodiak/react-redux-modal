import { connect } from "react-redux";
import { setModalVisibilityCreator, setModalTextCreator } from '../../redux/appReducer';

import Page2 from './Page2';

const mapStateToProps = state => {
  return {
    isVisibleModal: state.appReducer.isVisibleModal,
  }
}

export default connect(mapStateToProps, { setModalVisibilityCreator, setModalTextCreator })(Page2);