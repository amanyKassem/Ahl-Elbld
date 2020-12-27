import React, {useEffect, useRef, useState} from "react";
import {View, Text, Image, TouchableOpacity, Dimensions, FlatList, I18nManager} from "react-native";
import {Container, Content, Form, Icon, Input, Item, Label} from 'native-base'
import styles from '../../assets/styles'
import i18n from "../../locale/i18n";
import Swiper from 'react-native-swiper';
import {useSelector, useDispatch} from 'react-redux';
import Header from '../common/Header';
import COLORS from "../consts/colors";
import  Modal  from "react-native-modal";

const height = Dimensions.get('window').height;
const isIOS = Platform.OS === 'ios';
const latitudeDelta = 0.922;
const longitudeDelta = 0.521;

function BasketProduct({pro}) {

    // const lang = useSelector(state => state.lang.lang);
    // const token = useSelector(state => state.auth.user ? state.auth.user.data.token : null);
    const [showModal, setShowModal] = useState(false);

    const [count, setCount] = useState(1)


    function toggleModal () {
        setShowModal(!showModal);
    };

    useEffect(() => {
        setCount(pro.count)
    }, [])

    const increment = () => {
        setCount(count + 1);
    }

    const decrement = () => {
        if (count === 1) {
            setCount(1);
        } else {
            setCount(count - 1);
        }
    }

    return (
        <View style={[styles.borderGray ,styles.paddingHorizontal_10 , styles.paddingVertical_10 , styles.marginBottom_5 , styles.directionRowSpace]}>
            <View style={[styles.directionRow]}>
                <Text style={[styles.textRegular , styles.text_gray , styles.textSize_12 , styles.alignStart , {marginRight:5}]}>{pro.name}</Text>
                <TouchableOpacity onPress={toggleModal}>
                    <Text style={[styles.textRegular , styles.text_mstarda , styles.textSize_12 , styles.alignStart]}>( {i18n.t('details') } )</Text>
                </TouchableOpacity>
            </View>

            <View style={[styles.directionRow, styles.paddingHorizontal_10 ,{borderRightWidth:1 , borderLeftWidth:1 , borderColor:'#ddd'}]}>
                <TouchableOpacity onPress={() => increment()} style={[styles.icon25 , styles.bg_mstarda , styles.centerContext , styles.Radius_5]}>
                    <Icon type={'AntDesign'} name={'plus'} style={[styles.textSize_12 , styles.text_White ]} />
                </TouchableOpacity>
                <Text style={[styles.textRegular , styles.text_mstarda , styles.textSize_12 , styles.marginHorizontal_15 ]}>{pro.count}</Text>
                <TouchableOpacity onPress={() => decrement()} style={[styles.icon25 , styles.centerContext  , styles.Radius_5, {backgroundColor:'#ddd'}]}>
                    <Icon type={'AntDesign'} name={'minus'} style={[styles.textSize_12 , styles.text_gray ]} />
                </TouchableOpacity>
            </View>

            <View style={[styles.directionRow]}>
                <Text style={[styles.textRegular , styles.text_mstarda , styles.textSize_12 , styles.alignStart]}>{pro.price}</Text>
                <TouchableOpacity>
                    <Image source={require('../../assets/images/delete_gray.png')} style={[styles.icon25 , {marginLeft:10}]} resizeMode={'contain'} />
                </TouchableOpacity>
            </View>

            <Modal
                onBackdropPress                 ={toggleModal}
                onBackButtonPress               = {toggleModal}
                isVisible                       = {showModal}
                style                           = {styles.bgModel}
                avoidKeyboard                    = {true}
            >

                <View style={[styles.bg_White, styles.overHidden, styles.Width_100, {borderTopStartRadius:5 , borderTopEndRadius:5}]}>

                    <View style={[styles.bg_gray , styles.Width_100 , styles.paddingVertical_15 , styles.paddingHorizontal_20]}>
                        <Text style={[styles.textBold , styles.text_White , styles.textSize_15]}>{ i18n.t('details') }</Text>
                    </View>

                    <View style={[styles.paddingHorizontal_20 , styles.paddingVertical_20]}>
                        <Text style={[styles.textRegular , styles.text_gray , styles.textSize_15 , styles.marginBottom_10]}>- كولا</Text>
                        <Text style={[styles.textRegular , styles.text_gray , styles.textSize_15 , styles.marginBottom_10]}>- بطاطس</Text>
                        <Text style={[styles.textRegular , styles.text_gray , styles.textSize_15 , styles.marginBottom_10]}>- صوص جبنة</Text>
                    </View>


                </View>

            </Modal>
        </View>
    );
}

export default BasketProduct;


