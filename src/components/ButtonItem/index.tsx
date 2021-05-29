import React, {memo, useMemo} from 'react';

import * as S from './styles';

import {PropsButton} from './interfaces';

function ButtonItem({bgBtn, indexItem, onClick, disabled, tech}: PropsButton) {
  const i = useMemo(() => {
    return indexItem + 1;
  }, [indexItem]);
  return (
    <S.Button
      bg={bgBtn === i ? i : 10}
      disabled={disabled}
      onPress={() => onClick(i)}>
      {bgBtn === i && <S.Txt>{tech}</S.Txt>}
    </S.Button>
  );
}

const Button = memo(ButtonItem);

export default Button;
