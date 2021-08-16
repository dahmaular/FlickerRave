import React, { useState, useContext } from "react";

import { AntDesign } from "@expo/vector-icons";
import { ActivityIndicator, Colors } from "react-native-paper";
import styled from "styled-components/native";

import {
  RegisterCover,
  RegisterContainer,
  SignButton,
  AuthInput,
  Title,
  ErrorContainer,
  LinkText,
} from "../components/welcome.styles";
import { Spacer } from "../../../components/spacer/spacer.component";
import { Text } from "../../../components/typography/text.component";

import { AuthenticationContext } from "../../../services/authentication/authentication.context";
import { TouchableOpacity } from "react-native";

const BackView = styled.View`
  margin-top: ${(props) => props.theme.space[4]};
`;

const SafeArea = styled.View`
  background-color: ${(props) => props.theme.colors.bg.primary};
  padding: ${(props) => props.theme.space[3]};
`;

export const LoginScreen = ({ navigation }) => {
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { onLogin, error, isLoading } = useContext(AuthenticationContext);

  return (
    <SafeArea>
      <RegisterCover />
      <BackView>
        <AntDesign name="back" size={26} color="black" onPress={() => navigation.goBack()} />
      </BackView>
      <Title variant="label">Sign In</Title>
      <RegisterContainer>
        <AuthInput
          placeholder="Email"
          value={email}
          textContentType="emailAddress"
          keyboardType="email-address"
          autoCapitalize="none"
          onChangeText={(u) => setEmail(u)}
        />
        <Spacer size="large"></Spacer>
        <AuthInput
          placeholder="Password"
          value={password}
          textContentType="password"
          secureTextEntry
          autoCapitalize="none"
          onChangeText={(u) => setPassword(u)}
        />
        <Spacer size="large"></Spacer>
        {error && (
          <ErrorContainer size="large">
            <Text variant="error">{error}</Text>
          </ErrorContainer>
        )}
        <Spacer size="large">
          {!isLoading ? (
            <TouchableOpacity 
            onPress={() => onLogin(email, password)}>
            <SignButton
              icon="lock-open-outline"
              mode="contained"
              
            >
              Login
            </SignButton>
            </TouchableOpacity>
          ) : (
            <ActivityIndicator animating={true} color={Colors.blue300} />
          )}
        </Spacer>

        <Spacer size="large" />
        <LinkText>
          <Text variant="link" onPress={() => navigation.navigate("Register")}>
            New user? {""} Sign up here
          </Text>
        </LinkText>
      </RegisterContainer>
    </SafeArea>
  );
};
