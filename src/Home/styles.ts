import styled from 'styled-components/native';

import {widthPercentageToDP as wp} from 'react-native-responsive-screen';
import {TouchableOpacityProps} from 'react-native';

const colors: any = {
  1: '#6C117B',
  2: '#F8C304',
  3: '#0182B0',
  4: '#FF329D',
  5: '#eda63c',
  6: '#04558A',
  7: '#96F550',
  8: '#c0c0fc',
  9: '#Ff0033',
  10: '#343746',
};

export const Container = styled.SafeAreaView`
  flex: 1;
  background: #21222c;
  justify-content: center;
  align-items: center;
`;

export const Header = styled.View`
  width: ${wp('90%')}px;
  background: #343746;
  justify-content: center;
  align-items: center;
  margin-bottom: 20px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: ${wp('5%')}px;
`;

export const BtnStart = styled.TouchableOpacity`
  background: #586e97;
  justify-content: center;
  align-items: center;
  justify-content: center;
  align-items: center;
  padding: ${wp('5%')}px;
  border-radius: 5px;
`;

export const TxtBtn = styled.Text`
  color: #fff;
  font-size: 18px;
`;

export const Player = styled.View`
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: ${wp('90%')}px;
`;

interface PropsBtn extends TouchableOpacityProps {
  bg: number;
}

export const Button = styled.TouchableOpacity<PropsBtn>`
  background: ${props => colors[props.bg]};
  width: ${wp('13%')}px;
  padding: ${wp('13%')}px;
  margin: ${wp('2%')}px;
  border-radius: 5px;
`;

export const Txt = styled.Text``;
