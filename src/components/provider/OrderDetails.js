import React, {useEffect, useRef, useState} from "react";
import {View, Text, Image, TouchableOpacity, Dimensions, FlatList, I18nManager} from "react-native";
import {Container, Content, Icon, Input} from 'native-base'
import styles from '../../../assets/styles'
import i18n from "../../../locale/i18n";
import Swiper from 'react-native-swiper';
import {useSelector, useDispatch} from 'react-redux';
import Header from '../../common/Header';
import COLORS from "../../consts/colors";
import Communications from 'react-native-communications';

const height = Dimensions.get('window').height;
const isIOS = Platform.OS === 'ios';
const latitudeDelta = 0.922;
const longitudeDelta = 0.521;

function OrderDetails({navigation,route}) {

    // const lang = useSelector(state => state.lang.lang);
    // const token = useSelector(state => state.auth.user ? state.auth.user.data.token : null);

    const [orderStatus, setOrderStatus] = useState(0);
    const [showDetails, setShowDetails] = useState(false);
    const [showClientDetails, setShowClientDetails] = useState(false);


    return (
        <Container style={[styles.bg_gray]}>
            <Content contentContainerStyle={[styles.bgFullWidth , styles.bg_gray]}>

                <Header navigation={navigation} title={ i18n.t('orderDetails') } />

                <View style={[styles.bgFullWidth ,styles.bg_White, styles.Width_100, {overflow:'hidden'}]}>

                    <View style={[styles.marginTop_10,styles.paddingHorizontal_20]}>
                        <View style={[styles.borderGray,styles.marginBottom_20 , styles.directionRow , styles.Radius_5 , {flex:1 , padding:10}]}>
                            <View style={[styles.directionRow , {flex:1}]}>
                                <Image source={require("../../../assets/images/banner1.png")} style={[styles.icon70 , styles.Radius_7]} resizeMode={'cover'} />
                                <View style={[styles.paddingHorizontal_10 , {flex:1}]}>
                                    <Text style={[styles.textRegular , styles.text_gray , styles.textSize_14 , styles.alignStart , styles.marginBottom_5]}>اسم الاسره</Text>
                                    <View style={[styles.directionRow , styles.marginBottom_5]}>
                                        <Icon type={'MaterialIcons'} name={'location-on'} style={[styles.textSize_12 , styles.text_mstarda , {marginRight:5}]} />
                                        <Text style={[styles.textRegular , styles.text_midGray , styles.textSize_12, {lineHeight:20}]}>السعودية - الرياض</Text>
                                    </View>
                                    <Text style={[styles.textRegular , styles.text_midGray , styles.textSize_12 , styles.alignStart]}>012345678</Text>
                                </View>
                            </View>
                            <View style={[{borderLeftWidth:1 , borderLeftColor:'#ddd' , paddingLeft:15} , styles.heightFull , styles.centerContext]}>
                                <Text style={[styles.textRegular , styles.text_mstarda , styles.textSize_14 , styles.marginBottom_5]}>{i18n.t('orderNum') }</Text>
                                <Text style={[styles.textRegular , styles.text_gray , styles.textSize_14]}>12345</Text>
                            </View>
                        </View>
                    </View>

                    <View style={[styles.bg_light_gray ,styles.paddingHorizontal_20 ,  styles.directionRow  , styles.height_45]}>
                        <Text style={[styles.textBold , styles.text_mstarda , styles.textSize_14]}>{i18n.t('followOrder') }</Text>
                    </View>
                    <View style={[styles.marginTop_20,styles.paddingHorizontal_20 , styles.Width_100]}>
                        <View style={styles.followStep}>
                            <View style={[styles.skyCircle ,
                                {backgroundColor: orderStatus === 0 || orderStatus === 1 || orderStatus === 2 || orderStatus === 3  ? COLORS.mstarda : '#fff',
                                    borderColor:  orderStatus === 0 || orderStatus === 1 || orderStatus === 2 || orderStatus === 3  ? COLORS.mstarda : COLORS.gray}]}>
                                <Icon type={'Feather'} name={'check'} style={[styles.checkCircle]} />
                            </View>
                            <Text style={[styles.textRegular , styles.text_gray , styles.textSize_14]}>{i18n.t('orderHasReceived')}</Text>
                            <View style={[styles.stepLine ,
                                {backgroundColor: orderStatus === 0 || orderStatus === 1 || orderStatus === 2 || orderStatus === 3 ? COLORS.mstarda :COLORS.gray,}]}/>
                        </View>

                        <View style={[styles.followStep ]}>
                            <View style={[styles.skyCircle ,
                                {backgroundColor:orderStatus === 1 || orderStatus === 2  || orderStatus === 3 ? COLORS.mstarda :'#fff',
                                    borderColor:orderStatus === 1 || orderStatus === 2  || orderStatus === 3 ? COLORS.mstarda :COLORS.gray}]}>
                                <Icon type={'Feather'} name={'check'} style={[styles.checkCircle]} />
                            </View>
                            <Text style={[styles.textRegular , styles.text_gray , styles.textSize_14]}>{i18n.t('prepCompleted')}</Text>
                            <View style={[styles.stepLine ,
                                {backgroundColor:orderStatus === 1 || orderStatus === 2 || orderStatus === 3 ? COLORS.mstarda :COLORS.gray,}]}/>
                        </View>

                        <View style={[styles.followStep ]}>
                            <View style={[styles.skyCircle ,
                                {backgroundColor:orderStatus === 2 || orderStatus === 3 ? COLORS.mstarda : '#fff',
                                    borderColor:orderStatus === 2 || orderStatus === 3   ? COLORS.mstarda : COLORS.gray}]}>
                                <Icon type={'Feather'} name={'check'} style={[styles.checkCircle]} />
                            </View>
                            <Text style={[styles.textRegular , styles.text_gray , styles.textSize_14]}>{i18n.t('orderDelegate')}</Text>
                            <View style={[styles.stepLine ,
                                {backgroundColor:orderStatus === 2 || orderStatus === 3 ? COLORS.mstarda :COLORS.gray,}]}/>
                        </View>

                        <View style={[styles.followStep ]}>
                            <View style={[styles.skyCircle ,
                                {backgroundColor:orderStatus === 3  ? COLORS.mstarda : '#fff',
                                    borderColor:orderStatus === 3  ? COLORS.mstarda : COLORS.gray}]}>
                                <Icon type={'Feather'} name={'check'} style={[styles.checkCircle]} />
                            </View>
                            <Text style={[styles.textRegular , styles.text_gray , styles.textSize_14]}>{i18n.t('orderSentToClient')}</Text>
                        </View>
                    </View>



                    <TouchableOpacity onPress={() => setShowDetails(!showDetails)} style={[styles.marginTop_20 , styles.bg_light_gray , styles.directionRowSpace ,styles.paddingHorizontal_20 , styles.height_45]}>
                        <Text style={[styles.textBold , showDetails ? styles.text_mstarda : styles.text_gray , styles.textSize_14 ]}>{i18n.t('orderDetails') }</Text>
                        <Icon type={'AntDesign'} name={showDetails ?  'caretup' : 'caretdown'} style={[styles.textSize_12 , showDetails ? styles.text_mstarda : styles.text_gray]} />
                    </TouchableOpacity>

                    {
                        showDetails?
                            <View style={[styles.marginTop_5]}>

                                <View style={[styles.borderGray ,styles.paddingHorizontal_20 , styles.paddingVertical_10 , styles.marginBottom_5 , styles.directionRowSpace]}>
                                    <Text style={[styles.textRegular , styles.text_gray , styles.textSize_13 , styles.writingDir , {flex:1}]}>اسم المنتج</Text>
                                    <View style={{borderLeftWidth:1 , borderColor:'#ddd' , paddingLeft:10 , marginLeft:10 }}>
                                        <Text style={[styles.textRegular , styles.text_mstarda , styles.textSize_13]}>25 ر.س</Text>
                                    </View>
                                </View>
                                <View style={[styles.borderGray ,styles.paddingHorizontal_20 , styles.paddingVertical_10 , styles.marginBottom_5 , styles.directionRowSpace]}>
                                    <Text style={[styles.textRegular , styles.text_gray , styles.textSize_13 , styles.writingDir , {flex:1}]}>اسم المنتج</Text>
                                    <View style={{borderLeftWidth:1 , borderColor:'#ddd' , paddingLeft:10 , marginLeft:10 }}>
                                        <Text style={[styles.textRegular , styles.text_mstarda , styles.textSize_13]}>25 ر.س</Text>
                                    </View>
                                </View>

                                <View style={[styles.marginTop_20 , styles.bg_light_gray ,styles.paddingHorizontal_20 , styles.directionRow  , styles.height_45]}>
                                    <Text style={[styles.textBold , styles.text_gray , styles.textSize_14]}>{i18n.t('payMethod') }</Text>
                                </View>
                                <Text style={[styles.textRegular,styles.paddingHorizontal_20 , styles.marginVertical_15 , styles.text_gray , styles.textSize_14 ,styles.alignStart]}>الدفع عند الاستلام</Text>
                                <View style={[styles.bg_light_gray ,styles.paddingHorizontal_20 ,  styles.directionRow  , styles.height_45]}>
                                    <Text style={[styles.textBold , styles.text_gray , styles.textSize_14]}>{i18n.t('deliveryDetails') }</Text>
                                </View>
                                <Text style={[styles.textRegular,styles.paddingHorizontal_20 , styles.marginVertical_15 , styles.text_gray , styles.textSize_14 , styles.alignStart]}>{i18n.t('orderLocation') }</Text>
                                <View style={[styles.directionRow,styles.paddingHorizontal_20 , styles.marginBottom_25]}>
                                    <Icon type={'MaterialIcons'} name={'location-on'} style={[styles.textSize_14 , styles.text_mstarda , {marginRight:5}]} />
                                    <Text style={[styles.textRegular , styles.text_midGray , styles.textSize_13]}>السعودية - الرياض</Text>
                                    <TouchableOpacity onPress={() =>  navigation.navigate('getLocation' , {pathName:'orderDetails'})} style={{marginLeft:5}}>
                                        <Text style={[styles.textRegular , styles.text_mstarda , styles.textSize_13]}>( { i18n.t('seeLocation') } )</Text>
                                    </TouchableOpacity>
                                </View>
                                <Text style={[styles.textRegular,styles.paddingHorizontal_20 , styles.marginBottom_15 , styles.text_gray , styles.textSize_14 , styles.alignStart]}>{i18n.t('desiredPlace') }</Text>
                                <View style={[styles.directionRow,styles.paddingHorizontal_20 , styles.marginBottom_25]}>
                                    <Icon type={'MaterialIcons'} name={'location-on'} style={[styles.textSize_14 , styles.text_mstarda , {marginRight:5}]} />
                                    <Text style={[styles.textRegular , styles.text_midGray , styles.textSize_13]}>السعودية - الرياض</Text>
                                    <TouchableOpacity onPress={() =>  navigation.navigate('getLocation' , {pathName:'orderDetails'})} style={{marginLeft:5}}>
                                        <Text style={[styles.textRegular , styles.text_mstarda , styles.textSize_13]}>( { i18n.t('seeLocation') } )</Text>
                                    </TouchableOpacity>
                                </View>
                            </View>
                            :
                             null
                    }


                    <TouchableOpacity onPress={() => setShowClientDetails(!showClientDetails)} style={[styles.marginTop_20 , styles.bg_light_gray , styles.directionRowSpace ,styles.paddingHorizontal_20 , styles.height_45]}>
                        <Text style={[styles.textBold , showClientDetails ? styles.text_mstarda : styles.text_gray , styles.textSize_14 ]}>{i18n.t('clientInfo') }</Text>
                        <Icon type={'AntDesign'} name={showClientDetails ?  'caretup' : 'caretdown'} style={[styles.textSize_12 , showClientDetails ? styles.text_mstarda : styles.text_gray]} />
                    </TouchableOpacity>

                    {
                        showClientDetails?
                            <View style={[styles.marginTop_5 ,styles.marginBottom_25]}>

                                <Text style={[styles.textRegular,styles.paddingHorizontal_20 , styles.marginVertical_15 , styles.text_gray , styles.textSize_14 ,styles.alignStart]}>{i18n.t('clientName') }</Text>

                                <View style={[styles.marginTop_5 ,styles.flexCenter , styles.bg_light_gray , styles.Width_90 ,styles.paddingHorizontal_20 , styles.directionRowSpace  , styles.height_45]}>
                                    <Text style={[styles.textRegular , styles.text_gray , styles.textSize_12]}>أماني قاسم</Text>
                                    <TouchableOpacity onPress={() => Communications.phonecall('01023456789', true)}>
                                        <Image source={require("../../../assets/images/phone-ringing.png")} style={[styles.icon17]} resizeMode={'contain'} />
                                    </TouchableOpacity>
                                </View>

                            </View>
                            :
                            null
                    }


                    {
                        orderStatus === 0 ?
                            <TouchableOpacity onPress={() => setOrderStatus(1)} style={[styles.mstrdaBtn , styles.marginVertical_35 , styles.flexCenter , styles.Width_90]}>
                                <Text style={[styles.textBold , styles.text_White , styles.textSize_15]}>{ i18n.t('orderHasReceived') }</Text>
                            </TouchableOpacity>
                            :
                            orderStatus === 1 ?
                                <TouchableOpacity onPress={() => setOrderStatus(2)} style={[styles.mstrdaBtn , styles.marginVertical_35 , styles.flexCenter , styles.Width_90]}>
                                    <Text style={[styles.textBold , styles.text_White , styles.textSize_15]}>{ i18n.t('prepCompleted') }</Text>
                                </TouchableOpacity>
                                :
                                orderStatus === 2 ?
                                    <TouchableOpacity onPress={() => setOrderStatus(3)} style={[styles.mstrdaBtn , styles.marginVertical_35 , styles.flexCenter , styles.Width_90]}>
                                        <Text style={[styles.textBold , styles.text_White , styles.textSize_15]}>{ i18n.t('orderDelegate') }</Text>
                                    </TouchableOpacity>
                                    :
                                    orderStatus === 3 ?
                                        <View style={[styles.Width_100]}>
                                            <TouchableOpacity onPress={() => navigation.navigate('orderDeliveredSuccessfully')} style={[styles.mstrdaBtn , styles.marginTop_35 , styles.marginBottom_10 , styles.flexCenter , styles.Width_90]}>
                                                <Text style={[styles.textBold , styles.text_White , styles.textSize_15]}>{ i18n.t('finish') }</Text>
                                            </TouchableOpacity>
                                            <TouchableOpacity onPress={() => navigation.navigate('home')} style={[styles.mstrdaBtn , styles.bg_gray , styles.marginBottom_35 , styles.flexCenter , styles.Width_90]}>
                                                <Text style={[styles.textBold , styles.text_White , styles.textSize_15]}>{ i18n.t('home') }</Text>
                                            </TouchableOpacity>
                                        </View>
                                        :
                                        null
                    }

                </View>

            </Content>


        </Container>
    );
}

export default OrderDetails;


