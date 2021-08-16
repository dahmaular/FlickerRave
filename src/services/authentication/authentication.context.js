import React, { useState, createContext, useEffect } from "react";

import * as firebase from "firebase";
import { loginRequest, currentUser, registerRequest } from "./authentication.service";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const AuthenticationContext = createContext();

export const AuthenticationContextProvider = ({ navigation, children }) => {
    const [user, setUser] = useState(null);
    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        onAuth();
    },[])

    const onRegister = async (email, password, fname, lname, phone) => {
        setIsLoading(true);
        await AsyncStorage.removeItem("@token");
        registerRequest(email,password,fname,lname,phone)
            .then(async (response) => {
                setUser(response.data.userData);
                await AsyncStorage.setItem("@token", response.data.token);
                setIsLoading(false);
            })
            .catch((e) => {
                setIsLoading(false);
                setError(e.toString());
            });
    };

    const onLogin = (email, password) => {
        setIsLoading(true);
        loginRequest(email, password)
            .then( async (usr) => {
                setUser(usr);
                await AsyncStorage.removeItem("@token");
                await AsyncStorage.setItem("@token", usr.data.token);
                setUser(usr.data.userData);
                setIsLoading(false);
            })
            .catch((e) => {
                setIsLoading(false);
                setError(e.toString());
            });
    };

    const onAuth = async () => {
        const value = await AsyncStorage.getItem("@token");
        if (value !== null) {
            currentUser(value)
                .then((res) => {
                    if (res.data !== null) {
                setUser(res.data);
                setIsLoading(false);
                    }
            })  
                .catch((e) => {
                    setIsLoading(false);
                    setError(e.toString());
                });
        }
    }

    const onLogOut = async () => {
        await AsyncStorage.removeItem("@token");
        setUser(null);
        console.log("logged out");
        navigation.navigate("Welcome");
    };

    return (
        <AuthenticationContext.Provider
        value={{
            isAuthenticated: !!user,
            user,
            error,
            onRegister,
            onLogin,
            isLoading,
            onLogOut
        }}
        >
            {children}
        </AuthenticationContext.Provider>
    );
};