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
