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

function CompAndSug({navigation,route}) {

    // const lang = useSelector(state => state.lang.lang);
    // const token = useSelector(state => state.auth.user ? state.auth.user.data.token : null);

    const [username, setUsername] = useState('');

    const [subject, setSubject] = useState('');

    const [mail, setMail] = useState('');

    const [msg, setMsg] = useState('');

    function renderSubmit() {
        if (mail == '' || username == '' || msg == '' || subject == '' ) {
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

                <Header navigation={navigation} title={ i18n.t('comp&sug') } />

                <View style={[styles.bgFullWidth ,styles.bg_White, styles.Width_100,styles.paddingHorizontal_20, {overflow:'hidden'}]}>

                    <Image source={require('../../assets/images/logo_sofri.png')} style={[styles.icon160 ,styles.SelfCenter , styles.marginTop_25 , styles.marginBottom_10]} resizeMode={'contain'} />

                    <KeyboardAvoidingView style={[styles.Width_100  , styles.marginBottom_10]}>
                        <Form style={[styles.Width_100 , styles.flexCenter]}>

                            <Item style={[styles.item]}>
                                <Label style={[styles.label]}>{ i18n.t('username') }</Label>
                                <Input style={[styles.input , {borderTopRightRadius :25 ,borderTopLeftRadius :25, borderColor:username ? COLORS.mstarda : '#eee', borderWidth:1 , backgroundColor:username ? '#fff' : '#eee'}]}
                                       onChangeText={(username) => setUsername(username)}
                                       value={username}
                                />
                            </Item>

                            <Item style={[styles.item]}>
                                <Label style={[styles.label]}>{ i18n.t('mail') }</Label>
                                <Input style={[styles.input , {borderTopRightRadius :25 ,borderTopLeftRadius :25, borderColor:mail ? COLORS.mstarda : '#eee', borderWidth:1 , backgroundColor:mail ? '#fff' : '#eee'}]}
                                       onChangeText={(mail) => setMail(mail)}
                                       value={mail}
                                       keyboardType={'email-address'}
                                />
                            </Item>

                            <Item style={[styles.item]}>
                                <Label style={[styles.label]}>{ i18n.t('subject') }</Label>
                                <Input style={[styles.input , {borderTopRightRadius :25 ,borderTopLeftRadius :25, borderColor:subject ? COLORS.mstarda : '#eee', borderWidth:1 , backgroundColor:subject ? '#fff' : '#eee'}]}
                                       onChangeText={(subject) => setSubject(subject)}
                                       value={subject}
                                />
                            </Item>

                            <Item style={[styles.item]}>
                                <Label style={[styles.label]}>{ i18n.t('message') }</Label>
                                <Textarea
                                    style={[styles.input , styles.height_150 , styles.paddingVertical_10 ,
                                        {borderTopRightRadius :10 ,borderTopLeftRadius :10, borderRadius :10  , borderColor:msg ? COLORS.mstarda : '#eee',
                                            borderWidth:1 , backgroundColor:msg ? '#fff' : '#eee' , lineHeight:22}]}
                                    onChangeText={(msg) => setMsg(msg)}
                                    value={msg}
                                />
                            </Item>

                            {renderSubmit()}

                        </Form>
                    </KeyboardAvoidingView>

                </View>
            </Content>
        </Container>
    );
}

export default CompAndSug;


