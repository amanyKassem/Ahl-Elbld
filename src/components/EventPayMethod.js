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
import {Container, Content, Form, Icon, Input , Item, Label} from 'native-base'
import styles from '../../assets/styles'
import i18n from "../../locale/i18n";
import Swiper from 'react-native-swiper';
import {useSelector, useDispatch} from 'react-redux';
import Header from '../common/Header';
import COLORS from "../consts/colors";
import DateTimePickerModal from "react-native-modal-datetime-picker";

const height = Dimensions.get('window').height;
const isIOS = Platform.OS === 'ios';
const latitudeDelta = 0.0922;
const longitudeDelta = 0.0421;

function EventPayMethod({navigation,route}) {

    // const lang = useSelector(state => state.lang.lang);
    // const token = useSelector(state => state.auth.user ? state.auth.user.data.token : null);
    const [payType, setPayType] = useState('0');

    return (
        <Container style={[styles.bg_black]}>
            <Content contentContainerStyle={[styles.bgFullWidth , styles.bg_black]}>

                <Header navigation={navigation} title={ i18n.t('orderDetails') } />

                <View style={[styles.bgFullWidth ,styles.bg_White, styles.Width_100,styles.paddingHorizontal_20 , styles.paddingVertical_20, {overflow:'hidden'}]}>

                    <Text style={[styles.textRegular , styles.text_gray , styles.textSize_14 ,styles.marginBottom_25 , styles.alignStart]}>{ i18n.t('selectPayMethod') }</Text>

                    <View style={[styles.rowGroup , styles.Width_100]}>

                        <TouchableOpacity onPress={() => setPayType('0')} style={[payType === '0' ?styles.bg_light_gray : null, styles.marginBottom_10  , styles.Radius_10 , styles.overHidden , styles.width_90 , styles.height_70 , styles.centerContext]}>
                            <Image source={require('../../assets/images/money_cash.png')} style={[styles.icon50 ]} resizeMode={'contain'} />
                        </TouchableOpacity>

                        <TouchableOpacity onPress={() => setPayType('1')} style={[payType === '1' ?styles.bg_light_gray : null, styles.marginBottom_10  , styles.Radius_10 , styles.overHidden , styles.width_90 , styles.height_70 , styles.centerContext]}>
                            <Image source={require('../../assets/images/mastercard.png')} style={[styles.icon50 ]} resizeMode={'contain'} />
                        </TouchableOpacity>

                        <TouchableOpacity onPress={() => setPayType('2')} style={[payType === '2' ?styles.bg_light_gray : null, styles.marginBottom_10  , styles.Radius_10 , styles.overHidden , styles.width_90 , styles.height_70 , styles.centerContext]}>
                            <Image source={require('../../assets/images/mada.png')} style={[styles.icon50 ]} resizeMode={'contain'} />
                        </TouchableOpacity>

                        <TouchableOpacity onPress={() => setPayType('3')} style={[payType === '3' ?styles.bg_light_gray : null, styles.marginBottom_10  , styles.Radius_10 , styles.overHidden , styles.width_90 , styles.height_70 , styles.centerContext]}>
                            <Image source={require('../../assets/images/sdad.png')} style={[styles.icon50 ]} resizeMode={'contain'} />
                        </TouchableOpacity>

                        <TouchableOpacity onPress={() => setPayType('4')} style={[payType === '4' ?styles.bg_light_gray : null, styles.marginBottom_10  , styles.Radius_10 , styles.overHidden , styles.width_90 , styles.height_70 , styles.centerContext]}>
                            <Image source={require('../../assets/images/ktaf.png')} style={[styles.icon50 ]} resizeMode={'contain'} />
                        </TouchableOpacity>

                        <TouchableOpacity onPress={() => setPayType('5')} style={[payType === '5' ?styles.bg_light_gray : null, styles.marginBottom_10  , styles.Radius_10 , styles.overHidden , styles.width_90 , styles.height_70 , styles.centerContext]}>
                            <Image source={require('../../assets/images/stc_pay.png')} style={[styles.icon50 ]} resizeMode={'contain'} />
                        </TouchableOpacity>

                    </View>


                    <TouchableOpacity onPress={() => navigation.navigate('eventSentSuccessfully')} style={[styles.mstrdaBtn , styles.SelfCenter , styles.marginTop_55  , styles.marginBottom_10]}>
                        <Text style={[styles.textBold , styles.text_White , styles.textSize_14]}>{ i18n.t('confirm') }</Text>
                    </TouchableOpacity>


                </View>

            </Content>
        </Container>
    );
}

export default EventPayMethod;


