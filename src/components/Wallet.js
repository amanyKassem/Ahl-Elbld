import React, {useEffect, useRef, useState} from "react";
import {View, Text, Image, TouchableOpacity, Dimensions, FlatList, I18nManager} from "react-native";
import {Container, Content, Icon, Input} from 'native-base'
import styles from '../../assets/styles'
import i18n from "../../locale/i18n";
import Swiper from 'react-native-swiper';
import {useSelector, useDispatch} from 'react-redux';
import Header from '../common/Header';
import COLORS from "../consts/colors";
import StarRating from "react-native-star-rating";

const height = Dimensions.get('window').height;
const isIOS = Platform.OS === 'ios';
const latitudeDelta = 0.922;
const longitudeDelta = 0.521;

function Wallet({navigation,route}) {

    // const lang = useSelector(state => state.lang.lang);
    // const token = useSelector(state => state.auth.user ? state.auth.user.data.token : null);


    return (
        <Container style={[styles.bg_black]}>
            <Content contentContainerStyle={[styles.bgFullWidth , styles.bg_black]}>

                <Header navigation={navigation} title={ i18n.t('wallet') } />

                <View style={[styles.bgFullWidth ,styles.bg_White, styles.Width_100,styles.paddingHorizontal_20 , styles.alignCenter, {overflow:'hidden'}]}>

                    <Image source={require("../../assets/images/wallet_image.png")} style={[styles.icon100 , styles.marginVertical_45]} resizeMode={'contain'}/>

                    <Text style={[styles.textBold , styles.text_mstarda , styles.textSize_22, styles.textCenter ]}>{ i18n.t('currentBalance') }</Text>

                    <View style={[styles.width_180 , styles.height_100 , styles.bg_light_gray , styles.marginTop_55 , styles.Radius_15 , styles.centerContext]}>
                        <Text style={[styles.textBold , styles.text_mstarda , styles.textSize_24, styles.textCenter ]}>900 ر.س</Text>
                    </View>

                    <TouchableOpacity onPress={() => navigation.navigate('recharge')} style={[styles.height_40 , styles.bg_mstarda , styles.Radius_5 , styles.Width_100, styles.centerContext , styles.marginTop_65]}>
                        <Text style={[styles.textBold , styles.text_White , styles.textSize_15, styles.textCenter ]}>{ i18n.t('recharge') }</Text>
                    </TouchableOpacity>

                </View>

            </Content>
        </Container>
    );
}

export default Wallet;


