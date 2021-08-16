import React, { useState, createContext, useContext } from "react";

import AsyncStorage from "@react-native-async-storage/async-storage";

import { AuthenticationContext } from "../authentication/authentication.context";
import { updateRequest } from "./profile.service";

export const ProfileContext = createContext();

export const ProfileContextProvider = ({ navigation, children }) => {
    // const [user, setUser] = useState(null);
    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const { user } = useContext(AuthenticationContext);

    const onUpdate = (id, fname, lastname, email, phone) => {
        setIsLoading(true);
        updateRequest(id,fname,lastname,email,phone,user.password)
            .then((res) => {
                
            })
    }


    return (
        <ProfileContext.Provider
        value={{
           error,
           isLoading
        }}
        >
            {children}
        </ProfileContext.Provider>
    );
};