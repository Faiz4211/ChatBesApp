import * as React from 'react';
import { Image } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import navigationStrings from '../constants/navigationStrings';
import * as screens from '../screens';
import ImagePath from '../constants/ImagePath';


const Tab = createBottomTabNavigator();

export default function TabRoutes() {
    return (
        <Tab.Navigator screenOptions={{ headerShown: false }} initialRouteName={navigationStrings.CHATS}>
            <Tab.Screen name={navigationStrings.STATUS} component={screens.Status}
                options={{
                    tabBarIcon: ({ focused }) => {
                        return <Image style={{
                            tintColor: focused ? 'blue' : 'black'
                        }} source={ImagePath.icStatus} />


                    }
                }}
            />
            <Tab.Screen name={navigationStrings.CALLS} component={screens.Calls}
                options={{
                    tabBarIcon: ({ focused }) => {
                        return <Image style={{
                            tintColor: focused ? 'blue' : 'black'
                        }} source={ImagePath.icCall} />
                    }
                }}
            />
            <Tab.Screen name={navigationStrings.CAMERA} component={screens.Camera}
                options={{
                    tabBarIcon: ({ focused }) => {
                        return <Image style={{
                            tintColor: focused ? 'blue' : 'black'
                        }} source={ImagePath.icCamera} />
                    }
                }}
            />
            <Tab.Screen name={navigationStrings.CHATS} component={screens.Chats}
                options={{
                    tabBarIcon: ({ focused }) => {
                        return <Image style={{
                            tintColor: focused ? 'blue' : 'black'
                        }} source={ImagePath.icChats} />
                    }
                }}
            />
            <Tab.Screen name={navigationStrings.SETTINGS} component={screens.Settings}
                options={{
                    tabBarIcon: ({ focused }) => {
                        return <Image style={{
                            tintColor: focused ? 'blue' : 'black'
                        }} source={ImagePath.icSettings} />
                    }
                }}
            />

        </Tab.Navigator>
    );
}