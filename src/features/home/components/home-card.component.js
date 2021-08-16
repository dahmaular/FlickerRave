import { StatusBar, SafeAreaView } from "react-native";
import styled from "styled-components/native";
import { List, Card } from "react-native-paper";

export const HomeCardContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
  padding: ${(props) => props.theme.space[2]};
  ${'' /* margin-top: ${(props) => props.theme.space[1]}; */}
`;

export const HomeCard = styled(Card)`
  background-color: ${(props) => props.theme.colors.bg.primary};
  align-self: center;
  border-radius: 10px;
  width: 49%;
  padding: ${(props) => props.theme.space[1]};
  justify-content: center;
`;

export const HomeSafeArea = styled(SafeAreaView)`
flex:1;
  ${StatusBar.currentHeight && `margin-top: ${StatusBar.currentHeight}px`};
  background-color: ${(props) => props.theme.colors.bg.primary};]};
`;
