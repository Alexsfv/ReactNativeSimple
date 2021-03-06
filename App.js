import React from 'react';
import { View } from 'react-native';
import Screen from './app/components/HOC/Screen/Screen';
import Icon from './app/components/Icon/Icon';
import ListItem from './app/components/ListItem/ListItem';
import AccountScreen from './app/screens/AccountScreen';
import ListingsScreen from './app/screens/ListingsScreen';
import MessagesScreen from './app/screens/MessagesScreen';
import ViewImageScreen from './app/screens/ViewImageScreen';

export default function App() {

    return (
        <ListingsScreen />
    )
}