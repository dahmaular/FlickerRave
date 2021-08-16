import React, { useState, useContext } from "react";
import { ActivityIndicator, Colors, Avatar } from "react-native-paper";
import styled from "styled-components/native";
import { AntDesign } from "@expo/vector-icons";
import { TouchableOpacity, ScrollView } from "react-native";

import {
  RegisterCover,
  RegisterContainer,
  SignButton,
  AuthButton,
  AuthInput,
  Title,
  ErrorContainer,
  LinkText,
} from "../components/welcome.styles";
import { Spacer } from "../../../components/spacer/spacer.component";
import { Text } from "../../../components/typography/text.component";

import { AuthenticationContext } from "../../../services/authentication/authentication.context";

const AvatarContainer = styled.View`
  align-items: center;
  align-self: center;
  justify-content: space-between;
  padding: 10px;
  flex-direction: row;
  background-color: ${(props) => props.theme.colors.bg.primary};
`;

const BackView = styled.View`
  margin-top: ${(props) => props.theme.space[4]};
`;

const SafeArea = styled(ScrollView)`
  background-color: ${(props) => props.theme.colors.bg.primary};
  padding: ${(props) => props.theme.space[3]};
`;

const TextContainer = styled.View`
    align-items: center
`;

export const RegisterScreen = ({ navigation }) => {
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { onRegister, error, isLoading } = useContext(AuthenticationContext);
  const google = require("../../../../assets/google.png");
  const facebook = require("../../../../assets/facebook.png");

  return (
    <SafeArea>
      <RegisterCover />
      <BackView>
        <AntDesign
          name="back"
          size={26}
          color="black"
          onPress={() => navigation.goBack()}
        />
      </BackView>
      <Title variant="body">Register</Title>
      <RegisterContainer>
        <AuthInput
          placeholder="First Name"
          value={fname}
          keyboardType="default"
          autoCapitalize="none"
          onChangeText={(u) => setFname(u)}
        />
        <Spacer size="large"></Spacer>
        <AuthInput
          placeholder="Last Name"
          value={lname}
          keyboardType="default"
          autoCapitalize="none"
          onChangeText={(u) => setLname(u)}
        />
        <Spacer size="large"></Spacer>
        <AuthInput
          placeholder="E-mail"
          value={email}
          textContentType="emailAddress"
          keyboardType="email-address"
          autoCapitalize="none"
          onChangeText={(u) => setEmail(u)}
        />
        <Spacer size="large"></Spacer>
        <AuthInput
          placeholder="Phone Number"
          value={phone}
          keyboardType="number-pad"
          autoCapitalize="none"
          onChangeText={(u) => setPhone(u)}
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
            onPress={() => onRegister(email, password, fname, lname, phone)}>
            <SignButton
              icon="email"
              mode="contained"
              
            >
              Register
            </SignButton>
            </TouchableOpacity>
          ) : (
            <ActivityIndicator animating={true} color={Colors.blue300} />
          )}
        </Spacer>
        <Spacer size="large" />
        {/* <TextContainer>
        <Text variant="label">Or signup with:</Text>
        </TextContainer>
        <AvatarContainer>
          <TouchableOpacity>
            <Avatar.Image size={50} source={google} backgroundColor="#FFFFFF" />
            
          </TouchableOpacity>
          <Spacer size="large" />
          <TouchableOpacity>
          <Avatar.Image size={50} source={facebook} backgroundColor="#FFFFFF" />
          </TouchableOpacity>
        </AvatarContainer> */}
        <Spacer size="large" />
        <LinkText>
          <Text variant="link" onPress={() => navigation.navigate("Login")}>
            Already a user? {""} Login
          </Text>
        </LinkText>
      </RegisterContainer>
    </SafeArea>
  );
};
