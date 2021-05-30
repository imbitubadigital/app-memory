import React, {memo, useMemo, useState} from 'react';
import {Dimensions} from 'react-native';
import * as S from './styles';

import {PropsButton} from './interfaces';

function ButtonItem({bgBtn, indexItem, onClick, disabled, tech}: PropsButton) {
  const [dynamicHeight, setDynamicHeight] = useState(
    Dimensions.get('window').width / 3,
  );
  const i = useMemo(() => {
    return indexItem + 1;
  }, [indexItem]);
  return (
    <S.Button
      onLayout={event => {
        setDynamicHeight(event.nativeEvent.layout.width);
      }}
      dynamicHeight={dynamicHeight}
      bg={bgBtn === i ? i : 10}
      disabled={disabled}
      onPress={() => onClick(i)}>
      {bgBtn === i && <S.Txt>{tech}</S.Txt>}
    </S.Button>
  );
}

const Button = memo(ButtonItem);

export default Button;
