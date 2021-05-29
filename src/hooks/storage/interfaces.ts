export interface StorageContextData {
  ranking: number;
  loadingStorage: boolean;
  settingStorageRanking: (currentRanking: number) => Promise<void>;
}
