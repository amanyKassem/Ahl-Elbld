import React, {useEffect, useRef, useState} from "react";
import {View, Text, Image, TouchableOpacity, Dimensions, FlatList, I18nManager} from "react-native";
import {Container, Content, Icon, Accordion} from 'native-base'
import styles from '../../assets/styles'
import i18n from "../../locale/i18n";
import Swiper from 'react-native-swiper';
import {useSelector, useDispatch} from 'react-redux';
import Header from '../common/Header';
import COLORS from "../consts/colors";
import StarRating from "react-native-star-rating";

const height = Dimensions.get('window').height;
const isIOS = Platform.OS === 'ios';

function FAQ({navigation,route}) {

    // const lang = useSelector(state => state.lang.lang);
    // const token = useSelector(state => state.auth.user ? state.auth.user.data.token : null);

    const dataArray = [
        { question: "السوال الأول", answer: "اجابه السوال هنحطها هنا من غير مقاطعة" },
        { question: "السوال الثاني", answer: "اجابه السوال هنحطها هنا من غير مقاطعة" },
        { question: "السوال الثالث", answer: "اجابه السوال هنحطها هنا من غير مقاطعة" }
    ];

    function _renderHeader(item, expanded) {
        return (
            <View style={[
                styles.directionRowSpace , styles.marginBottom_10 , styles.paddingHorizontal_20 ,
                styles.paddingVertical_10 , styles.bg_light_gray
            ]}>
                <Text style={[styles.textRegular , styles.textSize_14]}>
                    {" "}{item.question}
                </Text>
                {expanded
                    ? <Icon style={[styles.textSize_13 , styles.text_mstarda]} name="caretup"  type={'AntDesign'} />
                    : <Icon style={[styles.textSize_13 , styles.text_midGray]} name="caretdown"  type={'AntDesign'} />}
            </View>
        );
    }
    function _renderContent(item) {
        return (
            <Text
                style={[styles.marginBottom_15 , styles.textRegular , styles.alignStart , styles.text_midGray]}
            >
                {item.answer}
            </Text>
        );
    }

    return (
        <Container style={[styles.bg_gray]}>
            <Content contentContainerStyle={[styles.bgFullWidth , styles.bg_gray]}>

                <Header navigation={navigation} title={ i18n.t('faq') } />

                <View style={[styles.bgFullWidth ,styles.bg_White, styles.Width_100,styles.paddingHorizontal_20, {overflow:'hidden'}]}>

                    <Accordion
                        dataArray={dataArray}
                        animation={true}
                        expanded={true}
                        renderHeader={_renderHeader}
                        renderContent={_renderContent}
                        style={{borderWidth:0 , width:'100%' , marginTop:25}}
                    />

                </View>

            </Content>
        </Container>
    );
}

export default FAQ;


