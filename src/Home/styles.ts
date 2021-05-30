import styled from 'styled-components/native';

import {widthPercentageToDP as wp} from 'react-native-responsive-screen';
import {ViewProps, StyleSheet} from 'react-native';

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
  width: 100%;
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
  /* background: red; */
  flex: 1;
`;

export const TxtButton = styled.Text`
  color: #fff;
`;

export const Txt = styled.Text`
  color: #fff;
  font-size: 16px;
`;

export const Flat = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent: 'center',
  },
});
