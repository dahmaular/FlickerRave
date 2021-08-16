import React, { useState, useContext, useEffect } from "react";
import { NavigationContainer } from "@react-navigation/native";

import { AuthenticationContext } from "../../services/authentication/authentication.context";

import { AppNavigator } from "./app.navigator";
import { AuthenticationNavigator } from "./auth.navigation";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const Navigation = () => {
    const { isAuthenticated } = useContext(AuthenticationContext);
   
  return (
    <NavigationContainer>
    {isAuthenticated ? <AppNavigator /> : <AuthenticationNavigator /> }
    </NavigationContainer>
  );
};
