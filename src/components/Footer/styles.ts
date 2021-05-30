import styled from 'styled-components/native';
import {widthPercentageToDP as wp} from 'react-native-responsive-screen';
import {ViewProps} from 'react-native';

export const Container = styled.View`
  width: 100%;
  padding: ${wp('3%')}px;
  flex-direction: row;
  justify-content: space-around;
  align-items: flex-end;
`;

export const Action = styled.TouchableOpacity`
  padding: ${wp('0.5%')}px ${wp('3%')}px;
  justify-content: center;
  align-items: center;
`;

interface PropsBtn extends ViewProps {
  isPlay: boolean;
}

export const Btn = styled.View<PropsBtn>`
  padding: ${wp('3%')}px;
  justify-content: center;
  align-items: center;
  background: #12b4aa;
  width: 60px;
  height: 60px;
  border-radius: 30px;
  margin-bottom: 5px;
  opacity: ${props => (props.isPlay ? 0.5 : 1)};
`;

export const TxtBtn = styled.Text`
  color: #fff;
  font-size: 14px;
`;

export const Score = styled.View`
  padding: ${wp('0.5%')}px ${wp('3%')}px;
  justify-content: center;
  align-items: center;
`;

export const ScoreValue = styled.Text`
  color: #fff;
  font-size: 18px;
  margin: 3px 0;
`;

export const Label = styled.Text`
  color: #fff;
  font-size: 12px;
`;
