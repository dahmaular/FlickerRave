import React, { useContext, useState } from "react";
import styled from "styled-components/native";
import { List, Avatar } from "react-native-paper";
import { TextInput, TouchableOpacity } from "react-native";

import { Text } from "../../../components/typography/text.component";
import { SafeArea } from "../../../components/utility/safe-area.component";
import { Spacer } from "../../../components/spacer/spacer.component";
import {
  RegisterCover,
  RegisterContainer,
  SignButton,
  AuthButton,
  Title,
  ErrorContainer,
  LinkText,
} from "../../../features/welcome/components/welcome.styles";

import { AuthenticationContext } from "../../../services/authentication/authentication.context";

// const {Dimensions, Platform} = React;
// const deviceHeight = Dimensions.get('window').height;
// const deviceWidth = Dimensions.get('window').width;

const ListContainer = styled(List.Section)`
  padding: 10px;
`;

const TitleView = styled.View`
  align-items: center;
  margin-top: 40px;
`;

const AuthInput = styled(TextInput)`
  width: 100%;
  border-width: 1px;
  border-radius: 10px;
  ${"" /* border-color: ${(props) => props.theme.colors.brand.primary}; */}
  height: 60px;
  padding: ${(props) => props.theme.space[3]};
`;

export const ProfileScreen = () => {
  const { user } = useContext(AuthenticationContext);

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  return (
    <SafeArea>
      <TitleView>
        <Text variant="title">Edit profile details</Text>
      </TitleView>
      <ListContainer>
        <AuthInput
          value={firstName}
          placeholder={user.firstName}
          keyboardType="default"
          autoCapitalize="none"
          onChangeText={(u) => setFirstName({ firstName :u})}
        />
        <Spacer size="large" />
        <AuthInput
          value={lastName}
          placeholder={user.lastName}
          keyboardType="default"
          autoCapitalize="none"
          onChangeText={(u) => setLastName({ lastName : u})}
        />
        <Spacer size="large" />
        <AuthInput
          value={email}
          placeholder={user.email}
          textContentType="emailAddress"
          keyboardType="email-address"
          autoCapitalize="none"
          onChangeText={(u) => setEmail({email:u})}
        />
        <Spacer size="large" />
        <AuthInput
          value={phone}
          placeholder={user.phoneNumber}
          keyboardType="number-pad"
          autoCapitalize="none"
          onChangeText={(u) => setPhone({phone:u})}
        />
        <Spacer size="large" position="top" />
        <TouchableOpacity onPress={()=> null}>
        <SignButton>Update</SignButton>
        </TouchableOpacity>
      </ListContainer>
    </SafeArea>
  );
};
