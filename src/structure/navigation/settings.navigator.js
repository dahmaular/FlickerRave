import React from "react";

import { createStackNavigator } from "@react-navigation/stack";
import { SettingsScreen } from "../../features/settings/screens/settings.screen";
import { ProfileScreen } from "../../features/profile/screens/profile";

const Stack = createStackNavigator();

export const SettingsNavigator = () => (
  <Stack.Navigator headerMode="none">
    <Stack.Screen name="Settings" component={SettingsScreen} />
    <Stack.Screen name="Profile" component={ProfileScreen} />
  </Stack.Navigator>
);
