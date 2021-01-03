import React , {useEffect} from "react";
import {  AsyncStorage } from 'react-native';
import { NavigationContainer  } from "@react-navigation/native";
import { createStackNavigator } from '@react-navigation/stack';
import { AuthStackNavigator } from './AuthStackNavigator'
import { MainStackNavigator } from './MainStackNavigator'
import { ProviderStackNavigator } from './ProviderStackNavigator'
import {useSelector} from 'react-redux';


const RootStack = createStackNavigator();

function renderScreens() {
	// const auth = useSelector(state => state.auth);
	const auth = true;
	const userType = 'user';

	// if (auth.user !== null) {
	if (auth) {
		if(userType === 'user')
			return ( <RootStack.Screen name={'MainStack'} component={MainStackNavigator} /> );
		else
			return ( <RootStack.Screen name={'MainStack'} component={ProviderStackNavigator}/> )
	}
	return (<RootStack.Screen name={'AuthStack'} component={AuthStackNavigator}/>)
}


function AppNavigator() {

	return (
		<NavigationContainer>
			<RootStack.Navigator screenOptions={{headerShown: false}} >
				{ renderScreens() }
			</RootStack.Navigator>
		</NavigationContainer>
	);
}

export default AppNavigator;
