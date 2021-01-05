import React, {useEffect, useRef, useState} from "react";
import {View, Text, Image, TouchableOpacity, Dimensions, FlatList, I18nManager} from "react-native";
import {Container, Content, Icon, Input} from 'native-base'
import styles from '../../../assets/styles'
import i18n from "../../../locale/i18n";
import Swiper from 'react-native-swiper';
import {useSelector, useDispatch} from 'react-redux';
import Header from '../../common/Header';
import COLORS from "../../consts/colors";

const height = Dimensions.get('window').height;
const isIOS = Platform.OS === 'ios';

function Home({navigation,route}) {


    // const lang = useSelector(state => state.lang.lang);
    // const token = useSelector(state => state.auth.user ? state.auth.user.data.token : null);
    const specialOrder = false;

    const myOrders =[
        {id :'0',name:'اسم مقدم الخدمة'  , date:'9/7/2019' , orderNum:'12345', image:require("../../../assets/images/banner1.png")},
        {id :'1',name:'اسم الأسرة'  , date:'9/7/2019' , orderNum:'12345', image:require("../../../assets/images/banner2.png")},
        {id :'2',name:'اسم مقدم الخدمة'  , date:'9/7/2019' , orderNum:'12345', image:require("../../../assets/images/banner3.png")},
        {id :'3',name:'اسم مقدم الخدمة'  , date:'9/7/2019' , orderNum:'12345', image:require("../../../assets/images/banner4.png")},
      ]

    function Item({ name , image , date , orderNum , id , index }) {
        return (
            <TouchableOpacity onPress={() => navigation.navigate(specialOrder ? 'specialOrderDetails' : 'normalOrderDetails')} style={[styles.borderGray,styles.marginBottom_20 , styles.directionRow , styles.Radius_5 , {flex:1 , padding:10}]}>
                <View style={[styles.directionRow , {flex:1}]}>
                    <Image source={image} style={[styles.icon60 , styles.Radius_7]} resizeMode={'cover'} />
                    <View style={[styles.paddingHorizontal_10 , {flex:1}]}>
                        <Text style={[styles.textRegular , styles.text_gray , styles.textSize_14 , styles.marginBottom_5 , styles.alignStart , {lineHeight:20}]}>{name}</Text>
                        <Text style={[styles.textRegular , styles.text_midGray , styles.textSize_14 , styles.alignStart]}>{ date }</Text>
                    </View>
                </View>
                <View style={[{borderLeftWidth:1 , borderLeftColor:'#ddd' , paddingLeft:15} , styles.heightFull , styles.centerContext]}>
                    <Text style={[styles.textRegular , styles.text_mstarda , styles.textSize_14 , styles.marginBottom_5]}>{ i18n.t('orderNum') }</Text>
                    <Text style={[styles.textRegular , styles.text_gray , styles.textSize_14 ]}>{ orderNum }</Text>
                </View>
            </TouchableOpacity>
        );
    }


    return (
        <Container style={[styles.bg_gray]}>
            <Content contentContainerStyle={[styles.bgFullWidth , styles.bg_gray]}>

                <Header navigation={navigation} title={ i18n.t('home') } delegate={true}/>

                <View style={[styles.bgFullWidth ,styles.bg_White, styles.Width_100,styles.paddingHorizontal_20 , styles.paddingVertical_20, {overflow:'hidden'}]}>

                    <FlatList
                        data={myOrders}
                        horizontal={false}
                        showsVerticalScrollIndicator={false}
                        renderItem={({ item , index}) => <Item
                            id={item.id}
                            name={item.name}
                            image={item.image}
                            date={item.date}
                            orderNum={item.orderNum}
                            index={index}
                        />}
                        keyExtractor={item => item.id}
                        style={[styles.marginBottom_35]}
                    />

                </View>

            </Content>
        </Container>
    );
}

export default Home;


