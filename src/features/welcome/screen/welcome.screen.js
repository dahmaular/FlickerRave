/* eslint-disable prettier/prettier */
import React from "react";
import { TouchableOpacity} from "react-native";

import { Spacer } from "../../../components/spacer/spacer.component";
import { FadeInView } from "../../../components/animations/fade.animations";
import {
  WelcomeBackground,
  WelcomeCover,
  WelcomeContainer,
  AuthButton,
  Title,
  AnimationWrapper,
} from "../components/welcome.styles";

export const WelcomeScreen = ({ navigation }) => {
  return (
      <>
    <WelcomeBackground>
      <WelcomeCover />
      </WelcomeBackground>
      <WelcomeContainer>
      <TouchableOpacity 
      onPress={() => navigation.navigate("Login")}>
        <AuthButton
          icon="lock-open-outline"
          mode="contained"
          
          elevation={5}
        >
          Login
        </AuthButton>
        </TouchableOpacity>
        <Spacer position="left" size="large" />
        <TouchableOpacity 
        onPress={() => navigation.navigate("Register")}>
          <AuthButton
            icon="email"
            mode="contained"
            
          >
            Register
          </AuthButton>
          </TouchableOpacity>
      </WelcomeContainer>
     
    </>
  );
};
