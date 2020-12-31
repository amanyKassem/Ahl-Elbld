import React from "react";import {View, Image, I18nManager, Text, Platform} from 'react-native';import COLORS from "../consts/colors";import { createStackNavigator } from '@react-navigation/stack';import {createDrawerNavigator} from '@react-navigation/drawer';import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';import styles from '../../assets/styles'import CustomDrawerContent from './CustomDrawerContent'import i18n from "../../locale/i18n";import {useDispatch, useSelector} from "react-redux";import {logout, tempAuth} from '../actions';import SelectLoc 				from "../components/SelectLoc";import Home                     from "../components/Home";import Notifications            from "../components/Notifications";import MyOrders 				from "../components/MyOrders";import Profile 					from "../components/Profile";import GetLocation 				from "../components/GetLocation";import NewLocation 				from "../components/NewLocation";import Favourite 				from "../components/Favourite";import Offers 					from "../components/Offers";import OfferPrice 				from "../components/OfferPrice";import RestWithdrawal 			from "../components/RestWithdrawal";import Basket 					from "../components/Basket";import BasketDetails 			from "../components/BasketDetails";import Category 				from "../components/Category";import CategoryDetails 			from "../components/CategoryDetails";import FastingBreakfast 		from "../components/FastingBreakfast";import FastingBreakfastDetails 	from "../components/FastingBreakfastDetails";import SpecialOrders 			from "../components/SpecialOrders";import Wallet 					from "../components/Wallet";import Recharge 				from "../components/Recharge";import BankTransfer 			from "../components/BankTransfer";import AboutApp 				from "../components/AboutApp";import AppPolicy 				from "../components/AppPolicy";import ContactUs 				from "../components/ContactUs";import CompAndSug 				from "../components/CompAndSug";import FAQ 						from "../components/FAQ";import Settings 				from "../components/Settings";import ProductDetails 			from "../components/ProductDetails";import OrderData 				from "../components/OrderData";import OrderSentSuccessfully 	from "../components/OrderSentSuccessfully";import EventDetails 			from "../components/EventDetails";import EventPayMethod 			from "../components/EventPayMethod";import EventSentSuccessfully 	from "../components/EventSentSuccessfully";import OrderDetails 			from "../components/OrderDetails";const MainStack  	= createStackNavigator();const Drawer 	 	= createDrawerNavigator();const UserStack  	= createStackNavigator();const Tabs   	 	= createBottomTabNavigator();export function userStackStackNavigator()  {	return(		<UserStack.Navigator mode={'card'} screenOptions={{headerShown: false}} initialRouteName="home" >			<UserStack.Screen name='home' component={Home}/>			<UserStack.Screen name='profile' component={Profile}/>		</UserStack.Navigator>	);}function TabsScreen() {	return (		<Tabs.Navigator			initialRouteName="userStack"			tabBarOptions={{				activeTintColor: COLORS.mstarda,				style: [styles.footerStyle],				tabStyle : [styles.paddingVertical_5]			}}		>			<Tabs.Screen				name="userStack"				component={userStackStackNavigator}				options={{					tabBarLabel: ({ color, focused }) => (						<Text style={[styles.textBold , color === COLORS.mstarda ? styles.text_mstarda : styles.text_gray, styles.textCenter , styles.textSize_11]}>{i18n.t('home')}</Text>					),					tabBarIcon: ({ color, size }) => (						<Image source={color === COLORS.mstarda ? require('../../assets/images/home_yellow.png') : require('../../assets/images/home_gray.png')} style={[styles.icon20]} resizeMode={'contain'} />					),				}}			/>			<Tabs.Screen				name="favourite"				component={Favourite}				options={{					tabBarLabel: ({ color, focused }) => (						<Text style={[styles.textBold , color === COLORS.mstarda ? styles.text_mstarda : styles.text_gray, styles.textCenter , styles.textSize_11]}>{i18n.t('favourite')}</Text>					),					tabBarIcon: ({ color, size }) => (						<Image source={color === COLORS.mstarda ? require('../../assets/images/heart_yellow.png') : require('../../assets/images/heart_gray.png')} style={[styles.icon20]} resizeMode={'contain'} />					),				}}			/>			<Tabs.Screen				name="offers"				component={Offers}				options={{					tabBarLabel: ({ color, focused }) => (						<Text style={[styles.textBold , color === COLORS.mstarda ? styles.text_mstarda : styles.text_gray, styles.textCenter , styles.textSize_11]}>{i18n.t('offers')}</Text>					),					tabBarIcon: ({ color, size }) => (						<Image source={color === COLORS.mstarda ? require('../../assets/images/discount_yellow.png') : require('../../assets/images/discount_gray.png')} style={[styles.icon20]} resizeMode={'contain'} />					),				}}			/>			<Tabs.Screen				name="profile"				component={Profile}				options={{					tabBarLabel: ({ color, focused }) => (						<Text style={[styles.textBold , color === COLORS.mstarda ? styles.text_mstarda : styles.text_gray , styles.textCenter , styles.textSize_10]}>{i18n.t('profile')}</Text>					),					tabBarIcon: ({ color, size }) => (						<Image source={color === COLORS.mstarda ? require('../../assets/images/user_yellow.png') : require('../../assets/images/user_gray.png')} style={[styles.icon20]} resizeMode={'contain'} />					),				}}			/>		</Tabs.Navigator>	);}function MyDrawer() {	return (		<Drawer.Navigator			initialRouteName="selectLoc"			drawerStyle={[styles.Width_75]}            drawerContentOptions={{                itemStyle: [{ backgroundColor: 'transparent' , marginHorizontal:0}],                labelStyle: [styles.textRegular ,{color:COLORS.gray }],            }}			drawerContent={(props) => <CustomDrawerContent {...props} />}>			<Drawer.Screen name="tabs" component={TabsScreen}/>			<Drawer.Screen name='myOrders' component={MyOrders}/>			<Drawer.Screen name='getLocation' component={GetLocation}/>			<Drawer.Screen name='notifications' component={Notifications}/>			<Drawer.Screen name='offerPrice' component={OfferPrice}/>			<Drawer.Screen name='restWithdrawal' component={RestWithdrawal}/>			<Drawer.Screen name='basket' component={Basket}/>			<Drawer.Screen name='basketDetails' component={BasketDetails}/>			<Drawer.Screen name='category' component={Category}/>			<Drawer.Screen name='categoryDetails' component={CategoryDetails}/>			<Drawer.Screen name='fastingBreakfast' component={FastingBreakfast}/>			<Drawer.Screen name='fastingBreakfastDetails' component={FastingBreakfastDetails}/>			<Drawer.Screen name='specialOrders' component={SpecialOrders}/>			<Drawer.Screen name='wallet' component={Wallet}/>			<Drawer.Screen name='recharge' component={Recharge}/>			<Drawer.Screen name='bankTransfer' component={BankTransfer}/>			<Drawer.Screen name='aboutApp' component={AboutApp}/>			<Drawer.Screen name='appPolicy' component={AppPolicy}/>			<Drawer.Screen name='contactUs' component={ContactUs}/>			<Drawer.Screen name='compAndSug' component={CompAndSug}/>			<Drawer.Screen name='faq' component={FAQ}/>			<Drawer.Screen name='settings' component={Settings}/>			<Drawer.Screen name='productDetails' component={ProductDetails}/>			<Drawer.Screen name='orderData' component={OrderData}/>			<Drawer.Screen name='orderSentSuccessfully' component={OrderSentSuccessfully}/>			<Drawer.Screen name='eventDetails' component={EventDetails}/>			<Drawer.Screen name='eventPayMethod' component={EventPayMethod}/>			<Drawer.Screen name='eventSentSuccessfully' component={EventSentSuccessfully}/>			<Drawer.Screen name='orderDetails' component={OrderDetails}/>        </Drawer.Navigator>	);}export function MainStackNavigator()  {	return(		<MainStack.Navigator mode={'card'} screenOptions={{headerShown: false}}  >			<MainStack.Screen name='selectLoc' component={SelectLoc}/>			<MainStack.Screen name='newLocation' component={NewLocation}/>			<MainStack.Screen name='myDrawer' component={MyDrawer}/>		</MainStack.Navigator>	);}