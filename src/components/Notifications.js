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
        <Container style={[styles.bg_black]}>
            <Content contentContainerStyle={[styles.bgFullWidth , styles.bg_black]}>

                <Header navigation={navigation} title={ i18n.t('notifications') } />

                <View style={[styles.bgFullWidth ,styles.bg_White, styles.Width_100 , styles.paddingHorizontal_20 , {overflow:'hidden' , paddingBottom:20}]}>


                    <View style={[styles.borderGray , styles.Radius_5 , styles.marginTop_15 , styles.paddingVertical_5 , styles.paddingHorizontal_10]}>
                        <View style={[styles.directionRow]}>
                            <Image source={require("../../assets/images/image_placeholder.png")} style={[styles.icon45 , styles.Radius_50]} resizeMode={'cover'}/>
                            <View style={[styles.directionRow]}>
                                <Text style={[styles.textRegular , styles.text_gray , styles.textSize_14 , {marginLeft:10}]}>تم قبول الطلب</Text>
                            </View>
                        </View>
                    </View>


                    <View style={[styles.borderGray , styles.Radius_5 , styles.marginTop_15 , styles.paddingVertical_5 , styles.paddingHorizontal_10]}>
                        <View style={[styles.directionRow]}>
                            <Image source={require("../../assets/images/image_placeholder.png")} style={[styles.icon45 , styles.Radius_50]} resizeMode={'cover'}/>
                            <View style={[styles.directionRow]}>
                                <Text style={[styles.textRegular , styles.text_gray , styles.textSize_14 , {marginLeft:10}]}>تم تعديل الطلب</Text>
                                {
                                    type === 'edit' ?
                                        <TouchableOpacity>
                                            <Text style={[styles.textRegular , styles.text_mstarda , styles.textSize_14 , {marginLeft:10}]}>( { i18n.t('watchUrOrder') } )</Text>
                                        </TouchableOpacity>
                                        :
                                        null
                                }
                            </View>
                        </View>

                        {
                            type === 'edit' ?
                                <View style={[styles.directionRow , styles.Width_70 , styles.flexCenter  , styles.marginTop_10 , styles.marginBottom_20]}>
                                    <TouchableOpacity onPress={() => navigation.navigate('myOrders')} style={[styles.mstrdaBtn , styles.Width_50 , {marginRight:20}]}>
                                        <Text style={[styles.textBold , styles.text_White , styles.textSize_13]}>{ i18n.t('confirmOrder') }</Text>
                                    </TouchableOpacity>
                                    <TouchableOpacity onPress={() => navigation.navigate('myOrders')} style={[styles.mstrdaBtn , styles.Width_50 , styles.bg_black]}>
                                        <Text style={[styles.textBold , styles.text_White , styles.textSize_13]}>{ i18n.t('cancelOrder') }</Text>
                                    </TouchableOpacity>
                                </View>
                                :
                                null
                        }

                    </View>

                    <TouchableOpacity onPress={() => navigation.navigate('offerPrice')} style={[styles.borderGray , styles.Radius_5 , styles.marginTop_15 , styles.paddingVertical_5 , styles.paddingHorizontal_10]}>
                        <View style={[styles.directionRow]}>
                            <Image source={require("../../assets/images/image_placeholder.png")} style={[styles.icon45 , styles.Radius_50]} resizeMode={'cover'}/>
                            <View style={[styles.directionRow]}>
                                <Text style={[styles.textRegular , styles.text_gray , styles.textSize_14 , {marginLeft:10}]}>تم ارسال سعر 122 مقابل طلبك الخاص</Text>
                            </View>
                        </View>
                    </TouchableOpacity>

                    <View style={[styles.borderGray , styles.Radius_5 , styles.marginTop_15 , styles.paddingVertical_5 , styles.paddingHorizontal_10]}>
                        <View style={[styles.directionRow]}>
                            <Image source={require("../../assets/images/image_placeholder.png")} style={[styles.icon45 , styles.Radius_50]} resizeMode={'cover'}/>
                            <View style={[styles.directionRow]}>
                                <Text style={[styles.textRegular , styles.text_gray , styles.textSize_14 , {marginLeft:10}]}>تم قبول الطلب</Text>
                            </View>
                        </View>
                    </View>

                </View>

            </Content>
        </Container>
    );
}

export default Notifications;


