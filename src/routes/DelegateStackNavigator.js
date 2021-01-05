import React from "react";
import {View, Image, I18nManager, Text, Platform} from 'react-native';
import COLORS from "../consts/colors";
import { createStackNavigator } from '@react-navigation/stack';
import {createDrawerNavigator} from '@react-navigation/drawer';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import styles from '../../assets/styles'
import CustomDrawerContent from './DelegateDrawerContent'
import i18n from "../../locale/i18n";
import {useDispatch, useSelector} from "react-redux";
import {logout, tempAuth} from '../actions';


import SelectLoc 				        from "../components/provider/SelectLoc";
import Home                             from "../components/provider/Home";
import Profile 					        from "../components/provider/Profile";
import NewLocation 				        from "../components/provider/NewLocation";
import Orders 				            from "../components/provider/Orders";
import Comments 				        from "../components/provider/Comments";
import AboutApp                         from "../components/provider/AboutApp";
import AppPolicy                        from "../components/provider/AppPolicy";
import ContactUs                        from "../components/provider/ContactUs";
import CompAndSug                       from "../components/provider/CompAndSug";
import Wallet                           from "../components/provider/Wallet";
import OrderDetails                     from "../components/provider/OrderDetails";
import GetLocation                      from "../components/provider/GetLocation";
import OrderDeliveredSuccessfully       from "../components/provider/OrderDeliveredSuccessfully";
import SpecialOrderDetails              from "../components/provider/SpecialOrderDetails";
import NormalOrderDetails               from "../components/provider/NormalOrderDetails";
import Notifications                    from "../components/provider/Notifications";
import Recharge                         from "../components/provider/Recharge";
import BankTransfer                     from "../components/provider/BankTransfer";
import Settings                         from "../components/provider/Settings";


const MainStack  	= createStackNavigator();
const Drawer 	 	= createDrawerNavigator();
const DelegateStack  	= createStackNavigator();
const Tabs   	 	= createBottomTabNavigator();

export function delegateStackStackNavigator()  {
    return(
        <DelegateStack.Navigator mode={'card'} screenOptions={{headerShown: false}} initialRouteName="home" >
            <DelegateStack.Screen name='home' component={Home}/>
            <DelegateStack.Screen name='profile' component={Profile}/>
        </DelegateStack.Navigator>
    );
}



function TabsScreen() {

    return (
        <Tabs.Navigator
            initialRouteName="delegateStack"
            tabBarOptions={{
                activeTintColor: COLORS.mstarda,
                style: [styles.footerStyle],
                tabStyle : [styles.paddingVertical_5]
            }}
        >

            <Tabs.Screen
                name="delegateStack"
                component={delegateStackStackNavigator}
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
                name="orders"
                component={Orders}
                options={{
                    tabBarLabel: ({ color, focused }) => (
                        <Text style={[styles.textBold , color === COLORS.mstarda ? styles.text_mstarda : styles.text_gray, styles.textCenter , styles.textSize_11]}>{i18n.t('orders')}</Text>
                    ),
                    tabBarIcon: ({ color, size }) => (
                        <Image source={color === COLORS.mstarda ? require('../../assets/images/delivery_yellow.png') : require('../../assets/images/delivery_gray.png')} style={[styles.icon20]} resizeMode={'contain'} />
                    ),
                }}
            />

            <Tabs.Screen
                name="comments"
                component={Comments}
                options={{
                    tabBarLabel: ({ color, focused }) => (
                        <Text style={[styles.textBold , color === COLORS.mstarda ? styles.text_mstarda : styles.text_gray, styles.textCenter , styles.textSize_11]}>{i18n.t('comments')}</Text>
                    ),
                    tabBarIcon: ({ color, size }) => (
                        <Image source={color === COLORS.mstarda ? require('../../assets/images/comment_yellow.png') : require('../../assets/images/comment_gray.png')} style={[styles.icon20]} resizeMode={'contain'} />
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
            <Drawer.Screen name='aboutApp' component={AboutApp}/>
            <Drawer.Screen name='appPolicy' component={AppPolicy}/>
            <Drawer.Screen name='contactUs' component={ContactUs}/>
            <Drawer.Screen name='compAndSug' component={CompAndSug}/>
            <Drawer.Screen name='wallet' component={Wallet}/>
            <Drawer.Screen name='orderDetails' component={OrderDetails}/>
            <Drawer.Screen name='getLocation' component={GetLocation}/>
            <Drawer.Screen name='orderDeliveredSuccessfully' component={OrderDeliveredSuccessfully}/>
            <Drawer.Screen name='specialOrderDetails' component={SpecialOrderDetails}/>
            <Drawer.Screen name='normalOrderDetails' component={NormalOrderDetails}/>
            <Drawer.Screen name='notifications' component={Notifications}/>
            <Drawer.Screen name='recharge' component={Recharge}/>
            <Drawer.Screen name='bankTransfer' component={BankTransfer}/>
            <Drawer.Screen name='settings' component={Settings}/>
        </Drawer.Navigator>
    );
}



export function DelegateStackNavigator()  {
    return(
        <MainStack.Navigator mode={'card'} screenOptions={{headerShown: false}}  >
            <MainStack.Screen name='selectLoc' component={SelectLoc}/>
            <MainStack.Screen name='newLocation' component={NewLocation}/>
            <MainStack.Screen name='myDrawer' component={MyDrawer}/>
        </MainStack.Navigator>
    );
}

