import React, {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from 'react';

import {StorageContextData} from './interfaces';

import AsyncStorage from '@react-native-async-storage/async-storage';

const StorageContext = createContext<StorageContextData>(
  {} as StorageContextData,
);

const StorageProvider: React.FC = ({children}) => {
  const [ranking, setRanking] = useState(0);
  const [loadingStorage, setLoadingStorage] = useState(false);

  useEffect(() => {
    async function loadStorageData(): Promise<void> {
      setLoadingStorage(true);

      const rankingStorage = await AsyncStorage.getItem('@DEVMEMO:ranking');

      console.log('rankingStorage', rankingStorage);
      if (rankingStorage) {
        setRanking(Number(rankingStorage));
      }
      // if (token[1] && refreshData[1] && user[1] && firstExame[1]) {
      //   api.defaults.headers.Authorization = `Bearer ${token[1]}`;

      //   const parseUser = JSON.parse(user[1]);

      //   const storageData = {
      //     token: token[1],
      //     refreshData: JSON.parse(refreshData[1]),
      //     firstExame: JSON.parse(firstExame[1]).firstExame,
      //     isLogged: true,
      //     user: {
      //       ...parseUser,
      //       birthDate: parseISO(parseUser.birthDate),
      //     },
      //   };
      //   setData(storageData);
      // }
      setLoadingStorage(false);
    }

    loadStorageData();
  }, []);

  const settingStorageRanking = useCallback(
    async (currentRanking: number) => {
      await AsyncStorage.setItem('@DEVMEMO:ranking', String(currentRanking));

      setRanking(currentRanking);
    },

    [],
  );

  return (
    <StorageContext.Provider
      value={{
        settingStorageRanking,
        ranking,
        loadingStorage,
      }}>
      {children}
    </StorageContext.Provider>
  );
};

function useStorage(): StorageContextData {
  const context = useContext(StorageContext);
  return context;
}
export {StorageProvider, useStorage};
