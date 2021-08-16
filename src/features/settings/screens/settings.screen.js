import React, { useContext } from "react";

import styled from "styled-components/native";
import { List, Avatar } from "react-native-paper";

import { AuthenticationContext } from "../../../services/authentication/authentication.context";

import { Text } from "../../../components/typography/text.component";
import { SafeArea } from "../../../components/utility/safe-area.component";
import { colors } from "../../../structure/theme/colors";

const AvatarContainer = styled.View`
  align-items: center;
  padding: 10px;
  margin-top: ${(props) => props.theme.space[4]};
`;

const UserInfoContainer = styled.View`
  align-items: center;
  padding: 10px;
`;

const ListContainer = styled(List.Section)`
  padding: 10px;
`;

const SettingsItem = styled(List.Item)`
  padding: ${(props) => props.theme.space[1]};
  background-color: ${(props) => props.theme.colors.bg.primary};
  border-radius: 15px;
  border-width: 2px;
  margin-top: ${(props) => props.theme.space[3]};
`;

export const SettingsScreen = ({ navigation }) => {
  const { user, onLogOut } = useContext(AuthenticationContext);

  return (
    <SafeArea>
      <AvatarContainer>
        <Avatar.Image
          size={120}
          source={{ uri: "https://source.unsplash.com/random" }}
          backgroundColor={colors.brand.primary}
        />
      </AvatarContainer>
      <UserInfoContainer>
        <Text variant="title">{user.firstName}</Text>
        <Text variant="title">{user.email}</Text>
      </UserInfoContainer>
      <ListContainer>
        <SettingsItem
          onPress={() => navigation.navigate("Profile")}
          title="Edit Profile"
          description="Edit your profile"
          left={(props) => (
            <List.Icon {...props} color={colors.ui.primary} icon="account" />
          )}
          right={(props) => (
            <List.Icon
              {...props}
              color={colors.ui.primary}
              icon="arrow-top-right"
            />
          )}
        />
        <SettingsItem
          title="Deliveries"
          description="View previous deliveries"
          left={(props) => (
            <List.Icon
              {...props}
              color={colors.ui.primary}
              icon="map-marker-radius"
            />
          )}
          right={(props) => (
            <List.Icon
              {...props}
              color={colors.ui.primary}
              icon="arrow-top-right"
            />
          )}
        />
        <SettingsItem
          title="Payment"
          description="Manage payment"
          left={(props) => (
            <List.Icon
              {...props}
              color={colors.ui.primary}
              icon="credit-card-marker"
            />
          )}
          right={(props) => (
            <List.Icon
              {...props}
              color={colors.ui.primary}
              icon="arrow-top-right"
            />
          )}
        />
        <SettingsItem
          title="Support"
          description="Need help?"
          left={(props) => (
            <List.Icon {...props} color={colors.ui.primary} icon="face-agent" />
          )}
          right={(props) => (
            <List.Icon
              {...props}
              color={colors.ui.primary}
              icon="arrow-top-right"
            />
          )}
        />
        <SettingsItem
          title="Logout"
          left={(props) => (
            <List.Icon {...props} color={colors.ui.primary} icon="logout" />
          )}
          right={(props) => (
            <List.Icon
              {...props}
              color={colors.ui.primary}
              icon="arrow-top-right"
            />
          )}
          onPress={onLogOut}
        />
      </ListContainer>
    </SafeArea>
  );
};
