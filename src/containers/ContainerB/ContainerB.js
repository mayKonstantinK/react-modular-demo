import React from "react";
import { Region } from 'frint-react';
import { createApp } from 'frint';
import {Alert} from 'react-bootstrap';

import App from './b-app/src/App';

function ContainerB() {
  return (
    <div className="Container">
      <Alert variant="success">Container B</Alert>
      <Region name="AppB" />
    </div>
  );
}

const AppB = createApp({
  name: 'AppB',
  providers: [
    {
      name: 'component',
      useValue: App,
    }
  ],
});

window.app.registerApp(AppB, {
  regions: ['AppB'], // name of regions to target
  weight: 10, // the lower the number, the higher they would appear
});

export default ContainerB;
