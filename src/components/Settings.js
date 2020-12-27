import React, {useEffect, useRef, useState} from "react";
import {View, Text, Image, TouchableOpacity, Dimensions, FlatList, I18nManager} from "react-native";
import {Container, Content, Icon, Input} from 'native-base'
import styles from '../../assets/styles'
import i18n from "../../locale/i18n";
import Swiper from 'react-native-swiper';
import {useSelector, useDispatch} from 'react-redux';
import Header from '../common/Header';
import COLORS from "../consts/colors";
import { chooseLang } from '../actions';

const height = Dimensions.get('window').height;
const isIOS = Platform.OS === 'ios';
const latitudeDelta = 0.922;
const longitudeDelta = 0.521;

function Settings({navigation,route}) {

    const lang = useSelector(state => state.lang.lang);
    // const token = useSelector(state => state.auth.user ? state.auth.user.data.token : null);

    const dispatch = useDispatch()

    function onChooseLang(language){
        if(language !== lang){
            dispatch(chooseLang(language))
        }
    }


    return (
        <Container style={[styles.bg_black]}>
            <Content contentContainerStyle={[styles.bgFullWidth , styles.bg_black]}>

                <Header navigation={navigation} title={ i18n.t('settings') } />

                <View style={[styles.bgFullWidth ,styles.bg_White, styles.Width_100, {overflow:'hidden'}]}>

                    <View style={[styles.bg_light_gray , styles.marginTop_15 , styles.height_45 , styles.directionRow]}>
                        <Text style={[styles.textBold , styles.text_gray , styles.textSize_15 , styles.paddingHorizontal_20 , styles.paddingVertical_10]}>{ i18n.t('chooseLanguage') }</Text>
                    </View>

                    <View style={[styles.paddingHorizontal_20 , styles.marginTop_20]}>

                        <TouchableOpacity onPress={() => onChooseLang('ar')} style={[styles.directionRow , styles.marginBottom_15]}>
                            <View style={[styles.icon20, styles.Radius_50 , lang === 'ar' ? styles.Active : styles.noActive , {padding:3}]}>
                                {
                                    lang === 'ar' ? <View style={[styles.bg_mstarda , styles.Radius_50 , styles.Width_100 , styles.heightFull]}/> : null
                                }

                            </View>
                            <Text style={[styles.textRegular , styles.text_gray , styles.textSize_15 , styles.paddingHorizontal_20 ]}>العربية</Text>
                        </TouchableOpacity>

                        <TouchableOpacity onPress={() => onChooseLang('en')} style={[styles.directionRow]}>
                            <View style={[styles.icon20, styles.Radius_50 , lang === 'en' ? styles.Active : styles.noActive , {padding:3}]}>
                                {
                                    lang === 'en' ? <View style={[styles.bg_mstarda , styles.Radius_50 , styles.Width_100 , styles.heightFull]}/> : null
                                }

                            </View>
                            <Text style={[styles.textRegular , styles.text_gray , styles.textSize_15 , styles.paddingHorizontal_20 ]}>English</Text>
                        </TouchableOpacity>

                    </View>

                    {/*<TouchableOpacity onPress={() => onChooseLang('ar')} style={{ backgroundColor: '#FCFAFA', width }}>*/}
                    {/*    <Text style={{ padding: 20, color: lang === 'ar' ? '#FDCD52' :  COLORS.gray, fontFamily: 'flatMedium', alignSelf:'flex-start'}}>عربي</Text>*/}
                    {/*</TouchableOpacity>*/}
                    {/*<TouchableOpacity onPress={() => onChooseLang('en')} style={{ backgroundColor: '#FCFAFA', width, }}>*/}
                    {/*    <Text style={{ padding: 20, color: lang === 'en' ? '#FDCD52' :  COLORS.gray, fontFamily: 'flatMedium', alignSelf:'flex-start' }}>English</Text>*/}
                    {/*</TouchableOpacity>*/}

                </View>

            </Content>
        </Container>
    );
}

export default Settings;


