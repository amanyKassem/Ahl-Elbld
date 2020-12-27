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

function Bills({navigation,route}) {

    // const lang = useSelector(state => state.lang.lang);
    // const token = useSelector(state => state.auth.user ? state.auth.user.data.token : null);

    const myOrders =[
        {id :'0',name:'المبلغ المدفوع'  , price:'25 ر.س' , orderNum:'12345'},
        {id :'1',name:'المبلغ المدفوع'  , price:'25 ر.س' , orderNum:'12345'},
        {id :'2',name:'المبلغ المدفوع'  , price:'25 ر.س' , orderNum:'12345'},
        {id :'3',name:'المبلغ المدفوع'  , price:'25 ر.س' , orderNum:'12345'},
    ]
    function Item({ name , price , orderNum , id , index }) {
        return (
            <View style={[styles.borderGray,styles.marginBottom_20 , styles.height_80 , styles.directionRow , styles.Radius_5 , {flex:1 , padding:15}]}>
                <View style={[styles.directionBasicRow , {flex:1}]}>
                    <View style={[{marginLeft:15}]}>
                        <Text style={[styles.textRegular , styles.text_gray , styles.textSize_14, styles.alignStart , styles.marginBottom_5]}>{ name }</Text>
                        <Text style={[styles.textRegular , styles.text_mstarda , styles.textSize_14 , styles.alignStart]}>{ price }</Text>
                    </View>
                </View>
                <View style={[{borderLeftWidth:1 , borderLeftColor:'#ddd' , paddingLeft:15} , styles.heightFull , styles.centerContext]}>
                    <Text style={[styles.textRegular , styles.text_mstarda , styles.textSize_14 , styles.marginBottom_5]}>{ i18n.t('orderNum') }</Text>
                    <Text style={[styles.textRegular , styles.text_gray , styles.textSize_14]}>{ orderNum }</Text>
                </View>
            </View>
        );
    }


    return (
        <Container style={[styles.bg_black]}>
            <Content contentContainerStyle={[styles.bgFullWidth , styles.bg_black]}>

                <Header navigation={navigation} title={ i18n.t('bills') } />

                <View style={[styles.bgFullWidth ,styles.bg_White, styles.Width_100,styles.paddingHorizontal_20, {overflow:'hidden'}]}>

                    <View style={[styles.marginTop_20]}>
                        <FlatList
                            data={myOrders}
                            horizontal={false}
                            showsVerticalScrollIndicator={false}
                            renderItem={({ item , index}) => <Item
                                id={item.id}
                                name={item.name}
                                price={item.price}
                                orderNum={item.orderNum}
                                index={index}
                            />}
                            keyExtractor={item => item.id}
                        />
                    </View>

                </View>

            </Content>
        </Container>
    );
}

export default Bills;


