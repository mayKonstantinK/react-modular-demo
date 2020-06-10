import React, { Suspense } from "react";
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Button from 'react-bootstrap/Button';
import { Route, Switch, Redirect, useLocation } from "react-router-dom";
import ContainerA from "containers/ContainerA";
import ContainerB from "containers/ContainerB";
import ContainerC from "containers/ContainerC";

import {incrementCounter, decrementCounter} from './redux';

function ModulesTest(props) {
  let match = props.match;
  let location = useLocation();
  let locationName = location.pathname.match(/[a-zA-Z]+/g).toString();

  return (
  <Suspense fallback={<div className="loading" />}>
    <Navbar bg="primary" variant="dark">
      <Navbar.Brand href="a">Navbar</Navbar.Brand>
      <Nav className="mr-auto" activeKey={locationName}>
        <Nav.Link as={Link} to={`${match.url}/containerA`}>Container A</Nav.Link>
        <Nav.Link as={Link} to={`${match.url}/containerB`}>Container B</Nav.Link>
        <Nav.Link as={Link} to={`${match.url}/containerC`}>Container C</Nav.Link>
      </Nav>
    </Navbar>

    <div className="Counter">
      <Button variant="primary" onClick={() => props.incrementCounter()}>+</Button>
      <div className="value">{props.counterValue}</div>
      <Button variant="primary" onClick={() => props.decrementCounter()}>-</Button>
    </div>

    <Switch>
      <Route
        path={`${match.url}/containerA`}
        render={(props) => <ContainerA {...props} />}
      />
      <Route
        path={`${match.url}/containerB`}
        render={(props) => <ContainerB {...props} />}
      />
      <Route
        path={`${match.url}/containerC`}
        render={(props) => <ContainerC {...props} />}
      />
    </Switch>
  </Suspense>
  );
}

const mapStateToProps = state => {
  return {
    counterValue: state.counter.value
  }
}

const mapDispatchToProps = dispatch => {
  return {
    incrementCounter: () => {
      dispatch(incrementCounter())
    },
    decrementCounter: () => {
      dispatch(decrementCounter())
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ModulesTest);