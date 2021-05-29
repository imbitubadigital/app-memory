import React from 'react';
import {AppProvider} from './hooks';
import {StatusBar} from 'react-native';

import {Main} from './Main';

export default function App() {
  return (
    <AppProvider>
      <StatusBar animated={true} backgroundColor="#61dafb" hidden={true} />
      <Main />
    </AppProvider>
  );
}
