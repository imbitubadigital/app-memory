import React from 'react';

import * as S from './styles';

export function Loading() {
  return (
    <S.ContainerLoading>
      <S.Load testID="loading-id" size="large" />
    </S.ContainerLoading>
  );
}
