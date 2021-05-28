import React, {useCallback, useEffect, useState} from 'react';

import * as S from './styles';

// import {} from './interfaces';

export function Home() {
  const [bgBtn, setBgBtn] = useState(10);
  const [machineData, setMachineData] = useState<number[]>([]);
  const [playerData, setPlayerData] = useState<number[]>([]);
  const [disabled, setDisabled] = useState(true);

  useEffect(() => {
    if (machineData.length > 0) {
      setDisabled(true);
      for (let i = 0; i <= machineData.length; i++) {
        setTimeout(function () {
          setBgBtn(i !== machineData.length ? machineData[i] : 10);
          setDisabled(i !== machineData.length ? true : false);
        }, i * 600);
      }
    }
  }, [machineData]);

  const playMachine = useCallback(() => {
    setPlayerData([]);
    const value = Math.floor(Math.random() * 9) + 1;
    setMachineData(state => [...state, value]);
  }, []);

  useEffect(() => {
    if (playerData.length > 0 && playerData.length === machineData.length) {
      if (playerData.every((item, index) => item === machineData[index])) {
        setDisabled(true);
        setTimeout(() => {
          setBgBtn(10);
        }, 1000);

        setTimeout(() => {
          playMachine();
        }, 2000);
      } else {
        setBgBtn(10);
        setDisabled(true);
        setMachineData([]);
        setPlayerData([]);

        console.log('errou arrombado');
      }
    }
  }, [playerData, machineData, playMachine]);

  const handleClick = useCallback(value => {
    setBgBtn(value);
    setPlayerData(state => [...state, value]);
  }, []);
  const handleReset = useCallback(() => {
    setBgBtn(10);
    setMachineData([]);
    setPlayerData([]);
    setDisabled(true);
  }, []);

  return (
    <S.Container>
      <S.Header>
        <S.BtnStart onPress={playMachine}>
          <S.TxtBtn>Start</S.TxtBtn>
        </S.BtnStart>
        <S.BtnStart onPress={handleReset}>
          <S.TxtBtn>Reset</S.TxtBtn>
        </S.BtnStart>
      </S.Header>
      <S.Player>
        <S.Button
          bg={bgBtn === 1 ? 1 : 10}
          disabled={disabled}
          onPress={() => handleClick(1)}
        />
        <S.Button
          bg={bgBtn === 2 ? 2 : 10}
          disabled={disabled}
          onPress={() => handleClick(2)}
        />
        <S.Button
          bg={bgBtn === 3 ? 3 : 10}
          disabled={disabled}
          onPress={() => handleClick(3)}
        />
        <S.Button
          bg={bgBtn === 4 ? 4 : 10}
          disabled={disabled}
          onPress={() => handleClick(4)}
        />
        <S.Button
          bg={bgBtn === 5 ? 5 : 10}
          disabled={disabled}
          onPress={() => handleClick(5)}
        />
        <S.Button
          bg={bgBtn === 6 ? 6 : 10}
          disabled={disabled}
          onPress={() => handleClick(6)}
        />
        <S.Button
          bg={bgBtn === 7 ? 7 : 10}
          disabled={disabled}
          onPress={() => handleClick(7)}
        />
        <S.Button
          bg={bgBtn === 8 ? 8 : 10}
          disabled={disabled}
          onPress={() => handleClick(8)}
        />
        <S.Button
          bg={bgBtn === 9 ? 9 : 10}
          disabled={disabled}
          onPress={() => handleClick(9)}
        />
      </S.Player>
    </S.Container>
  );
}
