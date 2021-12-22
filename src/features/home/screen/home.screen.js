import React, { useContext } from "react";
import { ScrollView } from "react-native";
import styled from "styled-components/native";
import { List, Avatar, Title } from "react-native-paper";

import { Text } from "../../../components/typography/text.component";
import { HomeSafeArea } from "../components/home-card.component";
import { colors } from "../../../structure/theme/colors";
import { Spacer } from "../../../components/spacer/spacer.component";

import { HomeCard, HomeCardContainer } from "../components/home-card.component";

import { AuthenticationContext } from "../../../services/authentication/authentication.context";

const BannerContainer = styled.ImageBackground.attrs({
  source: require("../../../../assets/banner.png"),
})`
  height: 25%;
`;

const UserContainer = styled.View`
  padding: ${(props) => props.theme.space[3]};
  align-items: flex-start;
  flex-direction: row;
`;

const CardText = styled.View`
  padding: ${(props) => props.theme.space[2]};
  flex-wrap: wrap;
`;

const HomeItemContainer = styled.View`
  flex-direction: row;
  padding: ${(props) => props.theme.space[3]};
`;

export const HomeScreen = ({navigation}) => {
  const img1 = require("../../../../assets/package.png");
  const img2 = require("../../../../assets/map.png");
  const img3 = require("../../../../assets/delivery_man.jpg");
  const { user, onLogOut } = useContext(AuthenticationContext);
  // console.log(user);
  return (
    <HomeSafeArea>
        <UserContainer>
          <Avatar.Icon size={40} icon="human" backgroundColor="black" />
          <Text variant="label" style={{ padding: 10 }}>
            Welcome, {user.firstName}
          </Text>
        </UserContainer>
        <BannerContainer />
        <ScrollView>
        <HomeCardContainer>
          <HomeCard elevation={3}>
            <HomeCard.Cover source={img1} />
            <HomeCard.Content>
              <Title>
                <Text variant="hint" onPress={() => onLogOut()}>
                  Send package
                </Text>
              </Title>
            </HomeCard.Content>
          </HomeCard>
          <HomeCard elevation={3}>
            <HomeCard.Cover source={img2} />
            <HomeCard.Content>
              <Title>
                <Text variant="hint" onPress={() => {navigation.navigate('MapScreen')}}>
                  Track dispatch rider
                </Text>
              </Title>
            </HomeCard.Content>
          </HomeCard>
        </HomeCardContainer>
        <HomeCardContainer>
          <HomeCard elevation={3}>
            <HomeCard.Cover source={img3} />
            <HomeCard.Content>
              <Title>
                <Text variant="hint">
                  My deliveries
                </Text>
              </Title>
            </HomeCard.Content>
          </HomeCard>
          <HomeCard elevation={3}>
            <HomeCard.Cover source={img1} />
            <HomeCard.Content>
              <Title>
                <Text variant="hint">
                  Help
                </Text>
              </Title>
            </HomeCard.Content>
          </HomeCard>
        </HomeCardContainer>
        </ScrollView>
    </HomeSafeArea>
   
  );
};
