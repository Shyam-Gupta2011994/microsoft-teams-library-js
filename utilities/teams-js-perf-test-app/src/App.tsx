import React, { ReactElement } from 'react';
import './App.css';
import { app } from '@microsoft/teamsjs-app-sdk';
import AppInitialization from './components/AppInitialization';

app.initialize();
app.notifyAppLoaded();
app.notifySuccess();

export const noHubSdkMsg = ' was called, but there was no response from the Hub SDK.';

const App = (): ReactElement => {
  return (
    <>
      <AppInitialization />
    </>
  );
};

export default App;