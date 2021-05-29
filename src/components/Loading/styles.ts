import styled from 'styled-components/native';

export const ContainerLoading = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background: #343746;
`;

export const Load = styled.ActivityIndicator.attrs(() => ({
  color: '#12b4aa',
}))``;
