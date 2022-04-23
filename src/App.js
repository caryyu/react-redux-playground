import logo from './logo.svg';
import './App.css';
import {connect} from 'react-redux';

// Proactive of mapDispatchToProps
const ReduxButton = connect(null, (dispatch) => {
  return {
    onAddClicked: () => {
      dispatch({
        type: 'add'
      });
    }
  }
})((props) => {
  return (
    <button onClick={props.onAddClicked}>+</button>
  )
});

// Passive of mapStateToProps
const ReduxText = connect((state) => {
  return state;
})((props) => {
  return (
    <p>{props.count}</p>
  )
});

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <ReduxButton />
        <ReduxText />
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
