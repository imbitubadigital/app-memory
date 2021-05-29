import React, {useCallback, useEffect, useState} from 'react';
import logo from '../assets/logo.png';
import SoundPlayer from 'react-native-sound-player';
import * as S from './styles';
import {dataTechs} from '../utils/dataTechs';
import {shuffle} from '../utils/shuffle';
import {useStorage} from '../hooks/storage';
import Button from '../components/ButtonItem';

export function Home() {
  const {ranking, settingStorageRanking} = useStorage();
  const [bgBtn, setBgBtn] = useState(10);
  const [machineData, setMachineData] = useState<number[]>([]);
  const [playerData, setPlayerData] = useState<number[]>([]);
  const [disabled, setDisabled] = useState(true);
  const [currentRanking, setCurrentRanking] = useState(0);

  const [disabledStart, setDisabledStart] = useState(false);
  const [techs, setTechs] = useState(dataTechs);

  useEffect(() => {
    if (ranking < currentRanking) {
      settingStorageRanking(currentRanking);
    }
  }, [currentRanking, ranking, settingStorageRanking]);

  const handlePlayerAudio = useCallback((audio: string) => {
    try {
      SoundPlayer.setVolume(60);
      SoundPlayer.playSoundFile(audio, 'mp3');
    } catch (e) {
      // console.log('cannot play the sound file', e);
    }
  }, []);

  const handleReset = useCallback(() => {
    setTechs(shuffle(dataTechs));
    setCurrentRanking(0);
    setBgBtn(10);
    setMachineData([]);
    setPlayerData([]);
    setDisabled(true);
    setDisabledStart(false);
  }, []);

  useEffect(() => {
    if (machineData.length > 0) {
      setDisabled(true);
      for (let i = 0; i <= machineData.length; i++) {
        setTimeout(() => {
          setBgBtn(i !== machineData.length ? machineData[i] : 10);
          setDisabled(i !== machineData.length ? true : false);
          if (i !== machineData.length) {
            handlePlayerAudio(String(`note${machineData[i]}`));
          }
        }, i * 600);
      }
    }
  }, [machineData, handlePlayerAudio]);

  const playMachine = useCallback(() => {
    setDisabledStart(true);
    setPlayerData([]);
    while (true) {
      let value = Math.floor(Math.random() * 9) + 1;
      if (value === machineData[machineData.length]) {
        return true;
      } else {
        setMachineData(state => [...state, value]);
        return false;
      }
    }
  }, [machineData]);

  useEffect(() => {
    if (playerData.length > 0 && playerData.length === machineData.length) {
      if (playerData.every((item, index) => item === machineData[index])) {
        setDisabled(true);
        setTimeout(() => {
          setBgBtn(10);
        }, 1000);
        setTimeout(() => {
          setCurrentRanking(state => state + 1);
          playMachine();
        }, 1000);
      }
    }
  }, [playerData, machineData, playMachine, handlePlayerAudio, handleReset]);

  const handleClick = useCallback(
    value => {
      if (machineData[playerData.length] === value) {
        setBgBtn(value);
        setPlayerData(state => [...state, value]);
        handlePlayerAudio(String(`note${value}`));
      } else {
        handleReset();
        const handelVoz = Math.floor(Math.random() * 9) + 1;
        handlePlayerAudio(String(String(`voz${handelVoz}`)));
      }
    },
    [handlePlayerAudio, machineData, playerData, handleReset],
  );

  return (
    <S.Container>
      <S.Header>
        <S.Logo source={logo} resizeMode="contain" />
      </S.Header>

      <S.Content>
        <S.Points>
          <S.BoxScore>
            <S.Title>{String('<Score />')}</S.Title>
            <S.PointsValue>{currentRanking}</S.PointsValue>
          </S.BoxScore>
          <S.BoxScore>
            <S.Title>{String('<Ranking />')}</S.Title>
            <S.PointsValue>{ranking}</S.PointsValue>
          </S.BoxScore>
        </S.Points>
        <S.Control>
          <S.BtnStart onPress={playMachine} disabled={disabledStart}>
            <S.TxtBtn disabled={disabledStart}>Start</S.TxtBtn>
          </S.BtnStart>
          <S.BtnStart onPress={handleReset}>
            <S.TxtBtn>Reset</S.TxtBtn>
          </S.BtnStart>
        </S.Control>

        <S.Player>
          {techs.map((tech, index) => (
            <Button
              key={String(index)}
              bgBtn={bgBtn}
              indexItem={index}
              onClick={handleClick}
              disabled={disabled}
              tech={tech}
            />
          ))}
        </S.Player>
      </S.Content>
    </S.Container>
  );
}
