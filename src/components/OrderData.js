import React, {useEffect, useRef, useState} from "react";
import {
    View,
    Text,
    Image,
    TouchableOpacity,
    Dimensions,
    FlatList,
    I18nManager,
    KeyboardAvoidingView, Platform
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
const IS_IPHONE_X 	= (height === 812 || height === 896) && Platform.OS === 'ios';
const latitudeDelta = 0.0922;
const longitudeDelta = 0.0421;

function OrderData({navigation,route}) {

    // const lang = useSelector(state => state.lang.lang);
    // const token = useSelector(state => state.auth.user ? state.auth.user.data.token : null);
    const {type} = route.params;
    const [deliveryTime, setDeliveryTime] = useState('');
    const [payType, setPayType] = useState('0');
    const [cityName, setCityName]       = useState('');

    const [isDatePickerVisible , setIsDatePickerVisible ] = useState(false);
    const [date , setDate ] = useState('');
    const [isTimePickerVisible, setTimePickerVisibility] = useState(false);
    const [time , setTime ] = useState('');

    const [mapRegion, setMapRegion]     = useState({
        latitude: null,
        longitude: null,
        latitudeDelta,
        longitudeDelta
    });


    const showDatePicker = () => {
        setIsDatePickerVisible(true);
    };

    const hideDatePicker = () => {
        setIsDatePickerVisible(false);
    };

    const handleConfirmDate = myDate => {
        // console.warn("A date has been picked: ", myDate);
        let formatted_date = myDate.getFullYear() + "-" + ("0"+(myDate.getMonth() + 1)).slice(-2) + "-" + ("0" +myDate.getDate()).slice(-2);
        hideDatePicker();
        setDate(formatted_date);
    };
    const showTimePicker = () => {
        setTimePickerVisibility(true);
    };

    const hideTimePicker = () => {
        setTimePickerVisibility(false);
    };

    const handleConfirmTime = myTime => {
        hideTimePicker();
        setTime(myTime.toLocaleTimeString());
    };


    useEffect(() => {
        const unsubscribe = navigation.addListener('focus', () => {
            if (route.params?.cityName && route.params.pathName == 'getLoc') {
                setCityName(route.params.cityName.substr(0, 40))
                setMapRegion(route.params.mapRegion)
            }else {
                setCityName('')
                setMapRegion({
                    latitude: null,
                    longitude: null,
                    latitudeDelta,
                    longitudeDelta
                })
            }
        });


        return unsubscribe;
    }, [navigation, route.params?.cityName, route.params?.pathName]);


    return (
        <Container style={[styles.bg_gray]}>
            <Content contentContainerStyle={[styles.bgFullWidth , styles.bg_gray]}>

                <Header navigation={navigation} title={ i18n.t('orderDetails') } />

                <View style={[styles.bgFullWidth ,styles.bg_White, styles.Width_100,styles.paddingHorizontal_20 , styles.paddingVertical_20, {overflow:'hidden'}]}>

                    <KeyboardAvoidingView style={[styles.Width_100]}>
                        <Form style={[styles.Width_100 , styles.flexCenter]}>

                            <Item style={[styles.item]}>
                                <Label style={[styles.label]}>{ i18n.t('deliveryLoc') }</Label>
                                <Input style={[styles.input , {paddingRight:35 , borderTopLeftRadius: 5 , borderTopRightRadius: 5 , borderRadius: 5}]}
                                       value={cityName ? cityName : ''}
                                       disabled={true}
                                />
                                <TouchableOpacity onPress={() => navigation.navigate('getLocation', { pathName: 'orderData' , latitude:mapRegion.latitude , longitude : mapRegion.longitude})} style={[{position:'absolute' , right:10  , bottom:13}]}>
                                    <Icon type={'FontAwesome'} name={"map-marker"}
                                          style={[styles.textSize_18,styles.text_gray]} />
                                </TouchableOpacity>

                            </Item>


                            {
                                type === 'meals'?

                                    <View style={[styles.Width_100]}>
                                        <Item style={[styles.item]}>
                                            <Label style={[styles.label]}>{ i18n.t('banquetDay') }</Label>
                                            <Input style={[styles.input , {paddingRight:35 , borderTopLeftRadius: 5 , borderTopRightRadius: 5 , borderRadius: 5}]}
                                                   value={date}
                                                   disabled={true}
                                            />
                                            <TouchableOpacity onPress={showDatePicker} style={[{position:'absolute' , right:10  , bottom:13}]}>
                                                <Icon type={'AntDesign'} name={"calendar"}
                                                      style={[styles.textSize_18,styles.text_mstarda]} />
                                            </TouchableOpacity>

                                            <DateTimePickerModal
                                                isVisible={isDatePickerVisible}
                                                mode="date"
                                                onConfirm={handleConfirmDate}
                                                onCancel={hideDatePicker}
                                            />

                                        </Item>

                                        <Item style={[styles.item]}>
                                            <Label style={[styles.label]}>{ i18n.t('banquetTime') }</Label>
                                            <Input style={[styles.input , {paddingRight:35 , borderTopLeftRadius: 5 , borderTopRightRadius: 5 , borderRadius: 5}]}
                                                   value={time}
                                                   disabled={true}
                                            />
                                            <TouchableOpacity onPress={showTimePicker} style={[{position:'absolute' , right:10  , bottom:13}]}>
                                                <Icon type={'AntDesign'} name={"clockcircleo"}
                                                      style={[styles.textSize_18,styles.text_mstarda]} />
                                            </TouchableOpacity>

                                            <DateTimePickerModal
                                                isVisible={isTimePickerVisible}
                                                mode="time"
                                                date={new Date()}
                                                onConfirm={handleConfirmTime}
                                                onCancel={hideTimePicker}
                                            />

                                        </Item>
                                    </View>
                                    :
                                    null

                            }



                            <Item style={[styles.item]}>
                                <Label style={[styles.label]}>{ i18n.t('deliveryTime') }</Label>
                                <Input style={[styles.input , {paddingRight:35 , borderTopLeftRadius: 5 , borderTopRightRadius: 5 , borderRadius: 5}]}
                                       onChangeText={(deliveryTime) => setDeliveryTime(deliveryTime)}
                                />

                            </Item>

                            <Text style={[styles.textRegular , styles.text_gray , styles.textSize_14 ,styles.marginBottom_25 , styles.alignStart]}>{ i18n.t('selectPayMethod') }</Text>

                            <View style={[IS_IPHONE_X ? styles.directionRowCenter : styles.rowGroup , styles.Width_100 , {flexWrap: 'wrap'}]}>

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

                            <View style={[styles.bg_lightMstarda , styles.Width_100 ,styles.paddingHorizontal_15  , styles.height_45 , styles.directionRowSpace , styles.marginTop_20]}>
                                <Text style={[styles.textBold , styles.text_mstarda , styles.textSize_14 ]}>{i18n.t('deliveryPrice') } 20 ريال</Text>
                            </View>

                            <TouchableOpacity onPress={() => navigation.navigate('orderSentSuccessfully')} style={[styles.mstrdaBtn , styles.SelfCenter , styles.marginTop_55  , styles.marginBottom_10]}>
                                <Text style={[styles.textBold , styles.text_White , styles.textSize_14]}>{ i18n.t('confirm') }</Text>
                            </TouchableOpacity>

                        </Form>
                    </KeyboardAvoidingView>


                </View>

            </Content>
        </Container>
    );
}

export default OrderData;


