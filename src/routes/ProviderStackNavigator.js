import React from "react";
import {View, Image, I18nManager, Text, Platform} from 'react-native';
import COLORS from "../consts/colors";
import { createStackNavigator } from '@react-navigation/stack';
import {createDrawerNavigator} from '@react-navigation/drawer';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import styles from '../../assets/styles'
import CustomDrawerContent from './ProviderDrawerContent'
import i18n from "../../locale/i18n";
import {useDispatch, useSelector} from "react-redux";
import {logout, tempAuth} from '../actions';


import SelectLoc 				from "../components/provider/SelectLoc";
import Home                     from "../components/provider/Home";
import Profile 					from "../components/provider/Profile";
import NewLocation 				from "../components/provider/NewLocation";


const MainStack  	= createStackNavigator();
const Drawer 	 	= createDrawerNavigator();
const ProviderStack  	= createStackNavigator();
const Tabs   	 	= createBottomTabNavigator();

export function providerStackStackNavigator()  {
    return(
        <ProviderStack.Navigator mode={'card'} screenOptions={{headerShown: false}} initialRouteName="home" >
            <ProviderStack.Screen name='home' component={Home}/>
            <ProviderStack.Screen name='profile' component={Profile}/>
        </ProviderStack.Navigator>
    );
}



function TabsScreen() {

    return (
        <Tabs.Navigator
            initialRouteName="providerStack"
            tabBarOptions={{
                activeTintColor: COLORS.mstarda,
                style: [styles.footerStyle],
                tabStyle : [styles.paddingVertical_5]
            }}
        >

            <Tabs.Screen
                name="providerStack"
                component={providerStackStackNavigator}
                options={{
                    tabBarLabel: ({ color, focused }) => (
                        <Text style={[styles.textBold , color === COLORS.mstarda ? styles.text_mstarda : styles.text_gray, styles.textCenter , styles.textSize_11]}>{i18n.t('home')}</Text>
                    ),
                    tabBarIcon: ({ color, size }) => (
                        <Image source={color === COLORS.mstarda ? require('../../assets/images/home_yellow.png') : require('../../assets/images/home_gray.png')} style={[styles.icon20]} resizeMode={'contain'} />
                    ),
                }}
            />

            <Tabs.Screen
                name="profile"
                component={Profile}
                options={{
                    tabBarLabel: ({ color, focused }) => (
                        <Text style={[styles.textBold , color === COLORS.mstarda ? styles.text_mstarda : styles.text_gray , styles.textCenter , styles.textSize_10]}>{i18n.t('profile')}</Text>
                    ),
                    tabBarIcon: ({ color, size }) => (
                        <Image source={color === COLORS.mstarda ? require('../../assets/images/user_yellow.png') : require('../../assets/images/user_gray.png')} style={[styles.icon20]} resizeMode={'contain'} />
                    ),
                }}
            />

        </Tabs.Navigator>
    );
}



function MyDrawer() {

    return (
        <Drawer.Navigator
            initialRouteName="selectLoc"
            drawerStyle={[styles.Width_75]}
            drawerContentOptions={{
                itemStyle: [{ backgroundColor: 'transparent' , marginHorizontal:0}],
                labelStyle: [styles.textRegular ,{color:COLORS.gray }],
            }}
            drawerContent={(props) => <CustomDrawerContent {...props} />}>
            <Drawer.Screen name="tabs" component={TabsScreen}/>
        </Drawer.Navigator>
    );
}



export function ProviderStackNavigator()  {
    return(
        <MainStack.Navigator mode={'card'} screenOptions={{headerShown: false}}  >
            <MainStack.Screen name='selectLoc' component={SelectLoc}/>
            <MainStack.Screen name='newLocation' component={NewLocation}/>
            <MainStack.Screen name='myDrawer' component={MyDrawer}/>
        </MainStack.Navigator>
    );
}

