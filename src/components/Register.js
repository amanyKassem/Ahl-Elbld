import React, { useState , useEffect } from "react";
import {
    View,
    Text,
    Image,
    TouchableOpacity,
    KeyboardAvoidingView,
    I18nManager,
    ActivityIndicator,
    Platform,
    ImageBackground
} from "react-native";
import {CheckBox, Container, Content, Form, Icon, Input, Item, Label, Toast} from 'native-base'
import styles from '../../assets/styles'
import i18n from "../../locale/i18n";
import COLORS from "../consts/colors";
import AuthHeader from "../common/AuthHeader";
import * as ImagePicker from 'expo-image-picker';
import * as Permissions from "expo-permissions";
import RNPickerSelect from 'react-native-picker-select';


const isIOS = Platform.OS === 'ios';

function Register({navigation , route}) {

    // const lang = useSelector(state => state.lang.lang);
    // const auth = useSelector(state => state.auth);

    const userType = route.params.userType;


    const [phone, setPhone] = useState('');
    const [username, setUsername] = useState('');
    const [mail, setMail] = useState('');
    const [plateNumbers, setPlateNumbers] = useState('');
    const [password, setPassword] = useState('');
    const [nationality, setNationality] = useState('');
    const [idNum, setIdName] = useState('');
    const [showPass, setShowPass] = useState(false);
    const [isChecked, setIsChecked] = useState(false);

    const [licenseImg, setLisenceImg] = useState('');
    const [lisenceBase64, setLisenceBase64] = useState('');

    const [idImg, setIdImg] = useState('');
    const [idBase64, setIdBase64] = useState('');

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

    const askPermissionsAsync = async () => {
        await Permissions.askAsync(Permissions.CAMERA);
        await Permissions.askAsync(Permissions.CAMERA_ROLL);

    };

    const _pickImage = async (type) => {

        askPermissionsAsync();

        let result = await ImagePicker.launchImageLibraryAsync({
            allowsEditing: true,
            aspect: [4, 3],
            base64: true
        });

        if (!result.cancelled) {

            if(type === 'licenseImg'){
                setLisenceImg(result.uri.split('/').pop());
                setLisenceBase64(result.base64);
            } else if(type === 'idImg'){
                setIdImg(result.uri.split('/').pop());
                setIdBase64(result.base64);
            }

        }
    };

    return (
        <Container >
            <ImageBackground source={require('../../assets/images/splash_bg.png')} resizeMode={'cover'} style={styles.imageBackground}>
                <Content contentContainerStyle={[styles.bgFullWidth]}>
                    <View style={[styles.bgFullWidth, styles.Width_100]}>

                        <AuthHeader navigation={navigation}/>

                        <Text style={[styles.textBold , styles.text_mstarda , styles.textSize_18 ,styles.SelfCenter , styles.marginBottom_25]}>{ i18n.t('createAcc') }</Text>

                        <View style={[styles.directionRowSpace , styles.paddingHorizontal_25]}>
                            <KeyboardAvoidingView style={[styles.Width_100]}>
                                <Form style={[styles.Width_100 , styles.flexCenter]}>

                                    <Item style={[styles.item]}>
                                        <Label style={[styles.label]}>{ userType === 'user' ? i18n.t('username') : i18n.t('delegateName') }</Label>
                                        <Input style={[styles.input]}
                                               onChangeText={(username) => setUsername(username)}
                                        />

                                    </Item>

                                    <Item style={[styles.item]}>
                                        <Label style={[styles.label]}>{ i18n.t('phone') }</Label>
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

                                    {
                                        userType === 'delegate' ?
                                            <View style={[styles.Width_100]}>
                                                <Item style={[styles.item]}>
                                                    <Label style={[styles.label]}>{ i18n.t('idNum') }</Label>
                                                    <Input style={[styles.input]}
                                                           onChangeText={(idNum) => setIdName(idNum)}
                                                           keyboardType={'number-pad'}
                                                    />

                                                </Item>

                                                <Item style={[styles.item]}>
                                                    <Label style={[styles.label]}>{ i18n.t('licenseImg') }</Label>
                                                    <Input style={[styles.input , {paddingRight:35}]}
                                                           value={licenseImg}
                                                           disabled={true}
                                                    />
                                                    <TouchableOpacity onPress={() => _pickImage('licenseImg')} style={[{position:'absolute' , right:10  , bottom:15}]}>
                                                        <Icon type={'FontAwesome'} name={"camera"}
                                                              style={[styles.textSize_13,styles.text_gray]} />
                                                    </TouchableOpacity>

                                                </Item>

                                                <Item style={[styles.item]}>
                                                    <Label style={[styles.label]}>{ i18n.t('idImg') }</Label>
                                                    <Input style={[styles.input , {paddingRight:35}]}
                                                           value={idImg}
                                                           disabled={true}
                                                    />
                                                    <TouchableOpacity onPress={() => _pickImage('idImg')} style={[{position:'absolute' , right:10  , bottom:15}]}>
                                                        <Icon type={'FontAwesome'} name={"camera"}
                                                              style={[styles.textSize_13,styles.text_gray]} />
                                                    </TouchableOpacity>

                                                </Item>

                                                <Item style={[styles.item , styles.marginBottom_40]}>
                                                    <Label style={[styles.label]}>{ i18n.t('plateNumbers') }</Label>
                                                    <Input style={[styles.input , {paddingRight:35}]}
                                                           keyboardType={'number-pad'}
                                                           onChangeText={(plateNumbers) => setPlateNumbers(plateNumbers)}
                                                    />

                                                </Item>

                                                <View style={[styles.input , styles.flexCenter, styles.marginBottom_20 , styles.Width_100 , {borderTopRightRadius:20 , borderTopLeftRadius:0 , paddingLeft:7}]}>
                                                    <Label style={[styles.label, { top:-20 , left:0}]}>{ i18n.t('nationality') }</Label>

                                                    <RNPickerSelect
                                                        style={{
                                                            inputAndroid: {
                                                                fontFamily: 'flatRegular',
                                                                color:COLORS.gray,
                                                                textAlign           : I18nManager.isRTL ? 'right' : 'left',
                                                                fontSize            : 14,
                                                                top:-12,
                                                            },
                                                            inputIOS: {
                                                                fontFamily: 'flatRegular',
                                                                color:COLORS.gray,
                                                                alignSelf:'flex-start',
                                                                textAlign           : I18nManager.isRTL ? 'right' : 'left',
                                                                fontSize            : 14,
                                                                top:-12,
                                                            },
                                                        }}
                                                        placeholder={{
                                                            // label: i18n.t('nationality') ,
                                                        }}
                                                        onValueChange={(nationality) => setNationality(nationality)}
                                                        items={[
                                                            { label: 'مصري', value: 'Egyptian' },
                                                            { label: 'امريكي', value: 'American' },
                                                        ]}
                                                        Icon={() => {
                                                            return <Icon type={'AntDesign'} name={"down"}
                                                                         style={[styles.textSize_14,styles.text_gray , {top:7 , right:-5}]} />
                                                        }}
                                                    />
                                                </View>


                                            </View>
                                            :
                                            null
                                    }



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
                                        <View style={[styles.directionRow]}>
                                            <Text style={[styles.textRegular , styles.text_gray , styles.textSize_12]}>
                                                { i18n.t('agreeTo') }
                                            </Text>
                                            <TouchableOpacity onPress={() => navigation.navigate('terms')}>
                                                <Text style={[styles.textRegular ,styles.textDecoration , styles.text_mstarda, styles.textSize_12 ]}>{ i18n.t('terms') }</Text>
                                            </TouchableOpacity>
                                        </View>
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


