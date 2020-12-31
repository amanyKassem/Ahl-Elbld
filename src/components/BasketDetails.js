import React, {useEffect, useRef, useState} from "react";
import {View, Text, Image, TouchableOpacity, Dimensions, FlatList, I18nManager} from "react-native";
import {Container, Content, Form, Icon, Input, Item} from 'native-base'
import styles from '../../assets/styles'
import i18n from "../../locale/i18n";
import Swiper from 'react-native-swiper';
import {useSelector, useDispatch} from 'react-redux';
import Header from '../common/Header';
import BasketProduct from './BasketProduct';
import COLORS from "../consts/colors";
import StarRating from "react-native-star-rating";

const height = Dimensions.get('window').height;
const isIOS = Platform.OS === 'ios';
const latitudeDelta = 0.922;
const longitudeDelta = 0.521;

function BasketDetails({navigation,route}) {

    // const lang = useSelector(state => state.lang.lang);
    // const token = useSelector(state => state.auth.user ? state.auth.user.data.token : null);

    const myOrders =[
        {id :'0',name:'اسم المنتج' ,count:'1'  , price:'25 ر.س' },
        {id :'1',name:'اسم المنتج' ,count:'2'  , price:'25 ر.س' },
        {id :'2',name:'اسم المنتج' ,count:'3'  , price:'25 ر.س' },
    ]

    const [coupon, setCoupon] = useState('');

    return (
        <Container style={[styles.bg_gray]}>
            <Content contentContainerStyle={[styles.bgFullWidth , styles.bg_gray]}>

                <Header navigation={navigation} title={ i18n.t('basket') } />

                <View style={[styles.bgFullWidth ,styles.bg_White, styles.Width_100, {overflow:'hidden'}]}>

                    <View style={[styles.borderGray,styles.marginVertical_10 , styles.directionRow , styles.Radius_5 , {padding:10}]}>
                        <Image source={require("../../assets/images/banner1.png")} style={[styles.icon50 , styles.Radius_7]} resizeMode={'cover'} />
                        <View style={[{marginLeft:15 , flex:1}]}>
                            <Text style={[styles.textRegular , styles.text_gray , styles.textSize_14 , styles.alignStart]}>مقدم الخدمة</Text>
                            <View style={[styles.directionRow , styles.marginTop_5]}>
                                <Icon type={'MaterialIcons'} name={'location-on'} style={[styles.textSize_14 , styles.text_mstarda , {marginRight:5}]} />
                                <Text style={[styles.textRegular , styles.text_midGray , styles.textSize_13, {lineHeight:20}]}>الرياض - السعودية</Text>
                            </View>
                        </View>
                    </View>


                    <View style={[styles.bg_light_gray ,styles.paddingHorizontal_20 , styles.height_45 , styles.marginBottom_5 , styles.directionRow]}>
                        <Text style={[styles.textBold , styles.text_mstarda , styles.textSize_14 ]}>{i18n.t('products') }</Text>
                    </View>

                    {
                        myOrders.map((pro, i) => {
                            return (
                                <BasketProduct key={i} pro={pro} i={i} />
                            )
                        })
                    }


                    <View style={[styles.directionRow ,styles.bg_black ,styles.paddingHorizontal_20 , styles.height_45 , styles.marginTop_20 , styles.marginBottom_10]}>
                        <Image source={require('../../assets/images/percentage.png')} style={[styles.icon25 , {marginRight:15}]} resizeMode={'contain'} />
                        <Text style={[styles.textBold , styles.text_White , styles.textSize_14]}>{i18n.t('addCoupon') }</Text>
                    </View>

                    <Item style={[styles.item , styles.Width_90 , styles.SelfCenter]}>
                        <Input style={[styles.input , {borderTopRightRadius :25 ,borderTopLeftRadius :25 , borderColor:coupon ? COLORS.mstarda : '#eee', borderWidth:1 , backgroundColor:coupon ? '#fff' : '#eee'}]}
                               placeholder={ i18n.t('discountCode') }
                               placeholderTextColor={COLORS.midGray}
                               onChangeText={(coupon) => setCoupon(coupon)}
                               value={coupon}
                        />
                    </Item>

                    <View style={[styles.directionRowSpace , styles.paddingHorizontal_20 , styles.bg_light_gray , styles.marginBottom_5, styles.height_45 ]}>
                        <Text style={[styles.textBold , styles.text_gray , styles.textSize_14]}> {i18n.t('total') } </Text>
                        <Text style={[styles.textBold , styles.text_gray , styles.linethrough , styles.textSize_14]}>233 ر.س</Text>
                    </View>

                    <View style={[styles.directionRowSpace , styles.paddingHorizontal_20 , styles.bg_mstarda, styles.height_45 ]}>
                        <Text style={[styles.textBold , styles.text_White , styles.textSize_14]}> {i18n.t('discPrice') } </Text>
                        <Text style={[styles.textBold , styles.text_White , styles.textSize_14]}>233 ر.س</Text>
                    </View>

                    <TouchableOpacity onPress={() => navigation.navigate('orderData')} style={[styles.mstrdaBtn , styles.Width_90 , styles.SelfCenter  , styles.marginTop_40 , styles.marginBottom_25]}>
                        <Text style={[styles.textBold , styles.text_White , styles.textSize_15]}>{ i18n.t('confirm') }</Text>
                    </TouchableOpacity>

                </View>

            </Content>
        </Container>
    );
}

export default BasketDetails;


