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
import {Container, Content, Form, Icon, Input, Item, Label, Radio, Textarea} from 'native-base'
import styles from '../../../assets/styles'
import i18n from "../../../locale/i18n";
import Swiper from 'react-native-swiper';
import {useSelector, useDispatch} from 'react-redux';
import Header from '../../common/Header';
import COLORS from "../../consts/colors";
import StarRating from "react-native-star-rating";

const height = Dimensions.get('window').height;
const isIOS = Platform.OS === 'ios';
const latitudeDelta = 0.922;
const longitudeDelta = 0.521;

function BankTransfer({navigation,route}) {

    // const lang = useSelector(state => state.lang.lang);
    // const token = useSelector(state => state.auth.user ? state.auth.user.data.token : null);
    const title = route.params.title;

    const [bankName, setBankName] = useState('');
    const [accHolderName, setAccHolderName] = useState('');
    const [accNum, setAccNum] = useState('');
    const [amountToBeCharged, setAmountToBeCharged] = useState('');

    function renderSubmit() {
        if (bankName == '' || accHolderName == '' || accNum == ''  || amountToBeCharged == '' ) {
            return (
                <View
                    style={[styles.mstrdaBtn , styles.Width_100  , styles.marginBottom_20 , styles.marginTop_40 , styles.Radius_5 , {
                        backgroundColor:'#ddd'
                    }]}
                >
                    <Text style={[styles.textBold , styles.text_gray , styles.textSize_14]}>{ i18n.t('send') }</Text>
                </View>
            );
        }

        return (
            <TouchableOpacity
                onPress={() => onConfirm()} style={[styles.mstrdaBtn , styles.Width_100 , styles.marginBottom_20 , styles.marginTop_40 , styles.Radius_5 ]}>
                <Text style={[styles.textBold , styles.text_White , styles.textSize_14]}>{ i18n.t('send') }</Text>
            </TouchableOpacity>
        );
    }

    function onConfirm() {
        navigation.navigate('wallet')
    }

    return (
        <Container style={[styles.bg_gray]}>
            <Content contentContainerStyle={[styles.bgFullWidth , styles.bg_gray]}>

                <Header navigation={navigation} title={ i18n.t('bankTransfer') } />

                <View style={[styles.bgFullWidth ,styles.bg_White, styles.Width_100,styles.paddingHorizontal_20 , styles.alignCenter, {overflow:'hidden'}]}>

                    <View style={[styles.Width_100]}>
                        <View style={[styles.bg_gray , styles.paddingHorizontal_20 , styles.paddingVertical_15 , styles.Width_100 , styles.marginTop_25 , styles.Radius_10]}>

                            <Text style={[styles.textBold , styles.text_White , styles.textSize_13 , styles.alignStart]}>{ i18n.t('accName') } : اوامر الشبكة</Text>
                            <Text style={[styles.textBold , styles.text_White , styles.textSize_13 , styles.marginTop_10 , styles.alignStart]}>{ i18n.t('bankName') } : CIB</Text>
                            <Text style={[styles.textBold , styles.text_White , styles.textSize_13 , styles.marginTop_10 , styles.alignStart]}>{ i18n.t('accNum') } : 12345</Text>
                            <Text style={[styles.textBold , styles.text_White , styles.textSize_13 , styles.marginTop_10 , styles.alignStart]}>12345 : { i18n.t('iabn') }</Text>

                        </View>
                        <KeyboardAvoidingView style={[styles.Width_100 , styles.marginTop_20 , styles.marginBottom_10]}>
                            <Form style={[styles.Width_100 , styles.flexCenter]}>

                                <Item style={[styles.item , {marginBottom:0}]}>
                                    <Input style={[styles.input  , { borderTopLeftRadius:20 ,borderTopRightRadius:20 ,
                                        borderColor:bankName ? COLORS.mstarda : '#eee', borderWidth:1 , backgroundColor:bankName ? '#fff' : '#eee'}]}
                                           placeholder={ i18n.t('bankName') }
                                           placeholderTextColor={COLORS.midGray}
                                           onChangeText={(bankName) => setBankName(bankName)}
                                           value={bankName}
                                    />
                                </Item>

                                <Item style={[styles.item , {marginBottom:0}]}>
                                    <Input style={[styles.input , {borderTopLeftRadius:20 ,borderTopRightRadius:20 ,
                                        borderColor:accHolderName ? COLORS.mstarda : '#eee', borderWidth:1 , backgroundColor:accHolderName ? '#fff' : '#eee'}]}
                                           placeholder={ i18n.t('accHolderName') }
                                           placeholderTextColor={COLORS.midGray}
                                           onChangeText={(accHolderName) => setAccHolderName(accHolderName)}
                                           value={accHolderName}
                                    />
                                </Item>

                                <Item style={[styles.item , {marginBottom:0}]}>
                                    <Input style={[styles.input , {borderTopLeftRadius:20 ,borderTopRightRadius:20 ,
                                        borderColor:accNum ? COLORS.mstarda : '#eee', borderWidth:1 , backgroundColor:accNum ? '#fff' : '#eee'}]}
                                           placeholder={ i18n.t('accNum') }
                                           placeholderTextColor={COLORS.midGray}
                                           onChangeText={(accNum) => setAccNum(accNum)}
                                           value={accNum}
                                    />
                                </Item>

                                <Item style={[styles.item , {marginBottom:0}]}>
                                    <Input style={[styles.input  , {borderTopLeftRadius:20 ,borderTopRightRadius:20 ,
                                        borderColor:amountToBeCharged ? COLORS.mstarda : '#eee', borderWidth:1 , backgroundColor:amountToBeCharged ? '#fff' : '#eee'}]}
                                           placeholder={ i18n.t('amountToBeCharged') }
                                           placeholderTextColor={COLORS.midGray}
                                           onChangeText={(amountToBeCharged) => setAmountToBeCharged(amountToBeCharged)}
                                           value={amountToBeCharged}
                                           keyboardType={'number-pad'}
                                    />
                                </Item>

                                {renderSubmit()}

                            </Form>
                        </KeyboardAvoidingView>
                    </View>


                </View>

            </Content>
        </Container>
    );
}

export default BankTransfer;


