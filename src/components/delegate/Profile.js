import React, {useEffect, useRef, useState} from "react";
import {
    View,
    Text,
    Image,
    TouchableOpacity,
    Dimensions,
    ScrollView,
    KeyboardAvoidingView, ActivityIndicator
} from "react-native";
import {Container, Content, Form, Icon, Input, Item, Label , Toast} from 'native-base'
import styles from '../../../assets/styles'
import i18n from "../../../locale/i18n";
import Header from '../../common/Header';
import COLORS from "../../consts/colors";
import  Modal  from "react-native-modal";
import {useSelector, useDispatch} from "react-redux";
import {profile , changePass} from "../../actions";

const height = Dimensions.get('window').height;
const isIOS = Platform.OS === 'ios';

function Profile({navigation,route}) {

    const lang = useSelector(state => state.lang.lang);
    const token = useSelector(state => state.auth.user ? state.auth.user.data.token : null);


    const userData = useSelector(state => state.profile.user);
    const userDataLoader = useSelector(state => state.profile.loader);
    const [spinner, setSpinner] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);


    const [username, setUsername] = useState(userData && userData.name ? userData.name : '');

    const [phone, setPhone] = useState(userData && userData.phone ? userData.phone : '');

    const [mail, setMail] = useState(userData && userData.email ? userData.email : '');

    const [idNum, setIdNum] = useState(userData && userData.delegate && userData.delegate.identity ? userData.delegate.identity : '');

    const [manufacturingYear, setManufacturingYear] = useState(userData && userData.delegate && userData.delegate.year ? userData.delegate.year : '');

    const [carType, setCarType] = useState(userData && userData.delegate && userData.delegate.car_model ? userData.delegate.car_model : '');

    const [carNumber, setCarNumber] = useState(userData && userData.delegate && userData.delegate.car_plate_number ? userData.delegate.car_plate_number : '');

    const [carChars, setCarChars] = useState(userData && userData.delegate && userData.delegate.car_plate_letters ? userData.delegate.car_plate_letters : '');

    const [area, setArea] = useState(userData && userData.address ? userData.address : '');

    const [city, setCity] = useState(userData && userData.delegate && userData.delegate.city ? userData.delegate.city : '');

    const [showModal, setShowModal] = useState(false);
    const [attachShowModal, setAttachShowModal] = useState(false);


    const [password, setPassword] = useState('');
    const [showPass, setShowPass] = useState(false);
    const [newpass, setNewpass] = useState('');
    const [showNewPass, setShowNewPass] = useState(false);
    const [confirmNewPass, setConfirmNewPass] = useState('');
    const [showConPass, setShowConPass] = useState(false);


    const dispatch = useDispatch();

    function fetchData(){
        dispatch(profile(lang, token))
    }

    useEffect(() => {
        fetchData();
        const unsubscribe = navigation.addListener('focus', () => {
            fetchData();
        });
        return unsubscribe;
    }, [navigation , userDataLoader]);

    function toggleModal () {
        setShowModal(!showModal);
    };

    function attachToggleModal () {
        setAttachShowModal(!attachShowModal);
    };

    function renderSubmitPass() {

        if (isSubmitted){
            return(
                <View style={[{ justifyContent: 'center', alignItems: 'center' } , styles.marginTop_10, styles.marginBottom_10]}>
                    <ActivityIndicator size="large" color={COLORS.mstarda} style={{ alignSelf: 'center' }} />
                </View>
            )
        }

        if (password == '' || newpass == '' || confirmNewPass == '') {
            return (
                <View
                    style={[styles.mstrdaBtn , styles.Width_100  , styles.marginTop_10 , styles.marginBottom_10 , {
                        backgroundColor:'#ddd'
                    }]}
                >
                    <Text style={[styles.textBold , styles.text_gray , styles.textSize_15]}>{ i18n.t('confirm') }</Text>
                </View>
            );
        }

        return (
            <TouchableOpacity
                onPress={() => onConfirmPass()} style={[styles.mstrdaBtn , styles.Width_100 , styles.marginTop_10 , styles.marginBottom_10 ]}>
                <Text style={[styles.textBold , styles.text_White , styles.textSize_15]}>{ i18n.t('confirm') }</Text>
            </TouchableOpacity>
        );
    }

    function onConfirmPass() {

        if (newpass.length < 6){
            Toast.show({
                text        : i18n.t('passreq'),
                type        : "danger",
                duration    : 3000,
                textStyle   : {
                    color       : "white",
                    fontFamily  : 'cairo',
                    textAlign   : 'center'
                }
            });
            return false
        }else if(newpass !== confirmNewPass){
            Toast.show({
                text        : i18n.t('passError'),
                type        : "danger",
                duration    : 3000,
                textStyle   : {
                    color       : "white",
                    fontFamily  : 'cairo',
                    textAlign   : 'center'
                }
            });
            return false
        } else {
            setIsSubmitted(true);
            dispatch(changePass(lang , password , newpass , token)).then(() => {setIsSubmitted(false) ; setShowModal(false)});
        }

    }

    function renderLoader(){
        if (spinner){
            return(
                <View style={[styles.loading, styles.flexCenter, {height:'100%'}]}>
                    <ActivityIndicator size="large" color={COLORS.mstarda} style={{ alignSelf: 'center' }} />
                </View>
            );
        }
    }

    return (
        <Container style={[styles.bg_gray]}>
            {renderLoader()}
            <Content contentContainerStyle={[styles.bgFullWidth , styles.bg_gray]}>

                <Header navigation={navigation} title={ i18n.t('profile') } />

                {
                    userData ?
                        <View style={[styles.bgFullWidth ,styles.bg_White, styles.Width_100,styles.paddingHorizontal_20, {overflow:'hidden' , paddingBottom:70}]}>

                            <View style={[styles.directionColumnCenter , styles.marginTop_35]}>
                                <View style={[styles.icon70 , styles.Radius_50 , styles.borderGray , styles.marginBottom_7 ,{ padding: 7 }]}>
                                    <Image source= {{uri:userData.avatar}} style={[styles.Width_100 , styles.heightFull , styles.Radius_50]} resizeMode='cover' />
                                </View>
                                <Text style={[styles.textRegular , styles.text_mstarda , styles.textSize_15 , styles.marginBottom_5]}>{userData.name}</Text>
                            </View>

                            <KeyboardAvoidingView style={[styles.Width_100 , styles.marginTop_35 , styles.marginBottom_25]}>
                                <Form style={[styles.Width_100 , styles.flexCenter]}>

                                    <Item style={[styles.item]}>
                                        <Label style={[styles.label]}>{ i18n.t('delegateName') }</Label>
                                        <Input style={[styles.input , {borderTopRightRadius :25 ,borderTopLeftRadius :25 , borderColor:username ? COLORS.mstarda : '#eee', borderWidth:1 , backgroundColor:username ? '#fff' : '#eee'}]}
                                               onChangeText={(username) => setUsername(username)}
                                               value={username}
                                               editable={false}
                                        />
                                    </Item>

                                    <Item style={[styles.item]}>
                                        <Label style={[styles.label]}>{ i18n.t('phone') }</Label>
                                        <Input style={[styles.input , {borderTopRightRadius :25 ,borderTopLeftRadius :25 , borderColor:phone ? COLORS.mstarda : '#eee', borderWidth:1 , backgroundColor:phone ? '#fff' : '#eee'}]}
                                               onChangeText={(phone) => setPhone(phone)}
                                               value={phone}
                                               keyboardType={'number-pad'}
                                               editable={false}
                                        />
                                    </Item>

                                    <Item style={[styles.item]}>
                                        <Label style={[styles.label]}>{ i18n.t('mail') }</Label>
                                        <Input style={[styles.input , {borderTopRightRadius :25 ,borderTopLeftRadius :25 , borderColor:mail ? COLORS.mstarda : '#eee', borderWidth:1 , backgroundColor:mail ? '#fff' : '#eee'}]}
                                               onChangeText={(mail) => setMail(mail)}
                                               value={mail}
                                               keyboardType={'email-address'}
                                               editable={false}
                                        />
                                    </Item>

                                    <Item style={[styles.item]}>
                                        <Label style={[styles.label]}>{ i18n.t('idNum') }</Label>
                                        <Input style={[styles.input , {borderTopRightRadius :25 ,borderTopLeftRadius :25 , borderColor:idNum ? COLORS.mstarda : '#eee', borderWidth:1 , backgroundColor:idNum ? '#fff' : '#eee'}]}
                                               onChangeText={(idNum) => setIdNum(idNum)}
                                               value={idNum}
                                               editable={false}
                                        />
                                    </Item>

                                    <Item style={[styles.item]}>
                                        <Label style={[styles.label]}>{ i18n.t('manufacturingYear') }</Label>
                                        <Input style={[styles.input , {borderTopRightRadius :25 ,borderTopLeftRadius :25 , borderColor:manufacturingYear ? COLORS.mstarda : '#eee', borderWidth:1 , backgroundColor:manufacturingYear ? '#fff' : '#eee'}]}
                                               onChangeText={(manufacturingYear) => setManufacturingYear(manufacturingYear)}
                                               value={manufacturingYear.toString()}
                                               keyboardType={'number-pad'}
                                               editable={false}
                                        />
                                    </Item>

                                    <Item style={[styles.item]}>
                                        <Label style={[styles.label]}>{ i18n.t('carType') }</Label>
                                        <Input style={[styles.input , {borderTopRightRadius :25 ,borderTopLeftRadius :25 , borderColor:carType ? COLORS.mstarda : '#eee', borderWidth:1 , backgroundColor:carType ? '#fff' : '#eee'}]}
                                               onChangeText={(carType) => setCarType(carType)}
                                               value={carType}
                                               editable={false}
                                        />
                                    </Item>

                                    <Item style={[styles.item]}>
                                        <Label style={[styles.label]}>{ i18n.t('carNumber') }</Label>
                                        <Input style={[styles.input , {borderTopRightRadius :25 ,borderTopLeftRadius :25 , borderColor:carNumber ? COLORS.mstarda : '#eee', borderWidth:1 , backgroundColor:carNumber ? '#fff' : '#eee'}]}
                                               onChangeText={(carNumber) => setCarNumber(carNumber)}
                                               value={carNumber}
                                               keyboardType={'number-pad'}
                                               editable={false}
                                        />
                                    </Item>

                                    <Item style={[styles.item]}>
                                        <Label style={[styles.label]}>{ i18n.t('carChars') }</Label>
                                        <Input style={[styles.input , {borderTopRightRadius :25 ,borderTopLeftRadius :25 , borderColor:carChars ? COLORS.mstarda : '#eee', borderWidth:1 , backgroundColor:carChars ? '#fff' : '#eee'}]}
                                               onChangeText={(carChars) => setCarChars(carChars)}
                                               value={carChars}
                                               editable={false}
                                        />
                                    </Item>

                                    <Item style={[styles.item]}>
                                        <Label style={[styles.label]}>{ i18n.t('area') }</Label>
                                        <Input style={[styles.input , {borderTopRightRadius :25 ,borderTopLeftRadius :25 , borderColor:area ? COLORS.mstarda : '#eee', borderWidth:1 , backgroundColor:area ? '#fff' : '#eee'}]}
                                               onChangeText={(area) => setArea(area)}
                                               value={area}
                                               editable={false}
                                        />
                                    </Item>

                                    <Item style={[styles.item]}>
                                        <Label style={[styles.label]}>{ i18n.t('city') }</Label>
                                        <Input style={[styles.input , {borderTopRightRadius :25 ,borderTopLeftRadius :25 , borderColor:city ? COLORS.mstarda : '#eee', borderWidth:1 , backgroundColor:city ? '#fff' : '#eee'}]}
                                               onChangeText={(city) => setCity(city)}
                                               value={city}
                                               editable={false}
                                        />
                                    </Item>

                                    <TouchableOpacity onPress={attachToggleModal} style={[styles.alignStart]}>
                                        <Text style={[styles.textRegular , styles.text_mstarda , styles.textSize_15 , styles.marginBottom_5]}>{ i18n.t('attachment') }</Text>
                                    </TouchableOpacity>

                                </Form>
                            </KeyboardAvoidingView>

                            <TouchableOpacity onPress={toggleModal} style={[styles.mstrdaBtn , styles.Width_100 , styles.marginBottom_10 ]}>
                                <Text style={[styles.textBold , styles.text_White , styles.textSize_15]}>{ i18n.t('changePass') }</Text>
                            </TouchableOpacity>

                            <TouchableOpacity style={[styles.mstrdaBtn , styles.Width_100 , styles.marginBottom_20 ]}>
                                <Text style={[styles.textBold , styles.text_White , styles.textSize_15]}>{ i18n.t('editProfile') }</Text>
                            </TouchableOpacity>

                        </View>
                        :
                        null
                }

                <Modal
                    onBackdropPress                 ={toggleModal}
                    onBackButtonPress               = {toggleModal}
                    isVisible                       = {showModal}
                    style                           = {styles.bgModel}
                    avoidKeyboard                    = {true}
                >

                    <View style={[styles.bg_White, styles.overHidden, styles.Width_100, styles.flexCenter , {borderTopStartRadius:5 , borderTopEndRadius:5}]}>

                        <View style={[styles.bg_mstarda , styles.Width_100 , styles.paddingVertical_15 , styles.centerContext]}>
                            <Text style={[styles.textBold , styles.text_White , styles.textSize_15]}>{ i18n.t('changePass') }</Text>
                        </View>

                        <Form style={[styles.Width_100 , styles.paddingVertical_25 , styles.paddingHorizontal_15 , styles.flexCenter]}>

                            <Item style={[styles.item , styles.height_80]}>
                                <Label style={[styles.label]}>{ i18n.t('currentPassword') }</Label>
                                <Input style={[styles.input , {borderTopRightRadius :25 ,borderTopLeftRadius :25, borderColor:password ? COLORS.mstarda : '#eee', borderWidth:1 , backgroundColor:password ? '#fff' : '#eee'}]}
                                       onChangeText={(password) => setPassword(password)}
                                       value={password}
                                       secureTextEntry={!showPass}
                                />
                                <TouchableOpacity onPress={() => setShowPass(!showPass)} style={[{position:'absolute' , right:10  , bottom:13}]}>
                                    <Icon type={'FontAwesome'} name={showPass ? "eye-slash" : "eye"}
                                          style={[styles.textSize_18,styles.text_gray]} />
                                </TouchableOpacity>
                            </Item>

                            <Item style={[styles.item , styles.height_80]}>
                                <Label style={[styles.label]}>{ i18n.t('newpass') }</Label>
                                <Input style={[styles.input , {borderTopRightRadius :25 ,borderTopLeftRadius :25, borderColor:newpass ? COLORS.mstarda : '#eee', borderWidth:1 , backgroundColor:newpass ? '#fff' : '#eee'}]}
                                       onChangeText={(newpass) => setNewpass(newpass)}
                                       value={newpass}
                                       secureTextEntry={!showNewPass}
                                />
                                <TouchableOpacity onPress={() => setShowNewPass(!showNewPass)} style={[{position:'absolute' , right:10  , bottom:13}]}>
                                    <Icon type={'FontAwesome'} name={showNewPass ? "eye-slash" : "eye"}
                                          style={[styles.textSize_18,styles.text_gray]} />
                                </TouchableOpacity>
                            </Item>

                            <Item style={[styles.item , styles.height_80]}>
                                <Label style={[styles.label]}>{ i18n.t('confirmNewPass') }</Label>
                                <Input style={[styles.input , {borderTopRightRadius :25 ,borderTopLeftRadius :25, borderColor:confirmNewPass ? COLORS.mstarda : '#eee', borderWidth:1 , backgroundColor:confirmNewPass ? '#fff' : '#eee'}]}
                                       onChangeText={(confirmNewPass) => setConfirmNewPass(confirmNewPass)}
                                       value={confirmNewPass}
                                       secureTextEntry={!showConPass}
                                />
                                <TouchableOpacity onPress={() => setShowConPass(!showConPass)} style={[{position:'absolute' , right:10  , bottom:13}]}>
                                    <Icon type={'FontAwesome'} name={showConPass ? "eye-slash" : "eye"}
                                          style={[styles.textSize_18,styles.text_gray]} />
                                </TouchableOpacity>
                            </Item>

                            {renderSubmitPass()}

                        </Form>

                    </View>

                </Modal>

                <Modal
                    onBackdropPress                 ={attachToggleModal}
                    onBackButtonPress               = {attachToggleModal}
                    isVisible                       = {attachShowModal}
                    style                           = {styles.bgModel}
                    avoidKeyboard                    = {true}
                >

                    <View style={[styles.bg_White, styles.overHidden, styles.Width_100, styles.flexCenter , {borderTopStartRadius:5 , borderTopEndRadius:5 , height:height-200}]}>

                        <View style={[styles.bg_mstarda , styles.Width_100 , styles.paddingVertical_15 , styles.centerContext]}>
                            <Text style={[styles.textBold , styles.text_White , styles.textSize_15]}>{ i18n.t('attachment') }</Text>
                        </View>

                        {
                            userData && userData.delegate.attachments ?
                                <ScrollView horizontal={false} style={[styles.Width_100 , styles.paddingVertical_15 , styles.paddingHorizontal_15 , styles.marginBottom_15 ]}>

                                    <Text style={[styles.textBold , styles.text_gray , styles.textSize_14 , styles.marginBottom_10]}>{ i18n.t('licenseImg') }</Text>
                                    <Image source={{uri:userData.delegate.attachments.identity_img}} style={[styles.Width_100 , styles.height_120 , styles.Radius_5 , styles.marginBottom_25]} resizeMode='cover' />

                                    <Text style={[styles.textBold , styles.text_gray , styles.textSize_14 , styles.marginBottom_10]}>{ i18n.t('carFrontImg') }</Text>
                                    <Image source={{uri:userData.delegate.attachments.car_plate_front_img}} style={[styles.Width_100 , styles.height_120 , styles.Radius_5 , styles.marginBottom_25]} resizeMode='cover' />

                                    <Text style={[styles.textBold , styles.text_gray , styles.textSize_14 , styles.marginBottom_10]}>{ i18n.t('carBackImg') }</Text>
                                    <Image source={{uri:userData.delegate.attachments.car_plate_end_img}} style={[styles.Width_100 , styles.height_120 , styles.Radius_5 , styles.marginBottom_25]} resizeMode='cover' />

                                    <Text style={[styles.textBold , styles.text_gray , styles.textSize_14 , styles.marginBottom_10]}>{ i18n.t('carNumbers') }</Text>
                                    <Image source={{uri:userData.delegate.attachments.car_plate_img}} style={[styles.Width_100 , styles.height_120 , styles.Radius_5 , styles.marginBottom_25]} resizeMode='cover' />

                                </ScrollView>
                                :
                                null
                        }



                    </View>

                </Modal>
            </Content>
        </Container>
    );
}

export default Profile;


