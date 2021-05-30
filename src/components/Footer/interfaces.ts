export interface PropsFooter {
  currentRanking: number;
  ranking: number;
  play: () => void;
  reset: () => void;
  disabled: boolean;
}
