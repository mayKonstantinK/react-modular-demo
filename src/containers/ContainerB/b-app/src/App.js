import React from 'react';
import logo from './logo.svg';
import './App.scss';
import Button from 'react-bootstrap/Button';

import {incrementCounter, decrementCounter} from '../../../ModulesTest/redux';
import connect from './connector';

function App(props) {
  return (
    <div className="App">
      <header className="App-header">
        <div className="Counter">
          <Button variant="success" onClick={() => props.incrementCounter()}>+</Button>
          <div className="value">{props.counterValue}</div>
          <Button variant="success" onClick={() => props.decrementCounter()}>-</Button>
        </div>

        <img src={logo} className="App-logo" alt="logo" />
        <p>
          App B
        </p>
      </header>
    </div>
  );
}

const mapStateToProps = state => {
  return {
    counterValue: state.counter.value
  }
}

export default connect(mapStateToProps, {
  incrementCounter,
  decrementCounter
})(App);
