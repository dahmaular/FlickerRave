/* eslint-disable prettier/prettier */
import styled from "styled-components/native";
import { Button } from "react-native-paper";
import { TouchableOpacity } from "react-native";
import { TextInput } from "react-native";

import { colors } from "../../../structure/theme/colors";
import { Text } from "../../../components/typography/text.component";

export const WelcomeBackground = styled.ImageBackground.attrs({
  source: require("../../../../assets/delivery-man.jpg"),
})`
  ${'' /* flex: 1;
  align-items: center;
  justify-content: center; */}
  height:88%;
  align-items: center;
  justify-content: center;
`;

export const RegisterBackground = styled.ImageBackground.attrs({
    source: require("../../../../assets/bg.jpg"),
  })`
    flex: 1;
    align-items: center;
    justify-content: center;
  `;

export const WelcomeCover = styled.View`
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: rgba(255, 255, 255, 0.0);
`;

export const RegisterCover = styled.View`
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: rgba(255, 255, 255, 0.4);
`;

export const WelcomeContainer = styled.View`
  ${'' /* background-color: rgba(255, 255, 255, 0.7); */}
  padding: ${(props) => props.theme.space[3]};
  margin-top: ${(props) => props.theme.space[2]};
  flex-direction: row;
  align-items: center;
  align-self: center;
`;

export const RegisterContainer = styled.View`
  background-color: rgba(255, 255, 255, 0.9);
  ${'' /* padding: ${(props) => props.theme.space[4]}; */}
  margin-top: ${(props) => props.theme.space[3]};
  margin-bottom: ${(props) => props.theme.space[5]};
  height: 100%
`;

export const AuthButton = styled(Button).attrs({
  color: colors.bg.primary,
})`
  padding: ${(props) => props.theme.space[2]};
  width: 160px;
  border-radius: 10px;
  border-color: #000000;
  border-width: 2px;
  align-items: center;
  align-self: center;
`;

export const SignButton = styled(Button).attrs({
    color: colors.bg.login,
  })`
    padding: ${(props) => props.theme.space[2]};
    width: 100%;
    border-radius: 10px;
    border-color: #000000;
    border-width: 2px;
    align-items: center;
    align-self: center;
  `;

export const AuthInput = styled(TextInput)`
  width: 100%;
  border-width: 2px;
  height: 60px;
  padding: ${(props) => props.theme.space[3]};
`;

export const Title = styled(Text)`
  font-size: 30px;
  marginTop: ${(props) => props.theme.space[4]};
  padding: ${(props) => props.theme.space[2]};
`;

export const ErrorContainer = styled.View`
  max-width: 300px;
  align-items: center;
  align-self: center;
  margin-top: ${(props) => props.theme.space[2]};
  margin-bottom: ${(props) => props.theme.space[2]};
`;

export const AnimationWrapper = styled.View`
  width: 100%;
  height: 40%;
  position: absolute;
  top: 30px;
  padding: ${(props) => props.theme.space[2]};
`;

export const LinkText = styled(TouchableOpacity)`
    align-items: center;
`;
