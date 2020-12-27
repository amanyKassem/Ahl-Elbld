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

function ActivationCode({navigation}) {

    // const lang = useSelector(state => state.lang.lang);
    // const auth = useSelector(state => state.auth);

    const [activationCode, setActivationCode] = useState('');

    function renderSubmit() {
        if (activationCode == '') {
            return (
                <View
                    style={[styles.mstrdaBtn , styles.Width_100  , styles.marginBottom_10 , {
                        backgroundColor:'#ddd'
                    }]}
                >
                    <Text style={[styles.textRegular , styles.text_gray , styles.textSize_15]}>{ i18n.t('confirm') }</Text>
                </View>
            );
        }

        return (
            <TouchableOpacity
                onPress={() => passReco()} style={[styles.mstrdaBtn , styles.Width_100 , styles.marginBottom_10]}>
                <Text style={[styles.textRegular , styles.text_White , styles.textSize_15]}>{ i18n.t('confirm') }</Text>
            </TouchableOpacity>
        );
    }

    function passReco() {
        navigation.navigate('login')
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
                        <Text style={[styles.textBold , styles.text_mstarda , styles.textSize_18 ,styles.SelfCenter , styles.marginBottom_25]}>{ i18n.t('activateAcc') }</Text>

                        <View style={[styles.directionRowSpace]}>
                            <KeyboardAvoidingView style={[styles.Width_100]}>
                                <Form style={[styles.Width_100 , styles.flexCenter]}>

                                    <Item style={[styles.item]}>
                                        <Label style={[styles.label]}>{ i18n.t('activationCode') }</Label>
                                        <Input style={[styles.input]}
                                               onChangeText={(activationCode) => setActivationCode(activationCode)}
                                               keyboardType={'number-pad'}
                                        />

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

export default ActivationCode;


