import React, {useEffect, useRef, useState} from "react";
import {View, Text, Image, TouchableOpacity, Dimensions, FlatList, I18nManager} from "react-native";
import {Container, Content, Icon, Input, Radio} from 'native-base'
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

function PayMethods({navigation,route}) {

    // const lang = useSelector(state => state.lang.lang);
    // const token = useSelector(state => state.auth.user ? state.auth.user.data.token : null);
    const [payMethod, setPayMethod] = useState('0');


    return (
        <Container style={[styles.bg_black]}>
            <Content contentContainerStyle={[styles.bgFullWidth , styles.bg_black]}>

                <Header navigation={navigation} title={ i18n.t('payMethods') } />

                <View style={[styles.bgFullWidth ,styles.bg_White, styles.Width_100,styles.paddingHorizontal_20, {overflow:'hidden'}]}>

                    <View style={[styles.bg_lightMstarda,styles.paddingHorizontal_15 , styles.directionRow  , styles.height_45 , styles.marginVertical_20]}>
                        <Text style={[styles.textBold , styles.text_mstarda , styles.textSize_14 ]}>سيتم الاستلام من المطعم</Text>
                    </View>

                    <Text style={[styles.textBold , styles.text_gray , styles.textSize_14 , styles.alignStart]}>{ i18n.t('selectPayMethod') }</Text>

                    <View style={[styles.Width_100 , styles.marginTop_20]}>
                        <TouchableOpacity onPress={() => setPayMethod('0')} style={[styles.directionRow , styles.marginBottom_10]}>
                            <Radio
                                color={payMethod === '0' ? COLORS.mstarda : COLORS.midGray}
                                selectedColor={COLORS.mstarda}
                                selected={payMethod === '0'}
                                onPress={() => setPayMethod('0')}
                            />
                            <Text style={[styles.textRegular , payMethod === '0' ? styles.text_mstarda : styles.text_gray , styles.textSize_14 , {marginLeft:10}]}>{ i18n.t('recievePay') }</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => setPayMethod('1')} style={[styles.directionRow , styles.marginBottom_10]}>
                            <Radio
                                color={payMethod === '1' ? COLORS.mstarda : COLORS.midGray}
                                selectedColor={COLORS.mstarda}
                                selected={payMethod === '1'}
                                onPress={() => setPayMethod('1')}
                            />
                            <Text style={[styles.textRegular , payMethod === '1' ? styles.text_mstarda : styles.text_gray , styles.textSize_14 , {marginLeft:10}]}>{ i18n.t('byVisa') }</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => setPayMethod('2')} style={[styles.directionRow , styles.marginBottom_10]}>
                            <Radio
                                color={payMethod === '2' ? COLORS.mstarda : COLORS.midGray}
                                selectedColor={COLORS.mstarda}
                                selected={payMethod === '2'}
                                onPress={() => setPayMethod('2')}
                            />
                            <Text style={[styles.textRegular , payMethod === '2' ? styles.text_mstarda : styles.text_gray , styles.textSize_14 , {marginLeft:10}]}>{ i18n.t('byWallet') }</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => setPayMethod('3')} style={[styles.directionRow , styles.marginBottom_10]}>
                            <Radio
                                color={payMethod === '3' ? COLORS.mstarda : COLORS.midGray}
                                selectedColor={COLORS.mstarda}
                                selected={payMethod === '3'}
                                onPress={() => setPayMethod('3')}
                            />
                            <Text style={[styles.textRegular , payMethod === '3' ? styles.text_mstarda : styles.text_gray , styles.textSize_14 , {marginLeft:10}]}>{ i18n.t('byMada') }</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => setPayMethod('4')} style={[styles.directionRow , styles.marginBottom_10]}>
                            <Radio
                                color={payMethod === '4' ? COLORS.mstarda : COLORS.midGray}
                                selectedColor={COLORS.mstarda}
                                selected={payMethod === '4'}
                                onPress={() => setPayMethod('4')}
                            />
                            <Text style={[styles.textRegular , payMethod === '4' ? styles.text_mstarda : styles.text_gray , styles.textSize_14 , {marginLeft:10}]}>{ i18n.t('byApple') }</Text>
                        </TouchableOpacity>

                        <TouchableOpacity onPress={() => navigation.navigate('waitingOrder')} style={[styles.mstrdaBtn , styles.Width_100 , styles.SelfCenter  , styles.marginTop_40 , styles.marginBottom_25]}>
                            <Text style={[styles.textBold , styles.text_White , styles.textSize_15]}>{ i18n.t('confirm') }</Text>
                        </TouchableOpacity>

                    </View>

                </View>

            </Content>
        </Container>
    );
}

export default PayMethods;


