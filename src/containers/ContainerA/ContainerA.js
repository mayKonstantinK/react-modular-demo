import React from "react";
import { Region } from 'frint-react';
import { createApp } from 'frint';
import {Alert} from 'react-bootstrap';

import App from './a-app/src/App';

function ContainerA() {
  return (
    <div className="Container">
      <Alert variant="danger">Container A</Alert>
      <Region name="AppA" />
    </div>
  );
}

const AppA = createApp({
  name: 'AppA',
  providers: [
    {
      name: 'component',
      useValue: App,
    },
  ],
});

window.app.registerApp(AppA, {
  regions: ['AppA'], // name of regions to target
  weight: 10, // the lower the number, the higher they would appear
});

export default ContainerA;
