import React, {ReactNode} from 'react';

import {StorageProvider} from './storage';

interface AppProviderProps {
  children: ReactNode;
}

export function AppProvider({children}: AppProviderProps) {
  return <StorageProvider>{children}</StorageProvider>;
}
