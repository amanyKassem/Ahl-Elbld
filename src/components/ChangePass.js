import React, { useState , useEffect } from "react";
import {
    View,
    Text,
    Image,
    TouchableOpacity,
    KeyboardAvoidingView,
    AsyncStorage,
    ActivityIndicator,
    Platform,
    ImageBackground
} from "react-native";
import {Container, Content, Form, Icon, Input, Item, Label, Toast} from 'native-base'
import styles from '../../assets/styles'
import i18n from "../../locale/i18n";
import COLORS from "../consts/colors";


const isIOS = Platform.OS === 'ios';

function ChangePass({navigation}) {

    // const lang = useSelector(state => state.lang.lang);
    // const auth = useSelector(state => state.auth);

    const [code, setCode] = useState('');
    const [newpass, setNewpass] = useState('');
    const [showPass, setShowPass] = useState(false);
    const [confirmNewPass, setConfirmNewPass] = useState('');
    const [showConPass, setShowConPass] = useState(false);

    function renderSubmit() {
        if (code == '' || newpass == '' || confirmNewPass == '') {
            return (
                <View
                    style={[styles.mstrdaBtn , styles.Width_100  , styles.marginBottom_10 , {
                        backgroundColor:'#ddd'
                    }]}
                >
                    <Text style={[styles.textRegular , styles.text_gray , styles.textSize_15]}>{ i18n.t('send') }</Text>
                </View>
            );
        }

        return (
            <TouchableOpacity
                onPress={() => passReco()} style={[styles.mstrdaBtn , styles.Width_100 , styles.marginBottom_10]}>
                <Text style={[styles.textRegular , styles.text_White , styles.textSize_15]}>{ i18n.t('send') }</Text>
            </TouchableOpacity>
        );
    }

    function passReco() {
        if (confirmNewPass.length < 6) {
            Toast.show({
                text: i18n.t('passreq'),
                type: "danger",
                duration: 3000,
                textStyle: {
                    color: "white",
                    fontFamily: 'flatRegular',
                    textAlign: 'center'
                }
            });
            return false
        } else if (newpass !== confirmNewPass) {
            Toast.show({
                text: i18n.t('passError'),
                type: "danger",
                duration: 3000,
                textStyle: {
                    color: "white",
                    fontFamily: 'flatRegular',
                    textAlign: 'center'
                }
            });
            return false
        } else {
            navigation.navigate('login')
        }
    }

    return (
        <Container >
            <ImageBackground source={require('../../assets/images/splash_bg.png')} resizeMode={'cover'} style={styles.imageBackground}>
                <Content contentContainerStyle={[styles.bgFullWidth]}>
                    <View style={[styles.bgFullWidth, styles.Width_100 , styles.paddingHorizontal_25]}>


                        <TouchableOpacity onPress={() => navigation.goBack()} style={[{position:'absolute' , left:20 , top:35}]}>
                            <Icon type={'AntDesign'} name={"arrowleft"} style={[styles.textSize_28,styles.text_gray]} />
                        </TouchableOpacity>

                        <Image source={require('../../assets/images/logo_sofri.png')} style={[styles.icon160 ,styles.SelfCenter , styles.marginTop_25]} resizeMode={'contain'} />
                        <Text style={[styles.textBold , styles.text_mstarda , styles.textSize_18 ,styles.SelfCenter , styles.marginBottom_25]}>{ i18n.t('PassReco') }</Text>

                        <View style={[styles.directionRowSpace]}>
                            <KeyboardAvoidingView style={[styles.Width_100]}>
                                <Form style={[styles.Width_100 , styles.flexCenter]}>

                                    <Item style={[styles.item]}>
                                        <Label style={[styles.label]}>{ i18n.t('code') }</Label>
                                        <Input style={[styles.input]}
                                               onChangeText={(code) => setCode(code)}
                                               keyboardType={'number-pad'}
                                        />

                                    </Item>

                                    <Item style={[styles.item]}>
                                        <Label style={[styles.label]}>{ i18n.t('newpass') }</Label>
                                        <Input style={[styles.input , {paddingRight:35}]}
                                               onChangeText={(newpass) => setNewpass(newpass)}
                                               secureTextEntry={!showPass}
                                        />
                                        <TouchableOpacity onPress={() => setShowPass(!showPass)} style={[{position:'absolute' , right:10  , bottom:13}]}>
                                            <Icon type={'FontAwesome'} name={showPass ? "eye-slash" : "eye"}
                                                  style={[styles.textSize_18,styles.text_gray]} />
                                        </TouchableOpacity>
                                    </Item>

                                    <Item style={[styles.item]}>
                                        <Label style={[styles.label]}>{ i18n.t('confirmNewPass') }</Label>
                                        <Input style={[styles.input , {paddingRight:35}]}
                                               onChangeText={(confirmNewPass) => setConfirmNewPass(confirmNewPass)}
                                               secureTextEntry={!showConPass}
                                        />
                                        <TouchableOpacity onPress={() => setShowConPass(!showConPass)} style={[{position:'absolute' , right:10  , bottom:13}]}>
                                            <Icon type={'FontAwesome'} name={showConPass ? "eye-slash" : "eye"}
                                                  style={[styles.textSize_18,styles.text_gray]} />
                                        </TouchableOpacity>
                                    </Item>

                                    {renderSubmit()}

                                </Form>
                            </KeyboardAvoidingView>
                        </View>

                    </View>
                </Content>
            </ImageBackground>
        </Container>
    );
}

export default ChangePass;


