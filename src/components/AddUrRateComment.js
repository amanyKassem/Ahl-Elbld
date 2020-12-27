import React, {useEffect, useRef, useState} from "react";
import {View, Text, Image, TouchableOpacity, Dimensions, FlatList, I18nManager} from "react-native";
import {Container, Content, Icon, Input, Textarea} from 'native-base'
import styles from '../../assets/styles'
import i18n from "../../locale/i18n";
import Swiper from 'react-native-swiper';
import {useSelector, useDispatch} from 'react-redux';
import Header from '../common/Header';
import COLORS from "../consts/colors";
import StarRating from "react-native-star-rating";

const height = Dimensions.get('window').height;
const isIOS = Platform.OS === 'ios';
const latitudeDelta = 0.922;
const longitudeDelta = 0.521;

function AddUrRateComment({navigation,route}) {

    // const lang = useSelector(state => state.lang.lang);
    // const token = useSelector(state => state.auth.user ? state.auth.user.data.token : null);
    const [comment, setComment] = useState('');

    return (
        <Container style={[styles.bg_black]}>
            <Content contentContainerStyle={[styles.bgFullWidth , styles.bg_black]}>

                <Header navigation={navigation} title={ i18n.t('addUrRate') } />

                <View style={[styles.bgFullWidth ,styles.bg_White , styles.alignCenter, styles.Width_100,styles.paddingHorizontal_20, {overflow:'hidden'}]}>

                    <Image source={require('../../assets/images/review.png')} style={[styles.icon100  , styles.marginTop_60 , styles.marginBottom_10]} resizeMode={'contain'} />

                    <Text style={[styles.textBold , styles.text_gray , styles.textSize_18 , styles.marginBottom_5]}>{ i18n.t('thanksForRate') }</Text>

                    <Textarea
                        style={[styles.input , styles.height_150 , styles.paddingVertical_10 , styles.bg_light_gray ,
                            {borderTopRightRadius :10 , borderRadius :10  , lineHeight:22}]}
                        placeholder={ i18n.t('addComment') }
                        onChangeText={(comment) => setComment(comment)}
                        value={comment}
                    />

                    <TouchableOpacity onPress={() => navigation.navigate('rateSuccessfully')} style={[styles.mstrdaBtn , styles.Width_95  , styles.marginTop_55]}>
                        <Text style={[styles.textBold , styles.text_White , styles.textSize_15]}>{ i18n.t('add') }</Text>
                    </TouchableOpacity>

                </View>

            </Content>
        </Container>
    );
}

export default AddUrRateComment;


