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

function OrderDetails({navigation,route}) {

    // const lang = useSelector(state => state.lang.lang);
    // const token = useSelector(state => state.auth.user ? state.auth.user.data.token : null);

    const orderType = route.params.orderType;
    const pathName = route.params.pathName ? route.params.pathName : '';

    const [orderStatus, setOrderStatus] = useState(2);
    const [showDetails, setShowDetails] = useState(false);


    return (
        <Container style={[styles.bg_black]}>
            <Content contentContainerStyle={[styles.bgFullWidth , styles.bg_black]}>

                <Header navigation={navigation} title={ i18n.t('orderDetails') } />

                <View style={[styles.bgFullWidth ,styles.bg_White, styles.Width_100, {overflow:'hidden'}]}>

                    <View style={[styles.marginTop_10,styles.paddingHorizontal_20]}>
                        <View style={[styles.borderGray,styles.marginBottom_20 , styles.directionRow , styles.Radius_5 , {flex:1 , padding:15}]}>
                            <View style={[styles.directionRow , {flex:1}]}>
                                <Image source={require("../../assets/images/restu_image.png")} style={[styles.icon70 , styles.Radius_7]} resizeMode={'cover'} />
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



                    {
                        pathName !== 'orderData' ?
                            <View>
                                <View style={[styles.bg_light_gray ,styles.paddingHorizontal_20 ,  styles.directionRow  , styles.height_45]}>
                                    <Text style={[styles.textBold , styles.text_gray , styles.textSize_14]}>{i18n.t('followOrder') }</Text>
                                </View>
                                <View style={[styles.marginTop_20,styles.paddingHorizontal_20 , styles.Width_100]}>
                                    <View style={styles.followStep}>
                                        <View style={[styles.skyCircle ,
                                            {backgroundColor: orderStatus === 0 || orderStatus === 1 || orderStatus === 2 ? COLORS.mstarda : '#fff',
                                                borderColor:  orderStatus === 0 || orderStatus === 1 || orderStatus === 2 ? COLORS.mstarda : COLORS.gray}]}>
                                            <Icon type={'Feather'} name={'check'} style={[styles.checkCircle]} />
                                        </View>
                                        <Text style={[styles.textRegular , styles.text_gray , styles.textSize_14]}>{i18n.t('orderHasReceived')}</Text>
                                        <View style={[styles.stepLine ,
                                            {backgroundColor: orderStatus === 0 || orderStatus === 1 || orderStatus === 2 ? COLORS.mstarda :COLORS.gray,}]}/>
                                    </View>

                                    <View style={[styles.followStep ]}>
                                        <View style={[styles.skyCircle ,
                                            {backgroundColor:orderStatus === 1 || orderStatus === 2 ? COLORS.mstarda :'#fff',
                                                borderColor:orderStatus === 1 || orderStatus === 2 ? COLORS.mstarda :COLORS.gray}]}>
                                            <Icon type={'Feather'} name={'check'} style={[styles.checkCircle]} />
                                        </View>
                                        <Text style={[styles.textRegular , styles.text_gray , styles.textSize_14]}>{i18n.t('processOrder')}</Text>
                                        <View style={[styles.stepLine ,
                                            {backgroundColor:orderStatus === 1 || orderStatus === 2 ? COLORS.mstarda :COLORS.gray,}]}/>
                                    </View>

                                    <View style={[styles.followStep ]}>
                                        <View style={[styles.skyCircle ,
                                            {backgroundColor:orderStatus === 2  ? COLORS.mstarda : '#fff',
                                                borderColor:orderStatus === 2  ? COLORS.mstarda : COLORS.gray}]}>
                                            <Icon type={'Feather'} name={'check'} style={[styles.checkCircle]} />
                                        </View>
                                        <Text style={[styles.textRegular , styles.text_gray , styles.textSize_14]}>{i18n.t('orderReady')}</Text>
                                    </View>
                                </View>
                            </View>
                            :
                            null

                    }



                    <TouchableOpacity onPress={() => setShowDetails(!showDetails)} style={[styles.bg_light_gray , styles.directionRowSpace ,styles.paddingHorizontal_20 , styles.height_45]}>
                        <Text style={[styles.textBold , (orderStatus === 1 || orderStatus === 2)&& showDetails ? styles.text_mstarda : styles.text_gray , styles.textSize_14 ]}>{i18n.t('orderDetails') }</Text>
                        <Icon type={'AntDesign'} name={(orderStatus === 1 || orderStatus === 2) && showDetails ?  'caretup' : 'caretdown'} style={[styles.textSize_12 , (orderStatus === 1 || orderStatus === 2)&& showDetails ? styles.text_mstarda : styles.text_gray]} />
                    </TouchableOpacity>

                    {
                        (orderStatus === 1 || orderStatus === 2) && showDetails?
                            <View style={[styles.marginTop_20]}>
                                <Text style={[styles.textRegular , styles.text_midGray , styles.textSize_13,styles.paddingHorizontal_20 , styles.marginBottom_20 , styles.alignStart , styles.writingDir , {lineHeight:24}]}>
                                    أي كلااااااام أي كلااااااام أي كلااااااام أي كلااااااام أي كلااااااام أي كلااااااام أي كلااااااام أي كلااااااام أي كلااااااام
                                    أي كلااااااام أي كلااااااام أي كلااااااام أي كلااااااام أي كلااااااام أي كلااااااام أي كلااااااام أي كلااااااام أي كلااااااام
                                    أي كلااااااام أي كلااااااام أي كلااااااام أي كلااااااام أي كلااااااام أي كلااااااام أي كلااااااام أي كلااااااام أي كلااااااام
                                </Text>
                                <View style={[styles.bg_light_gray ,styles.paddingHorizontal_20 , styles.directionRow  , styles.height_45]}>
                                    <Text style={[styles.textBold , styles.text_mstarda , styles.textSize_14]}>{i18n.t('payMethod') }</Text>
                                </View>
                                <Text style={[styles.textRegular,styles.paddingHorizontal_20 , styles.marginVertical_15 , styles.text_gray , styles.textSize_14 ,styles.alignStart]}>الدفع عند الاستلام</Text>
                                <View style={[styles.bg_light_gray ,styles.paddingHorizontal_20 ,  styles.directionRow  , styles.height_45]}>
                                    <Text style={[styles.textBold , styles.text_mstarda , styles.textSize_14]}>الاستلام من المطعم</Text>
                                </View>
                                <Text style={[styles.textRegular,styles.paddingHorizontal_20 , styles.marginVertical_15 , styles.text_gray , styles.textSize_14 , styles.alignStart]}>{i18n.t('storeLocation') }</Text>
                                <View style={[styles.directionRow,styles.paddingHorizontal_20 , styles.marginBottom_15]}>
                                    <Icon type={'MaterialIcons'} name={'location-on'} style={[styles.textSize_14 , styles.text_mstarda , {marginRight:5}]} />
                                    <Text style={[styles.textRegular , styles.text_midGray , styles.textSize_13]}>السعودية - الرياض</Text>
                                    <TouchableOpacity onPress={() =>  navigation.navigate('getLocation' , {pathName:'OrderDetails'})} style={{marginLeft:5}}>
                                        <Text style={[styles.textRegular , styles.text_mstarda , styles.textSize_13]}>( { i18n.t('seeLocation') } )</Text>
                                    </TouchableOpacity>
                                </View>
                            </View>
                            :
                             null
                    }

                    {
                        orderType === 2 ?
                            <TouchableOpacity onPress={() => navigation.navigate('basketDetails')} style={[styles.mstrdaBtn , styles.Width_90 , styles.marginTop_55 , styles.SelfCenter , styles.marginBottom_25 ]}>
                                <Text style={[styles.textBold , styles.text_White , styles.textSize_15]}>{ i18n.t('resend') }</Text>
                            </TouchableOpacity>
                            :
                            null
                    }

                </View>

            </Content>

            {
                (orderStatus === 0 && orderType !== 2) || pathName === 'orderData'?
                    <TouchableOpacity onPress={() => navigation.navigate('myOrders')} style={[styles.mstrdaBtn , styles.Width_100 , styles.Radius_0]}>
                        <Text style={[styles.textBold , styles.text_White , styles.textSize_15]}>{ i18n.t('cancelOrder') }</Text>
                    </TouchableOpacity>
                    :
                    orderStatus === 2 && orderType !== 2?
                        <TouchableOpacity onPress={() => navigation.navigate('addUrRate')} style={[styles.mstrdaBtn , styles.Width_100 , styles.Radius_0]}>
                            <Text style={[styles.textBold , styles.text_White , styles.textSize_15]}>{ i18n.t('addUrRate') }</Text>
                        </TouchableOpacity>
                        : null
            }
        </Container>
    );
}

export default OrderDetails;


