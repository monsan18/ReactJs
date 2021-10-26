import React from "react";
import {NavigationContainer} from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons'

// screen menu
import Content from './containers/Content'
import Profile from './containers/Profile'

// screen name
const content = 'Home';
const profile = 'Profile';

const Tab = createBottomTabNavigator();

export default function MainContainer() {
    return (
        <NavigationContainer>
            <Tab.Navigator
                initialRouteName={content}
                screenOptions={({route}) => {
                    tabBarIcon: ({focused, color, size}) => {
                        let iconName;
                        let rn = route.name;

                        if (rn === content) {
                                iconName = focused ? 'home' : 'home-outline';
                        } else if (rn === profile) {
                                iconName = focused ? 'profile' : 'profile-outline';
                        }

                        return <Ionicons name={iconName} size={size} color={color}/>
                    }
                }}>
                
                <Tab.Screen name ={content} component={Content}/>
                <Tab.Screen name={profile} component = {Profile} />
            </Tab.Navigator>
        </NavigationContainer>
    )
}
