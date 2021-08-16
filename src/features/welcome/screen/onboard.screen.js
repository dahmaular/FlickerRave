/* eslint-disable prettier/prettier */
import React, { useEffect } from "react";
import styled from "styled-components/native";

import { Spacer } from "../../../components/spacer/spacer.component";
import { FadeInView } from "../../../components/animations/fade.animations";
import {
  WelcomeCover,
  WelcomeContainer,
  AuthButton,
  Title,
  AnimationWrapper,
} from "../components/welcome.styles";
import { SafeAreaBlackBG } from "../../../components/utility/safe-area.component";


const WelcomeBackground = styled.ImageBackground.attrs({
    source: require("../../../../assets/splash.jpeg"),
  })`
    height:80%;
    align-items: center;
    justify-content: center;
    align-content: center;
    margin-top: 30%
  `;
const TextView = styled.View`
    flex:1;
    align-items: center;
`;

export const OnboardScreen = ({ navigation }) => {

    useEffect(() => {
        setTimeout(() => {
            navigation.push("Welcome");
        }, 2000);
    }, [])
  return (
      <SafeAreaBlackBG>
      <FadeInView>
    <WelcomeBackground>
      <WelcomeCover>
      </WelcomeCover>
      </WelcomeBackground>
      </FadeInView>     
    </SafeAreaBlackBG>
  );
};
