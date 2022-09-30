// In App.js in a new project

import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AuthStack from './AuthStack';
import MainStack from './MainStack';

function HomeScreen() {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text style={{ color: "#000000" }}>Home Screen</Text>
        </View>
    );
}

const Stack = createNativeStackNavigator();

function Routes() {
    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{ headerShown: false }}>

                {false ? <React.Fragment>{MainStack(Stack)}</React.Fragment> : <React.Fragment>{AuthStack(Stack)}</React.Fragment>}
                {/* <React.Fragment>{AuthStack(Stack)}</React.Fragment> */}
                {/* <React.Fragment>{MainStack(Stack)}</React.Fragment> */}
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default Routes;