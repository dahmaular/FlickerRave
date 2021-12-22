import React, {useState, useContext, useEffect} from 'react';
import MapView from 'react-native-maps';
import {View, Text} from 'react-native';

export const MapScreen = () => {
    return (
        <MapView style={{width:'100%', height:'100%'}}
        region={{latitude:9.0820,
        longitude:8.6753,
        latitudeDelta: 0.1086000000000098,
        longitudeDelta:0.01}}
        showsUserLocation={true} />
    )
}