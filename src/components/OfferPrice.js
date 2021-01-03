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

function OfferPrice({navigation,route}) {

    // const lang = useSelector(state => state.lang.lang);
    // const token = useSelector(state => state.auth.user ? state.auth.user.data.token : null);


    return (
        <Container style={[styles.bg_gray]}>
            <Content contentContainerStyle={[styles.bgFullWidth , styles.bg_gray]}>

                <Header navigation={navigation} title={ i18n.t('offerPrice') } />

                <View style={[styles.bgFullWidth ,styles.bg_White, styles.Width_100,styles.paddingHorizontal_20, {overflow:'hidden'}]}>

                    <View style={[styles.marginTop_10,styles.marginBottom_20]}>
                        <View style={[styles.borderGray , styles.directionRow , styles.Radius_5 , {flex:1 , padding:15}]}>
                            <View style={[styles.directionRow , {flex:1}]}>
                                <Image source={require("../../assets/images/banner1.png")} style={[styles.icon70 , styles.Radius_7]} resizeMode={'cover'} />
                                <View style={[{marginLeft:15}]}>
                                    <Text style={[styles.textRegular , styles.text_gray , styles.textSize_14 , styles.alignStart , styles.marginBottom_5]}>اسم الاسره</Text>
                                    <Text style={[styles.textRegular , styles.text_midGray , styles.textSize_14 , styles.alignStart]}>9/7/2019</Text>
                                </View>
                            </View>
                            <View style={[{borderLeftWidth:1 , borderLeftColor:'#ddd' , paddingLeft:15} , styles.heightFull , styles.centerContext]}>
                                <Text style={[styles.textRegular , styles.text_mstarda , styles.textSize_14 , styles.marginBottom_5]}>{i18n.t('orderNum') }</Text>
                                <Text style={[styles.textRegular , styles.text_gray , styles.textSize_14]}>12345</Text>
                            </View>
                        </View>
                    </View>


                    <View style={[styles.directionRowCenter , {borderBottomWidth:1 , borderColor:'#ddd' , paddingBottom:20}]}>
                        <View style={[{flex:1}]}>
                            <Text style={[styles.textRegular , styles.text_mstarda , styles.textSize_13 , styles.textCenter , styles.marginBottom_5]}>615</Text>
                            <Text style={[styles.textRegular , styles.text_gray , styles.textSize_13 , styles.textCenter]}>{ i18n.t('away') }</Text>
                        </View>
                        <View style={[styles.paddingHorizontal_10 , styles.marginHorizontal_5 , {flex:1 , borderRightWidth:1 , borderLeftWidth:1 , borderColor:'#ddd' }]}>
                            <Text style={[styles.textRegular , styles.text_mstarda , styles.textSize_13 , styles.textCenter , styles.marginBottom_5]}>45 ر.س</Text>
                            <Text style={[styles.textRegular , styles.text_gray , styles.textSize_13 , styles.textCenter]}>{ i18n.t('deliveryCost') }</Text>
                        </View>
                        <View style={[{flex:1}]}>
                            <Text style={[styles.textRegular , styles.text_mstarda , styles.textSize_13 , styles.textCenter , styles.marginBottom_5]}>ساعة</Text>
                            <Text style={[styles.textRegular , styles.text_gray , styles.textSize_13 , styles.textCenter]}>{ i18n.t('deliveryTime') }</Text>
                        </View>
                    </View>

                    <View style={[styles.flexCenter , styles.marginTop_60]}>
                        <Text style={[styles.textBold , styles.text_gray , styles.textSize_20 , styles.marginBottom_5, styles.textCenter]}>{i18n.t('priceOffered') }</Text>
                        <Text style={[styles.textBold , styles.text_mstarda , styles.textSize_20 , styles.textCenter]}>300 ر.س </Text>
                    </View>


                    <TouchableOpacity onPress={() => navigation.navigate('orderDetails', {orderType:0 , pathName:'offerPrice'})} style={[styles.mstrdaBtn , styles.Width_90 , styles.marginTop_65 , styles.SelfCenter , styles.bg_black]}>
                        <Text style={[styles.textBold , styles.text_White , styles.textSize_15]}>{ i18n.t('accept') }</Text>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => navigation.navigate('specialOrders')} style={[styles.mstrdaBtn , styles.Width_90  , styles.marginTop_15, styles.SelfCenter ]}>
                        <Text style={[styles.textBold , styles.text_White , styles.textSize_15]}>{ i18n.t('refuse') }</Text>
                    </TouchableOpacity>

                </View>

            </Content>
        </Container>
    );
}

export default OfferPrice;


