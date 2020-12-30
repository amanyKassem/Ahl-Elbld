import React, {useEffect, useRef, useState} from "react";
import {
    View,
    Text,
    Image,
    TouchableOpacity,
    Dimensions,
    Linking,
    I18nManager,
    KeyboardAvoidingView
} from "react-native";
import {Container, Content, Form, Icon, Input, Item, Label, Textarea} from 'native-base'
import styles from '../../assets/styles'
import i18n from "../../locale/i18n";
import Header from '../common/Header';
import COLORS from "../consts/colors";
import * as ImagePicker from 'expo-image-picker';
import * as Permissions from 'expo-permissions';
import  Modal  from "react-native-modal";

const height = Dimensions.get('window').height;
const isIOS = Platform.OS === 'ios';
const latitudeDelta = 0.922;
const longitudeDelta = 0.521;

function ContactUs({navigation,route}) {

    // const lang = useSelector(state => state.lang.lang);
    // const token = useSelector(state => state.auth.user ? state.auth.user.data.token : null);

    const [username, setUsername] = useState('');

    const [phone, setPhone] = useState('');

    const [msg, setMsg] = useState('');

    function renderSubmit() {
        if (phone == '' || username == '' || msg == '' ) {
            return (
                <View
                    style={[styles.mstrdaBtn , styles.Width_100  , styles.marginBottom_20 , {
                        backgroundColor:'#ddd'
                    }]}
                >
                    <Text style={[styles.textBold , styles.text_gray , styles.textSize_15]}>{ i18n.t('send') }</Text>
                </View>
            );
        }

        return (
            <TouchableOpacity
                onPress={() => onConfirm()} style={[styles.mstrdaBtn , styles.Width_100 , styles.marginBottom_20]}>
                <Text style={[styles.textBold , styles.text_White , styles.textSize_15]}>{ i18n.t('send') }</Text>
            </TouchableOpacity>
        );
    }

    function onConfirm() {
        navigation.navigate('home')
    }


    return (
        <Container style={[styles.bg_black]}>
            <Content contentContainerStyle={[styles.bgFullWidth , styles.bg_black]}>

                <Header navigation={navigation} title={ i18n.t('contactUs') } />

                <View style={[styles.bgFullWidth ,styles.bg_White, styles.Width_100,styles.paddingHorizontal_20, {overflow:'hidden'}]}>

                    <Text style={[styles.textBold , styles.text_mstarda , styles.textSize_20 ,styles.SelfCenter , styles.marginTop_25]}>{ i18n.t('sendMsg') }</Text>

                    <KeyboardAvoidingView style={[styles.Width_100 , styles.marginTop_35 , styles.marginBottom_10]}>
                        <Form style={[styles.Width_100 , styles.flexCenter]}>

                            <Item style={[styles.item]}>
                                <Label style={[styles.label]}>{ i18n.t('username') }</Label>
                                <Input style={[styles.input , {borderTopRightRadius :25 ,borderTopLeftRadius :25 , borderColor:username ? COLORS.mstarda : '#eee', borderWidth:1 , backgroundColor:username ? '#fff' : '#eee'}]}
                                       onChangeText={(username) => setUsername(username)}
                                       value={username}
                                />
                            </Item>

                            <Item style={[styles.item]}>
                                <Label style={[styles.label]}>{ i18n.t('phone') }</Label>
                                <Input style={[styles.input , {borderTopRightRadius :25 ,borderTopLeftRadius :25 , borderColor:phone ? COLORS.mstarda : '#eee', borderWidth:1 , backgroundColor:phone ? '#fff' : '#eee'}]}
                                       onChangeText={(phone) => setPhone(phone)}
                                       value={phone}
                                />
                            </Item>

                            <Item style={[styles.item]}>
                                <Label style={[styles.label]}>{ i18n.t('message') }</Label>
                                <Textarea
                                    style={[styles.input , styles.height_150 , styles.paddingVertical_10 ,
                                        {borderTopRightRadius :10 ,borderTopLeftRadius :10 , borderRadius :10  , borderColor:msg ? COLORS.mstarda : '#eee',
                                            borderWidth:1 , backgroundColor:msg ? '#fff' : '#eee' , lineHeight:22}]}
                                    onChangeText={(msg) => setMsg(msg)}
                                    value={msg}
                                />
                            </Item>

                            {renderSubmit()}

                        </Form>
                    </KeyboardAvoidingView>

                    <Text style={[styles.textBold , styles.text_mstarda , styles.textSize_16 ,styles.SelfCenter , styles.marginBottom_25 ]}>{ i18n.t('throughSocial') }</Text>

                    <View style={[styles.directionRowSpace , styles.Width_70 , styles.SelfCenter , styles.marginBottom_40]}>
                        <TouchableOpacity onPress={() => Linking.openURL('https://wwww.telegram.com')}>
                            <Image source={require('../../assets/images/telegram.png')} style={[styles.icon33 , styles.Radius_50]} />
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => Linking.openURL('https://wwww.facebook.com')}>
                            <Image source={require('../../assets/images/facebook.png')} style={[styles.icon33 , styles.Radius_50]} />
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => Linking.openURL('https://wwww.twitter.com')}>
                            <Image source={require('../../assets/images/twitter.png')} style={[styles.icon33 , styles.Radius_50]} />
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => Linking.openURL('https://wwww.instagram.com')}>
                            <Image source={require('../../assets/images/instagram.png')} style={[styles.icon33 , styles.Radius_50]} />
                        </TouchableOpacity>
                        {/*<TouchableOpacity onPress={() => Linking.openURL('https://api.whatsapp.com/send?phone='+'01023456789')}>*/}
                        {/*    <Image source={require('../../assets/images/whatsapp.png')} style={[styles.icon33 , styles.Radius_50]} />*/}
                        {/*</TouchableOpacity>*/}
                    </View>


                </View>
            </Content>
        </Container>
    );
}

export default ContactUs;


