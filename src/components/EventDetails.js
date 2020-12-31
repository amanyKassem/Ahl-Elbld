import React, {useEffect, useRef, useState} from "react";
import {
    View,
    Text,
    Image,
    TouchableOpacity,
    Dimensions,
    I18nManager,
    ImageBackground,
    FlatList
} from "react-native";
import {CheckBox, Container, Content, Form, Icon, Input, Item, Label, Textarea} from 'native-base'
import styles from '../../assets/styles'
import i18n from "../../locale/i18n";
import Swiper from 'react-native-swiper';
import {useSelector, useDispatch} from 'react-redux';
import Header from '../common/Header';
import COLORS from "../consts/colors";
import StarRating from "react-native-star-rating";

const height = Dimensions.get('window').height;
const isIOS = Platform.OS === 'ios';

function EventDetails({navigation,route}) {

    // const lang = useSelector(state => state.lang.lang);
    // const token = useSelector(state => state.auth.user ? state.auth.user.data.token : null);

    return (
        <Container style={[styles.bg_black]}>
            <Content contentContainerStyle={[styles.bgFullWidth , styles.bg_White]}>
                <ImageBackground source={require('../../assets/images/banner1.png')} resizeMode={'cover'} style={[styles.Width_100 , styles.height_230 , {borderBottomRightRadius:25 , borderBottomLeftRadius:25 , overflow:'hidden'}]}>
                    <View style={[styles.overlay_black , styles.heightFull , styles.Width_100]}>

                        <Header navigation={navigation} title={ i18n.t('eventDetails') } />

                    </View>
                </ImageBackground>

                <View style={[styles.bgFullWidth ,styles.bg_White, styles.Width_100,styles.paddingHorizontal_20 , styles.marginTop_10, {overflow:'hidden'}]}>

                    <View style={[styles.directionRowSpace, styles.marginTop_5]}>
                        <Text style={[styles.textBold , styles.text_gray , styles.textSize_16]}>اسم المنتج</Text>
                        <Text style={[styles.textBold , styles.text_mstarda , styles.textSize_16 ]}>20 ر.س</Text>
                    </View>

                    <View style={[styles.directionRow , styles.marginTop_15]}>
                        <Icon type={'MaterialIcons'} name={'location-on'} style={[styles.textSize_14 , styles.text_mstarda , {marginRight:5}]} />
                        <Text style={[styles.textRegular , styles.text_midGray , styles.textSize_13]}>السعوديه - الرياض</Text>
                    </View>

                    <Text style={[styles.textRegular , styles.text_midGray , styles.textSize_13 , styles.marginTop_15 , styles.alignStart , styles.writingDir , {lineHeight:24}]}>
                        أي كلااااااام أي كلااااااام أي كلااااااام أي كلااااااام أي كلااااااام أي كلااااااام أي كلااااااام أي كلااااااام أي كلااااااام
                        أي كلااااااام أي كلااااااام أي كلااااااام أي كلااااااام أي كلااااااام أي كلااااااام أي كلااااااام أي كلااااااام أي كلااااااام
                        أي كلااااااام أي كلااااااام أي كلااااااام أي كلااااااام أي كلااااااام أي كلااااااام أي كلااااااام أي كلااااااام أي كلااااااام
                        أي كلااااااام أي كلااااااام أي كلااااااام أي كلااااااام أي كلااااااام أي كلااااااام أي كلااااااام أي كلااااااام أي كلااااااام
                    </Text>

                    <View style={[styles.line , styles.marginVertical_20]}/>

                    <Text style={[styles.textBold , styles.text_gray , styles.textSize_15 , styles.alignStart , styles.marginBottom_10]}>{i18n.t('mealsAval') }</Text>
                    <Text style={[styles.textRegular , styles.text_midGray , styles.textSize_14 , styles.alignStart , styles.marginBottom_20]}>170 وجبة</Text>


                    <Text style={[styles.textBold , styles.text_gray , styles.textSize_15 , styles.alignStart , styles.marginBottom_10]}>{i18n.t('eventDate') }</Text>
                    <Text style={[styles.textRegular , styles.text_midGray , styles.textSize_14 , styles.alignStart , styles.marginBottom_20]}>9/7/2019</Text>


                    <Text style={[styles.textBold , styles.text_gray , styles.textSize_15 , styles.alignStart , styles.marginBottom_10]}>{i18n.t('eventTime') }</Text>
                    <Text style={[styles.textRegular , styles.text_midGray , styles.textSize_14 , styles.alignStart]}>5 مساءا</Text>



                    <View style={[styles.line , styles.marginVertical_20]}/>


                    <View style={[styles.directionRow , styles.centerContext , styles.Width_100 , styles.marginBottom_30]}>
                        <Text style={[styles.textRegular , styles.text_gray , styles.textSize_15 ]}>{i18n.t('total') }</Text>
                        <Text style={[styles.textRegular , styles.text_mstarda , styles.textSize_15 , {marginLeft:10} ]}>25 ر.س</Text>
                    </View>

                    <TouchableOpacity onPress={() => navigation.navigate('eventPayMethod')} style={[styles.mstrdaBtn , styles.Width_90 , styles.SelfCenter  , styles.marginBottom_20]}>
                        <Text style={[styles.textBold , styles.text_White , styles.textSize_14]}>{ i18n.t('presence') }</Text>
                    </TouchableOpacity>


                </View>

            </Content>
        </Container>
    );
}

export default EventDetails;


