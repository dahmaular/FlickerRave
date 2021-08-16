import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { ThemeProvider } from 'styled-components/native';

import * as firebase from "firebase";

import { AuthenticationContextProvider } from './src/services/authentication/authentication.context';

import {
  useFonts as useRoboto,
  Roboto_400Regular,
} from "@expo-google-fonts/roboto";
import { useFonts as useRubik, Rubik_400Regular } from "@expo-google-fonts/rubik";
import { theme } from "./src/structure/theme";

import { Navigation } from './src/structure/navigation';

//initiate firebase
// var firebaseConfig = {
//   apiKey: "AIzaSyAc2LKCKtLgip_NLXr3YiFaz7f3fyl_dKo",
//   authDomain: "flicker-rave.firebaseapp.com",
//   projectId: "flicker-rave",
//   storageBucket: "flicker-rave.appspot.com",
//   messagingSenderId: "1078999172694",
//   appId: "1:1078999172694:web:a1e0a92ae2d09284b65df7"
// };
// // Initialize Firebase
// firebase.initializeApp(firebaseConfig);

// if (!firebase.apps.length) {
//   firebase.initializeApp(firebaseConfig);
// }

export default function App() {
  const [robotoLoaded] = useRoboto({
    Roboto_400Regular,
  });

  const [rubikLoaded] = useRubik({
    Rubik_400Regular,
  });

  if (!robotoLoaded || !rubikLoaded) {
    return null;
  }

  return (
    <ThemeProvider theme={theme}>
    <AuthenticationContextProvider>
      <Navigation />
      </AuthenticationContextProvider>
      <StatusBar style="auto" />
    </ThemeProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
