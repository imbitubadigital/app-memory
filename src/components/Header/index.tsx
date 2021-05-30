import React from 'react';
import logo from '../../assets/logo.png';
import * as S from './styles';

export function Header() {
  return (
    <S.Container>
      <S.Logo source={logo} resizeMode="contain" />
    </S.Container>
  );
}
