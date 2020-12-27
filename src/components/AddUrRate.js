import React, {useEffect, useRef, useState} from "react";
import {View, Text, Image, TouchableOpacity, Dimensions, FlatList, I18nManager} from "react-native";
import {Container, Content, Icon, Input} from 'native-base'
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

function AddUrRate({navigation,route}) {

    // const lang = useSelector(state => state.lang.lang);
    // const token = useSelector(state => state.auth.user ? state.auth.user.data.token : null);

    const [restStarCount, setRestStarCount] = useState(3);
    const [appStarCount, setAppStarCount] = useState(4);

    return (
        <Container style={[styles.bg_black]}>
            <Content contentContainerStyle={[styles.bgFullWidth , styles.bg_black]}>

                <Header navigation={navigation} title={ i18n.t('addUrRate') } />

                <View style={[styles.bgFullWidth ,styles.bg_White, styles.Width_100,styles.paddingHorizontal_20, {overflow:'hidden'}]}>

                    <View style={[styles.directionRowSpace , styles.marginTop_35 , styles.marginBottom_20]}>
                        <Text style={[styles.textRegular , styles.text_gray , styles.textSize_15 , styles.alignStart]}>{ i18n.t('restRate') }</Text>
                        <View style={[styles.directionRow]}>
                            <StarRating
                                maxStars={5}
                                rating={restStarCount}
                                selectedStar={(rating) => setRestStarCount(rating)}
                                fullStarColor={'#fec104'}
                                starSize={22}
                                starStyle={{ marginHorizontal: 5 }}
                            />
                            <Text style={[styles.textRegular , styles.text_midGray , styles.textSize_15, {marginLeft:10}]}>{restStarCount}</Text>
                        </View>
                    </View>

                    <View style={[styles.directionRowSpace ]}>
                        <Text style={[styles.textRegular , styles.text_gray , styles.textSize_15 , styles.alignStart]}>{ i18n.t('appRate') }</Text>
                        <View style={[styles.directionRow]}>
                            <StarRating
                                maxStars={5}
                                rating={appStarCount}
                                selectedStar={(rating) => setAppStarCount(rating)}
                                fullStarColor={'#fec104'}
                                starSize={22}
                                starStyle={{ marginHorizontal: 5 }}
                            />
                            <Text style={[styles.textRegular , styles.text_midGray , styles.textSize_15 , {marginLeft:10}]}>{appStarCount}</Text>
                        </View>
                    </View>

                    <TouchableOpacity onPress={() => navigation.navigate('addUrRateComment')} style={[styles.mstrdaBtn , styles.Width_95 , styles.SelfCenter , styles.marginTop_55]}>
                        <Text style={[styles.textBold , styles.text_White , styles.textSize_15]}>{ i18n.t('rate') }</Text>
                    </TouchableOpacity>

                </View>

            </Content>
        </Container>
    );
}

export default AddUrRate;


