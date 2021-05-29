import React from 'react';
import {useStorage} from './hooks/storage';
import {Loading} from './components/Loading';
import {Home} from './Home';

export function Main() {
  const {loadingStorage} = useStorage();

  if (loadingStorage) {
    return <Loading />;
  }

  return <Home />;
}
