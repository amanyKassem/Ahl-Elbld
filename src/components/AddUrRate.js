import React, {useEffect, useRef, useState} from "react";
import {View, Text, Image, TouchableOpacity, Dimensions, FlatList, I18nManager} from "react-native";
import {Container, Content, Form, Icon, Input, Item, Radio, Textarea} from 'native-base'
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
    const [msgRest, setMsgRest] = useState('');
    const [quality, setQuality] = useState('0');
    const [cleanliness, setCleanliness] = useState('0');

    const [delegateStarCount, setDelegateStarCount] = useState(4);
    const [msgDelegate, setMsgDelegate] = useState('');
    // const [quality, setQuality] = useState('0');
    // const [cleanliness, setCleanliness] = useState('0');

    return (
        <Container style={[styles.bg_gray]}>
            <Content contentContainerStyle={[styles.bgFullWidth , styles.bg_gray]}>

                <Header navigation={navigation} title={ i18n.t('addUrRate') } />

                <View style={[styles.bgFullWidth ,styles.bg_White, styles.Width_100, {overflow:'hidden'}]}>

                    <View style={[styles.bg_mstarda , styles.marginTop_30 ,styles.paddingHorizontal_20 ,  styles.centerContext  , styles.height_45]}>
                        <Text style={[styles.textBold , styles.text_White , styles.textSize_14]}>{i18n.t('restRate') }</Text>
                    </View>

                    <View style={[ styles.flexCenter , styles.Width_100 , styles.marginVertical_20 , styles.paddingHorizontal_20 ]}>
                        <Image source={require("../../assets/images/banner1.png")} style={[styles.icon70 , styles.Radius_7]} resizeMode={'cover'} />
                        <Text style={[styles.textRegular , styles.text_gray , styles.marginVertical_10 , styles.textSize_14]}>اسم المطعم</Text>
                        <StarRating
                            maxStars={5}
                            rating={restStarCount}
                            selectedStar={(rating) => setRestStarCount(rating)}
                            fullStarColor={'#fec104'}
                            starSize={14}
                            starStyle={{ marginHorizontal: 1 }}
                        />

                        <Item style={[styles.item , styles.marginTop_10]}>
                            <Textarea
                                style={[styles.input , styles.height_150 , styles.paddingVertical_10 ,
                                    {borderTopRightRadius :10 ,borderTopLeftRadius :10, borderRadius :10  , borderColor:msgRest ? COLORS.mstarda : '#eee',
                                        borderWidth:1 , backgroundColor:msgRest ? '#fff' : '#eee' , lineHeight:22}]}
                                placeholder={i18n.t('writeComment') }
                                onChangeText={(msgRest) => setMsgRest(msgRest)}
                                value={msgRest}
                            />
                        </Item>

                        <Text style={[styles.textRegular , styles.text_gray , styles.marginBottom_10 , styles.textSize_14 , styles.alignStart]}>{i18n.t('rateDetails') }</Text>

                        <View style={[styles.directionRowSpace , styles.Width_100 , styles.marginTop_10]}>
                            <Text style={[styles.textRegular , styles.text_gray , styles.textSize_14]}>{ i18n.t('quality') }</Text>
                            <View style={[styles.directionRowSpace , {flex:1 , marginLeft:50}]}>
                                <TouchableOpacity onPress={() => setQuality('0')} style={[styles.directionRow]}>
                                    <Radio
                                        color={quality === '0' ? COLORS.mstarda : COLORS.midGray}
                                        selectedColor={COLORS.mstarda}
                                        selected={quality === '0'}
                                        onPress={() => setQuality('0')}
                                    />
                                    <Text style={[styles.textRegular , styles.text_midGray , styles.textSize_14 , {marginLeft:10}]}>{ i18n.t('good') }</Text>
                                </TouchableOpacity>
                                <TouchableOpacity onPress={() => setQuality('1')} style={[styles.directionRow]}>
                                    <Radio
                                        color={quality === '1' ? COLORS.mstarda : COLORS.midGray}
                                        selectedColor={COLORS.mstarda}
                                        selected={quality === '1'}
                                        onPress={() => setQuality('1')}
                                    />
                                    <Text style={[styles.textRegular , styles.text_midGray , styles.textSize_14 , {marginLeft:10}]}>{ i18n.t('excellent') }</Text>
                                </TouchableOpacity>
                                <TouchableOpacity onPress={() => setQuality('2')} style={[styles.directionRow]}>
                                    <Radio
                                        color={quality === '2' ? COLORS.mstarda : COLORS.midGray}
                                        selectedColor={COLORS.mstarda}
                                        selected={quality === '2'}
                                        onPress={() => setQuality('2')}
                                    />
                                    <Text style={[styles.textRegular , styles.text_midGray , styles.textSize_14 , {marginLeft:10}]}>{ i18n.t('bad') }</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                        <View style={[styles.directionRowSpace , styles.Width_100 , styles.marginTop_15]}>
                            <Text style={[styles.textRegular , styles.text_gray , styles.textSize_14]}>{ i18n.t('cleanliness') }</Text>
                            <View style={[styles.directionRowSpace , {flex:1 , marginLeft:50}]}>
                                <TouchableOpacity onPress={() => setCleanliness('0')} style={[styles.directionRow]}>
                                    <Radio
                                        color={cleanliness === '0' ? COLORS.mstarda : COLORS.midGray}
                                        selectedColor={COLORS.mstarda}
                                        selected={cleanliness === '0'}
                                        onPress={() => setCleanliness('0')}
                                    />
                                    <Text style={[styles.textRegular , styles.text_midGray , styles.textSize_14 , {marginLeft:10}]}>{ i18n.t('good') }</Text>
                                </TouchableOpacity>
                                <TouchableOpacity onPress={() => setCleanliness('1')} style={[styles.directionRow]}>
                                    <Radio
                                        color={cleanliness === '1' ? COLORS.mstarda : COLORS.midGray}
                                        selectedColor={COLORS.mstarda}
                                        selected={cleanliness === '1'}
                                        onPress={() => setCleanliness('1')}
                                    />
                                    <Text style={[styles.textRegular , styles.text_midGray , styles.textSize_14 , {marginLeft:10}]}>{ i18n.t('excellent') }</Text>
                                </TouchableOpacity>
                                <TouchableOpacity onPress={() => setCleanliness('2')} style={[styles.directionRow]}>
                                    <Radio
                                        color={cleanliness === '2' ? COLORS.mstarda : COLORS.midGray}
                                        selectedColor={COLORS.mstarda}
                                        selected={cleanliness === '2'}
                                        onPress={() => setCleanliness('2')}
                                    />
                                    <Text style={[styles.textRegular , styles.text_midGray , styles.textSize_14 , {marginLeft:10}]}>{ i18n.t('bad') }</Text>
                                </TouchableOpacity>
                            </View>
                        </View>

                    </View>

                    <View style={[styles.bg_mstarda , styles.marginTop_30 ,styles.paddingHorizontal_20 ,  styles.centerContext  , styles.height_45]}>
                        <Text style={[styles.textBold , styles.text_White , styles.textSize_14]}>{i18n.t('delegateRate') }</Text>
                    </View>

                    <View style={[ styles.flexCenter , styles.Width_100 , styles.marginVertical_20 , styles.paddingHorizontal_20 ]}>
                        <Image source={require("../../assets/images/banner1.png")} style={[styles.icon70 , styles.Radius_7]} resizeMode={'cover'} />
                        <Text style={[styles.textRegular , styles.text_gray , styles.marginVertical_10 , styles.textSize_14]}>اسم المندوب</Text>
                        <StarRating
                            maxStars={5}
                            rating={delegateStarCount}
                            selectedStar={(rating) => setDelegateStarCount(rating)}
                            fullStarColor={'#fec104'}
                            starSize={14}
                            starStyle={{ marginHorizontal: 1 }}
                        />

                        <Item style={[styles.item , styles.marginTop_10]}>
                            <Textarea
                                style={[styles.input , styles.height_150 , styles.paddingVertical_10 ,
                                    {borderTopRightRadius :10 ,borderTopLeftRadius :10, borderRadius :10  , borderColor:msgDelegate ? COLORS.mstarda : '#eee',
                                        borderWidth:1 , backgroundColor:msgDelegate ? '#fff' : '#eee' , lineHeight:22}]}
                                placeholder={i18n.t('writeComment') }
                                onChangeText={(msgDelegate) => setMsgDelegate(msgDelegate)}
                                value={msgDelegate}
                            />
                        </Item>

                        <Text style={[styles.textRegular , styles.text_gray , styles.marginBottom_10 , styles.textSize_14 , styles.alignStart]}>{i18n.t('rateDetails') }</Text>

                        <View style={[styles.directionRowSpace , styles.Width_100 , styles.marginTop_10]}>
                            <Text style={[styles.textRegular , styles.text_gray , styles.textSize_14]}>{ i18n.t('handlingWay') }</Text>
                            <View style={[styles.directionRowSpace , {flex:1 , marginLeft:50}]}>
                                <TouchableOpacity onPress={() => setQuality('0')} style={[styles.directionRow]}>
                                    <Radio
                                        color={quality === '0' ? COLORS.mstarda : COLORS.midGray}
                                        selectedColor={COLORS.mstarda}
                                        selected={quality === '0'}
                                        onPress={() => setQuality('0')}
                                    />
                                    <Text style={[styles.textRegular , styles.text_midGray , styles.textSize_14 , {marginLeft:10}]}>{ i18n.t('good') }</Text>
                                </TouchableOpacity>
                                <TouchableOpacity onPress={() => setQuality('1')} style={[styles.directionRow]}>
                                    <Radio
                                        color={quality === '1' ? COLORS.mstarda : COLORS.midGray}
                                        selectedColor={COLORS.mstarda}
                                        selected={quality === '1'}
                                        onPress={() => setQuality('1')}
                                    />
                                    <Text style={[styles.textRegular , styles.text_midGray , styles.textSize_14 , {marginLeft:10}]}>{ i18n.t('excellent') }</Text>
                                </TouchableOpacity>
                                <TouchableOpacity onPress={() => setQuality('2')} style={[styles.directionRow]}>
                                    <Radio
                                        color={quality === '2' ? COLORS.mstarda : COLORS.midGray}
                                        selectedColor={COLORS.mstarda}
                                        selected={quality === '2'}
                                        onPress={() => setQuality('2')}
                                    />
                                    <Text style={[styles.textRegular , styles.text_midGray , styles.textSize_14 , {marginLeft:10}]}>{ i18n.t('bad') }</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                        <View style={[styles.directionRowSpace , styles.Width_100 , styles.marginTop_15]}>
                            <Text style={[styles.textRegular , styles.text_gray , styles.textSize_14]}>{ i18n.t('deliverySpeed') }</Text>
                            <View style={[styles.directionRowSpace , {flex:1 , marginLeft:50}]}>
                                <TouchableOpacity onPress={() => setCleanliness('0')} style={[styles.directionRow]}>
                                    <Radio
                                        color={cleanliness === '0' ? COLORS.mstarda : COLORS.midGray}
                                        selectedColor={COLORS.mstarda}
                                        selected={cleanliness === '0'}
                                        onPress={() => setCleanliness('0')}
                                    />
                                    <Text style={[styles.textRegular , styles.text_midGray , styles.textSize_14 , {marginLeft:10}]}>{ i18n.t('good') }</Text>
                                </TouchableOpacity>
                                <TouchableOpacity onPress={() => setCleanliness('1')} style={[styles.directionRow]}>
                                    <Radio
                                        color={cleanliness === '1' ? COLORS.mstarda : COLORS.midGray}
                                        selectedColor={COLORS.mstarda}
                                        selected={cleanliness === '1'}
                                        onPress={() => setCleanliness('1')}
                                    />
                                    <Text style={[styles.textRegular , styles.text_midGray , styles.textSize_14 , {marginLeft:10}]}>{ i18n.t('excellent') }</Text>
                                </TouchableOpacity>
                                <TouchableOpacity onPress={() => setCleanliness('2')} style={[styles.directionRow]}>
                                    <Radio
                                        color={cleanliness === '2' ? COLORS.mstarda : COLORS.midGray}
                                        selectedColor={COLORS.mstarda}
                                        selected={cleanliness === '2'}
                                        onPress={() => setCleanliness('2')}
                                    />
                                    <Text style={[styles.textRegular , styles.text_midGray , styles.textSize_14 , {marginLeft:10}]}>{ i18n.t('bad') }</Text>
                                </TouchableOpacity>
                            </View>
                        </View>

                    </View>

                    <TouchableOpacity onPress={() => navigation.navigate('rateSuccessfully')} style={[styles.mstrdaBtn , styles.Width_95 , styles.SelfCenter , styles.marginTop_40 , styles.marginBottom_35]}>
                        <Text style={[styles.textBold , styles.text_White , styles.textSize_15]}>{ i18n.t('rate') }</Text>
                    </TouchableOpacity>

                </View>

            </Content>
        </Container>
    );
}

export default AddUrRate;


