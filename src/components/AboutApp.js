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

function AboutApp({navigation,route}) {

    // const lang = useSelector(state => state.lang.lang);
    // const token = useSelector(state => state.auth.user ? state.auth.user.data.token : null);


    return (
        <Container style={[styles.bg_black]}>
            <Content contentContainerStyle={[styles.bgFullWidth , styles.bg_black]}>

                <Header navigation={navigation} title={ i18n.t('aboutApp') } />

                <View style={[styles.bgFullWidth ,styles.bg_White, styles.Width_100,styles.paddingHorizontal_20, {overflow:'hidden'}]}>

                    <Image source={require('../../assets/images/logo_sofri.png')} style={[styles.icon160 ,styles.SelfCenter , styles.marginTop_25 , styles.marginBottom_10]} resizeMode={'contain'} />
                    <Text style={[styles.textRegular , styles.text_gray , styles.textSize_16 ,styles.SelfCenter , styles.textCenter , styles.marginBottom_25 , {lineHeight:24}]}>
                        أي كلااااااام أي كلااااااام أي كلااااااام أي كلااااااام أي كلااااااام أي كلااااااام أي كلااااااام أي كلااااااام أي كلااااااام
                        أي كلااااااام أي كلااااااام أي كلااااااام أي كلااااااام أي كلااااااام أي كلااااااام أي كلااااااام أي كلااااااام أي كلااااااام
                        أي كلااااااام أي كلااااااام أي كلااااااام أي كلااااااام أي كلااااااام أي كلااااااام أي كلااااااام أي كلااااااام أي كلااااااام
                        أي كلااااااام أي كلااااااام أي كلااااااام أي كلااااااام أي كلااااااام أي كلااااااام أي كلااااااام أي كلااااااام أي كلااااااام
                    </Text>

                </View>

            </Content>
        </Container>
    );
}

export default AboutApp;


