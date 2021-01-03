import React, {useEffect, useRef, useState} from "react";
import {View, Text, Image, TouchableOpacity, Dimensions, FlatList, I18nManager} from "react-native";
import {Container, Content, Icon, Input} from 'native-base'
import styles from '../../assets/styles'
import i18n from "../../locale/i18n";
import Swiper from 'react-native-swiper';
import {useSelector, useDispatch} from 'react-redux';
import Header from '../common/Header';
import COLORS from "../consts/colors";
import Communications from 'react-native-communications';
import Modal from "react-native-modal";

const height = Dimensions.get('window').height;
const isIOS = Platform.OS === 'ios';
const latitudeDelta = 0.922;
const longitudeDelta = 0.521;

function SpecialOrderDetails({navigation,route}) {

    // const lang = useSelector(state => state.lang.lang);
    // const token = useSelector(state => state.auth.user ? state.auth.user.data.token : null);

    const orderType = route.params.orderType;
    const pathName = route.params.pathName ? route.params.pathName : '';

    const [orderStatus, setOrderStatus] = useState(3);
    const [showDetails, setShowDetails] = useState(false);
    const [showDelegateDetails, setShowDelegateDetails] = useState(false);
    const [showModal, setShowModal] = useState(false);

    function toggleModal () {
        setShowModal(!showModal);
    };


    return (
        <Container style={[styles.bg_gray]}>
            <Content contentContainerStyle={[styles.bgFullWidth , styles.bg_gray]}>

                <Header navigation={navigation} title={ i18n.t('orderDetails') } />

                <View style={[styles.bgFullWidth ,styles.bg_White, styles.Width_100, {overflow:'hidden'}]}>

                    <View style={[styles.marginTop_10,styles.paddingHorizontal_20]}>
                        <View style={[styles.borderGray,styles.marginBottom_20 , styles.directionRow , styles.Radius_5 , {flex:1 , padding:15}]}>
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

                    <View style={[styles.marginTop_10 , styles.directionRow , styles.bg_light_gray ,styles.paddingHorizontal_20 , styles.height_45]}>
                        <Text style={[styles.textBold , styles.text_mstarda , styles.textSize_14 ]}>{i18n.t('orderDetails') }</Text>
                    </View>

                    <View style={[styles.marginTop_5]}>

                        <Text style={[styles.textRegular , styles.text_midGray , styles.paddingHorizontal_20 , styles.textSize_13 , styles.marginTop_15 , styles.alignStart , styles.writingDir , {lineHeight:24}]}>
                            أي كلااااااام أي كلااااااام أي كلااااااام أي كلااااااام أي كلااااااام أي كلااااااام أي كلااااااام أي كلااااااام أي كلااااااام
                            أي كلااااااام أي كلااااااام أي كلااااااام أي كلااااااام أي كلااااااام أي كلااااااام أي كلااااااام أي كلااااااام أي كلااااااام
                            أي كلااااااام أي كلااااااام أي كلااااااام أي كلااااااام أي كلااااااام أي كلااااااام أي كلااااااام أي كلااااااام أي كلااااااام
                            أي كلااااااام أي كلااااااام أي كلااااااام أي كلااااااام أي كلااااااام أي كلااااااام أي كلااااااام أي كلااااااام أي كلااااااام
                        </Text>

                        <View style={[styles.marginTop_20 , styles.bg_light_gray ,styles.paddingHorizontal_20 , styles.directionRow  , styles.height_45]}>
                            <Text style={[styles.textBold , styles.text_mstarda , styles.textSize_14]}>{i18n.t('payMethod') }</Text>
                        </View>
                        <Text style={[styles.textRegular,styles.paddingHorizontal_20 , styles.marginVertical_15 , styles.text_gray , styles.textSize_14 ,styles.alignStart]}>الدفع عند الاستلام</Text>
                        <View style={[styles.bg_light_gray ,styles.paddingHorizontal_20 ,  styles.directionRow  , styles.height_45]}>
                            <Text style={[styles.textBold , styles.text_mstarda , styles.textSize_14]}>{i18n.t('deliveryDetails') }</Text>
                        </View>
                        <Text style={[styles.textRegular,styles.paddingHorizontal_20 , styles.marginVertical_15 , styles.text_gray , styles.textSize_14 , styles.alignStart]}>{i18n.t('deliveryLoc') }</Text>

                        <View style={[styles.directionRow,styles.paddingHorizontal_20 , styles.marginBottom_20]}>
                            <Icon type={'MaterialIcons'} name={'location-on'} style={[styles.textSize_14 , styles.text_mstarda , {marginRight:5}]} />
                            <Text style={[styles.textRegular , styles.text_midGray , styles.textSize_13]}>السعودية - الرياض</Text>
                            <TouchableOpacity onPress={() =>  navigation.navigate('getLocation' , {pathName:'orderDetails'})} style={{marginLeft:5}}>
                                <Text style={[styles.textRegular , styles.text_mstarda , styles.textSize_13]}>( { i18n.t('seeLocation') } )</Text>
                            </TouchableOpacity>
                        </View>

                        <Text style={[styles.textRegular,styles.paddingHorizontal_20 , styles.marginBottom_10 , styles.text_gray , styles.textSize_14 , styles.alignStart]}>{i18n.t('deliveryTime') }</Text>
                        <Text style={[styles.textRegular,styles.paddingHorizontal_20 , styles.marginBottom_25 , styles.text_midGray , styles.textSize_13 , styles.alignStart]}>9/7/2021 9:00 م</Text>

                    </View>




                </View>

            </Content>

            <TouchableOpacity onPress={() => navigation.navigate('specialOrders')} style={[styles.mstrdaBtn , styles.Width_100 , styles.Radius_0]}>
                <Text style={[styles.textBold , styles.text_White , styles.textSize_15]}>{ i18n.t('cancelOrder') }</Text>
            </TouchableOpacity>

        </Container>
    );
}

export default SpecialOrderDetails;


