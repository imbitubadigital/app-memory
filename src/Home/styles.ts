import styled from 'styled-components/native';

import {widthPercentageToDP as wp} from 'react-native-responsive-screen';
import {TouchableOpacityProps, ViewProps} from 'react-native';

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
  justify-content: space-between;
  align-items: center;
`;
export const Content = styled.View`
  flex: 1;
  background: #21222c;
  justify-content: center;
  align-items: center;
`;

export const Header = styled.View`
  width: 100%;
  height: 100px;

  justify-content: center;
  align-items: flex-start;
`;

export const Logo = styled.Image`
  height: 50px;
`;

export const Control = styled.View`
  width: ${wp('90%')}px;
  background: #343746;
  justify-content: center;
  align-items: center;
  margin: 10px 0 5px;
  flex-direction: row;
  border-radius: 5px;
  justify-content: space-between;
  align-items: center;
  padding: ${wp('3%')}px;
`;

export const Points = styled.View`
  width: ${wp('90%')}px;

  justify-content: center;
  align-items: center;
  flex-direction: row;
  border-radius: 5px;
  justify-content: space-between;
  align-items: center;
  padding: ${wp('2%')}px;
`;

export const BoxScore = styled.View`
  width: ${wp('40%')}px;
  justify-content: center;
  align-items: center;
`;

export const Title = styled.Text`
  color: #fff;
  font-size: 16px;
  margin-bottom: 5px;
`;

export const PointsValue = styled.Text`
  color: #fff;
  font-size: 22px;
`;

export const BtnStart = styled.TouchableOpacity`
  background: #12b4aa;
  justify-content: center;
  align-items: center;
  justify-content: center;
  align-items: center;
  padding: ${wp('5%')}px;
  border-radius: 5px;
  width: ${wp('40%')}px;
  opacity: ${props => (props.disabled ? 0.4 : 1)};
`;

interface PropsBtnTxt extends ViewProps {
  disabled?: boolean;
}

export const TxtBtn = styled.Text<PropsBtnTxt>`
  color: #fff;
  font-size: 18px;
  opacity: ${props => (props.disabled ? 0.4 : 1)};
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
  width: ${wp('26%')}px;
  height: ${wp('26%')}px;
  margin: ${wp('2%')}px;
  border-radius: 5px;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export const Txt = styled.Text`
  color: #fff;
  font-size: 16px;
`;
export const TxtButton = styled.Text`
  color: #fff;
`;
