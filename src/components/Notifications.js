import React, {useEffect, useRef, useState} from "react";
import {View, Text, Image, TouchableOpacity, Dimensions, FlatList, I18nManager} from "react-native";
import {Container, Content, Icon, Input} from 'native-base'
import styles from '../../assets/styles'
import i18n from "../../locale/i18n";
import Swiper from 'react-native-swiper';
import {useSelector, useDispatch} from 'react-redux';
import Header from '../common/Header';
import COLORS from "../consts/colors";

const height = Dimensions.get('window').height;
const isIOS = Platform.OS === 'ios';
const latitudeDelta = 0.922;
const longitudeDelta = 0.521;

function Notifications({navigation,route}) {


    // const lang = useSelector(state => state.lang.lang);
    // const token = useSelector(state => state.auth.user ? state.auth.user.data.token : null);
    const type = 'edit';

    return (
        <Container style={[styles.bg_gray]}>
            <Content contentContainerStyle={[styles.bgFullWidth , styles.bg_gray]}>

                <Header navigation={navigation} title={ i18n.t('notifications') } />

                <View style={[styles.bgFullWidth ,styles.bg_White, styles.Width_100 , styles.paddingHorizontal_20 , {overflow:'hidden' , paddingBottom:20}]}>

                    <TouchableOpacity onPress={() => navigation.navigate('offerPrice')} style={[styles.borderGray, styles.directionRow  , styles.Radius_5 , styles.marginTop_15 , styles.paddingVertical_5 , styles.paddingHorizontal_10]}>
                        <Image source={require("../../assets/images/image_placeholder.png")} style={[styles.icon45 , styles.Radius_50]} resizeMode={'cover'}/>
                        <Text style={[styles.textRegular , styles.text_gray , styles.textSize_14 , styles.writingDir , {marginLeft:10 , lineHeight:22, flex:1}]}>وصول عروض توصيل من المطعم</Text>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => navigation.navigate('restWithdrawal')} style={[styles.borderGray , styles.directionRow , styles.Radius_5 , styles.marginTop_15 , styles.paddingVertical_5 , styles.paddingHorizontal_10]}>
                        <Image source={require("../../assets/images/image_placeholder.png")} style={[styles.icon45 , styles.Radius_50]} resizeMode={'cover'}/>
                        <Text style={[styles.textRegular , styles.text_gray , styles.textSize_14 , styles.writingDir , {marginLeft:10 , lineHeight:22, flex:1}]}>انسحاب المطعم من الطلب</Text>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => navigation.navigate('orderDetails')} style={[styles.borderGray , styles.directionRow  , styles.Radius_5 , styles.marginTop_15 , styles.paddingVertical_5 , styles.paddingHorizontal_10]}>
                        <Image source={require("../../assets/images/image_placeholder.png")} style={[styles.icon45 , styles.Radius_50]} resizeMode={'cover'}/>
                        <Text style={[styles.textRegular , styles.text_gray , styles.textSize_14 , styles.writingDir , {marginLeft:10 , lineHeight:22, flex:1}]}>تم الموافقة علي الطلب من قبل الاسرة</Text>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => navigation.navigate('orderDetails')} style={[styles.borderGray , styles.directionRow , styles.Radius_5 , styles.marginTop_15 , styles.paddingVertical_5 , styles.paddingHorizontal_10]}>
                        <Image source={require("../../assets/images/image_placeholder.png")} style={[styles.icon45 , styles.Radius_50]} resizeMode={'cover'}/>
                        <Text style={[styles.textRegular , styles.text_gray , styles.textSize_14 , styles.writingDir , {marginLeft:10 , lineHeight:22 , flex:1}]}>تم توصيل الطلب من قبل المندوب سكر</Text>
                    </TouchableOpacity>

                </View>

            </Content>
        </Container>
    );
}

export default Notifications;


