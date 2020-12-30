import React, {useEffect, useRef, useState} from "react";
import {
    View,
    Text,
    Image,
    TouchableOpacity,
    Dimensions,
    FlatList,
    I18nManager,
    KeyboardAvoidingView
} from "react-native";
import {Container, Content, Form, Icon, Input, Item, Label, Radio, Textarea} from 'native-base'
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

function Recharge({navigation,route}) {

    // const lang = useSelector(state => state.lang.lang);
    // const token = useSelector(state => state.auth.user ? state.auth.user.data.token : null);

    return (
        <Container style={[styles.bg_gray]}>
            <Content contentContainerStyle={[styles.bgFullWidth , styles.bg_gray]}>

                <Header navigation={navigation} title={ i18n.t('recharge') } />

                <View style={[styles.bgFullWidth ,styles.bg_White, styles.Width_100,styles.paddingHorizontal_20 , styles.flexCenter, {overflow:'hidden'}]}>


                    <Text style={[styles.textBold , styles.text_mstarda , styles.textSize_18 ,styles.SelfCenter , styles.marginBottom_40]}>{ i18n.t('recharge') }</Text>


                    <TouchableOpacity onPress={() => navigation.navigate('bankTransfer')} style={[styles.height_40 , styles.bg_mstarda , styles.Radius_5 , styles.Width_100, styles.centerContext , styles.marginBottom_15]}>
                        <Text style={[styles.textBold , styles.text_White , styles.textSize_15, styles.textCenter ]}>{ i18n.t('bankTransfer') }</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={[styles.height_40 , styles.bg_mstarda , styles.Radius_5 , styles.Width_100, styles.centerContext ]}>
                        <Text style={[styles.textBold , styles.text_White , styles.textSize_15, styles.textCenter ]}>{ i18n.t('online') }</Text>
                    </TouchableOpacity>


                </View>

            </Content>
        </Container>
    );
}

export default Recharge;


