import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import { WelcomeScreen } from "../../features/welcome/screen/welcome.screen";
import { LoginScreen } from "../../features/welcome/screen/login.screen";
import { RegisterScreen } from "../../features/welcome/screen/register.screen";
import { OnboardScreen } from "../../features/welcome/screen/onboard.screen";

const Stack = createStackNavigator();

export const AuthenticationNavigator = () => (
  <Stack.Navigator headerMode="none">
    <Stack.Screen name="Main" component={OnboardScreen} />
    <Stack.Screen name="Welcome" component={WelcomeScreen} />
    <Stack.Screen name="Login" component={LoginScreen} />
    <Stack.Screen name="Register" component={RegisterScreen} />
  </Stack.Navigator>
);
