import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import SettingsScreen from '../Screens/SettingsScreen';
import AboutScreen from '../Navigations/TopTapNavigator1';
import Ionicons from 'react-native-vector-icons/Ionicons'
import HomeScreen from '../Navigations/StackNavigation1';
import EmailScreen from '../Screens/EmailScreen';
import ContactScreen from '../Screens/ContactScreen';
import Toast1 from '../Screens/Toast1';

const Tab = createBottomTabNavigator();

export default function BottomTabNavigator1(){
    return(
        <Tab.Navigator
            initialRouteName="Home"
            tabBarOptions={{
                activeTintColor:"#ff6600",
                inactiveTintColor:"#060606",
                showLabel:true,
                labelStyle:{
                    fontSize:12
                },
                style:{
                    paddingBottom:5,
                    backgroundColor:"#f3f3f1"
                }

            }}
        > 
           
            <Tab.Screen
                name="Home"
                component={HomeScreen}
                options={{
                    tabBarLabel:"Inicio",
                    tabBarIcon:({color})=>(
                        <Ionicons name={"ios-home"} size={20} color={color}/>
                    )
                }}
            
            />
            <Tab.Screen
                name="Toast"
                component={Toast1}
                options={{
                    tabBarLabel:"Toast",
                    tabBarIcon:({color})=>(
                        <Ionicons name={"logo-youtube"} size={20} color={color}/>
                    )
                }}
            />
            <Tab.Screen
                name="Email"
                component={EmailScreen}
                options={{
                    tabBarLabel:"Correo",
                    tabBarIcon:({color})=>(
                        <Ionicons name={"ios-mail"} size={20} color={color}/>
                    )
                }}
            />
            <Tab.Screen
                name="Contact"
                component={ContactScreen}
                options={{
                    tabBarLabel:"Contactos",
                    tabBarIcon:({color})=>(
                        <Ionicons name={"ios-contact"} size={20} color={color}/>
                    )
                }}
            />
            <Tab.Screen
                name="About"
                component={AboutScreen}
                options={{
                    tabBarLabel:"Acerca de",
                    tabBarIcon:({color})=>(
                        <Ionicons name={"ios-help-circle"} size={20} color={color}/>
                    )
                }}
            />
        </Tab.Navigator>
    )
}