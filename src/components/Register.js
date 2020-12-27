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
import {CheckBox, Container, Content, Form, Icon, Input, Item, Label, Toast} from 'native-base'
import styles from '../../assets/styles'
import i18n from "../../locale/i18n";
import COLORS from "../consts/colors";


const isIOS = Platform.OS === 'ios';

function Register({navigation}) {

    // const lang = useSelector(state => state.lang.lang);
    // const auth = useSelector(state => state.auth);

    const [phone, setPhone] = useState('');
    const [username, setUsername] = useState('');
    const [mail, setMail] = useState('');
    const [promoCode, setPromoCode] = useState('');
    const [password, setPassword] = useState('');
    const [showPass, setShowPass] = useState(false);
    const [isChecked, setIsChecked] = useState(false);

    function renderSubmit() {
        if (phone == '' || username == '' || mail == '' || promoCode == '' || password == '' || !isChecked) {
            return (
                <View
                    style={[styles.mstrdaBtn , styles.Width_100  , styles.marginBottom_10 , {
                        backgroundColor:'#ddd'
                    }]}
                >
                    <Text style={[styles.textRegular , styles.text_gray , styles.textSize_15]}>{ i18n.t('createAcc') }</Text>
                </View>
            );
        }

        return (
            <TouchableOpacity
                onPress={() => onConfirm()} style={[styles.mstrdaBtn , styles.Width_100 , styles.marginBottom_10]}>
                <Text style={[styles.textRegular , styles.text_White , styles.textSize_15]}>{ i18n.t('createAcc') }</Text>
            </TouchableOpacity>
        );
    }

    function onConfirm() {
        navigation.navigate('activationCode')
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
                        <Text style={[styles.textBold , styles.text_mstarda , styles.textSize_18 ,styles.SelfCenter , styles.marginBottom_25]}>{ i18n.t('createAcc') }</Text>

                        <View style={[styles.directionRowSpace]}>
                            <KeyboardAvoidingView style={[styles.Width_100]}>
                                <Form style={[styles.Width_100 , styles.flexCenter]}>

                                    <Item style={[styles.item]}>
                                        <Label style={[styles.label]}>{ i18n.t('username') } *</Label>
                                        <Input style={[styles.input]}
                                               onChangeText={(username) => setUsername(username)}
                                        />

                                    </Item>

                                    <Item style={[styles.item]}>
                                        <Label style={[styles.label]}>{ i18n.t('phone') } *</Label>
                                        <Input style={[styles.input]}
                                               onChangeText={(phone) => setPhone(phone)}
                                               keyboardType={'number-pad'}
                                        />

                                    </Item>

                                    <Item style={[styles.item]}>
                                        <Label style={[styles.label]}>{ i18n.t('mail') }</Label>
                                        <Input style={[styles.input]}
                                               onChangeText={(mail) => setMail(mail)}
                                               keyboardType={'email-address'}
                                        />

                                    </Item>

                                    <Item style={[styles.item]}>
                                        <Label style={[styles.label]}>{ i18n.t('promoCode') }</Label>
                                        <Input style={[styles.input]}
                                               onChangeText={(promoCode) => setPromoCode(promoCode)}
                                        />

                                    </Item>

                                    <Item style={[styles.item]}>
                                        <Label style={[styles.label]}>{ i18n.t('password') }</Label>
                                        <Input style={[styles.input , {paddingRight:35}]}
                                               onChangeText={(password) => setPassword(password)}
                                               secureTextEntry={!showPass}
                                        />
                                        <TouchableOpacity onPress={() => setShowPass(!showPass)} style={[{position:'absolute' , right:10  , bottom:13}]}>
                                            <Icon type={'FontAwesome'} name={showPass ? "eye-slash" : "eye"}
                                                  style={[styles.textSize_18,styles.text_gray]} />
                                        </TouchableOpacity>
                                    </Item>

                                    <TouchableOpacity onPress={() => setIsChecked(!isChecked)} style={[styles.marginBottom_25 , styles.directionRowCenter, styles.alignStart]}>
                                        <CheckBox style={[styles.checkBox]} onPress={() => setIsChecked(!isChecked)} checked={isChecked} color={COLORS.mstarda}/>
                                        <Text style={[styles.textRegular , styles.text_gray , styles.textSize_12 , {lineHeight:20}]}>{ i18n.t('agreeTo') }</Text>
                                    </TouchableOpacity>

                                    {renderSubmit()}

                                    <TouchableOpacity onPress={() => navigation.navigate('login')} style={[styles.marginTop_10 , styles.marginBottom_30 , styles.directionRow]}>
                                        <Text style={[styles.textRegular , styles.text_gray , styles.textSize_14 , {marginRight:5}]}>{ i18n.t('haveAcc') }</Text>
                                        <Text style={[styles.textRegular , styles.text_mstarda , styles.textSize_14]}>{ i18n.t('clickHere') }</Text>
                                    </TouchableOpacity>

                                </Form>
                            </KeyboardAvoidingView>
                        </View>

                    </View>
                </Content>
            </ImageBackground>
        </Container>
    );
}

export default Register;


