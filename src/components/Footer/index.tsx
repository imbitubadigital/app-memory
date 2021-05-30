import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import * as S from './styles';

import {PropsFooter} from './interfaces';

export function Footer({
  currentRanking,
  ranking,
  play,
  reset,
  disabled,
}: PropsFooter) {
  return (
    <S.Container>
      <S.Score>
        <Icon name="star" size={36} color="#F8C304" />
        <S.ScoreValue>{currentRanking}</S.ScoreValue>
        <S.Label>Score</S.Label>
      </S.Score>

      <S.Action onPress={disabled ? reset : play}>
        <S.Btn isPlay={disabled}>
          <Icon
            name={!disabled ? 'play-arrow' : 'stop'}
            size={40}
            color="#fff"
          />
        </S.Btn>
        <S.TxtBtn>{!disabled ? 'Start' : 'Stop'}</S.TxtBtn>
      </S.Action>

      <S.Score>
        <Icon name="stars" size={36} color="#F8C304" />
        <S.ScoreValue>{ranking}</S.ScoreValue>
        <S.Label>Ranking</S.Label>
      </S.Score>
    </S.Container>
  );
}
