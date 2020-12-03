import React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import SettingsScreen from '../Screens/SettingsScreen';
import AboutScreen from '../Screens/AboutScreen';
import Ionicons from 'react-native-vector-icons/Ionicons'
import HomeScreen from '../Navigations/StackNavigation1';
import Constants from 'expo-constants';
import About1 from '../Screens/About1';
import About2 from '../Screens/About2';


const Tab =  createMaterialTopTabNavigator();

export default function TopTapNavigator1(){
    return(
        <Tab.Navigator
            initialRouteName="About1"
            tabBarOptions={{
                activeTintColor:"#ff6600",
                inactiveTintColor:"#060606",
                showIcon:true,
                showLabel:true,
                labelStyle:{
                    fontSize:11
                },
                style:{
                    paddingTop:Constants.statusBarHeight,
                    backgroundColor:"#f3f3f1"
                }

            }}
        > 
           
            <Tab.Screen
                name="About1"
                component={About1}
                options={{
                    tabBarLabel:"Acerca 1",
                    tabBarIcon:({color})=>(
                        <Ionicons name={"logo-github"} size={20} color={color}/>
                    )
                }}
            
            />
            <Tab.Screen
                name="About2"
                component={About2}
                options={{
                    tabBarLabel:"Acerca 2",
                    tabBarIcon:({color})=>(
                        <Ionicons name={"md-call"} size={20} color={color}/>
                    )
                }}
            />

        </Tab.Navigator>
    )
}