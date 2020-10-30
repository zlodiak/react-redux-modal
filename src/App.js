import './App.css';
import { BrowserRouter, Route } from "react-router-dom";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

import Page1smart from './components/page1/Page1smart';
import Page2smart from './components/page2/Page2smart';
import ModalSmart from './components/modal/ModalSmart';

function App(props) {
  return (
    <BrowserRouter>
      <div className="App">
        <header className="header">
          <Link to="/page1">Page1</Link>
          <Link to="/page2">Page2</Link>
        </header>
        <main>
          <Route exact path='/'       render={ () => <Page1smart/> }/>
          <Route exact path='/page1'  render={ () => <Page1smart/> }/>
          <Route exact path='/page2'  render={ () => <Page2smart/> }/>
        </main>
      </div>
      { props.isVisibleModal &&  <ModalSmart/> }
    </BrowserRouter>
  );

}

const mapStateToProps = state => {
  return {
    isVisibleModal: state.appReducer.isVisibleModal,
  }
}  

export default connect(mapStateToProps, {})(App);
