import React, {useEffect, useRef, useState} from "react";
import {View, Text, Image, TouchableOpacity, Dimensions, FlatList, I18nManager, ScrollView} from "react-native";
import {Container, Content, Icon, Input} from 'native-base'
import styles from '../../assets/styles'
import i18n from "../../locale/i18n";
import Swiper from 'react-native-swiper';
import {useSelector, useDispatch} from 'react-redux';
import Header from '../common/Header';
import COLORS from "../consts/colors";

const height = Dimensions.get('window').height;
const isIOS = Platform.OS === 'ios';
const latitudeDelta = 0.922;
const longitudeDelta = 0.521;

function MyOrders({navigation,route}) {

    // const lang = useSelector(state => state.lang.lang);
    // const token = useSelector(state => state.auth.user ? state.auth.user.data.token : null);

    const [active, setActive] = useState(0);

    const myOrders =[
        {id :'0',name:'اسم مقدم الخدمة'  , date:'9/7/2019' , orderNum:'12345', invoiceAmount:'123456', image:require("../../assets/images/banner1.png")},
        {id :'1',name:'اسم الأسرة'  , date:'9/7/2019' , orderNum:'12345', invoiceAmount:'123456', image:require("../../assets/images/banner2.png")},
        {id :'2',name:'اسم مقدم الخدمة'  , date:'9/7/2019' , orderNum:'12345', invoiceAmount:'123456', image:require("../../assets/images/banner3.png")},
        {id :'3',name:'اسم مقدم الخدمة'  , date:'9/7/2019' , orderNum:'12345', invoiceAmount:'123456', image:require("../../assets/images/banner4.png")},
    ]

    function Item({ name , image , date , orderNum , id , index }) {
        return (
            <TouchableOpacity onPress={() => navigation.navigate(active === 1 ? 'productDetails' : 'orderDetails', {orderType:active , pathName:'myOrders'})} style={[styles.borderGray,styles.marginBottom_20 , styles.directionRow , styles.Radius_5 , {flex:1 , padding:15}]}>
                <View style={[styles.directionRow , {flex:1}]}>
                    <Image source={image} style={[styles.icon60 , styles.Radius_7]} resizeMode={'cover'} />
                    <View style={[{marginLeft:15 , flex:1}]}>
                        <Text style={[styles.textRegular , styles.text_gray , styles.textSize_14 , styles.marginBottom_5 , styles.alignStart , {lineHeight:20}]}>{ name}</Text>
                        <Text style={[styles.textRegular , styles.text_midGray , styles.textSize_14 , styles.alignStart]}>{ date }</Text>
                    </View>
                </View>
                <View style={[{borderLeftWidth:1 , borderLeftColor:'#ddd' , paddingLeft:15} , styles.heightFull , styles.centerContext]}>
                    <Text style={[styles.textRegular , styles.text_mstarda , styles.textSize_14 , styles.marginBottom_5]}>{ active === 1 ? i18n.t('invoiceAmount') : i18n.t('orderNum') }</Text>
                    <Text style={[styles.textRegular , styles.text_gray , styles.textSize_14 ]}>{ orderNum }</Text>
                </View>
            </TouchableOpacity>
        );
    }


    return (
        <Container style={[styles.bg_gray]}>
            <Content contentContainerStyle={[styles.bgFullWidth , styles.bg_gray]}>

                <Header navigation={navigation} title={ i18n.t('myOrders') } />

                <View style={[styles.bgFullWidth ,styles.bg_White, styles.Width_100, {overflow:'hidden'}]}>

                    <View>
                        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} contentContainerStyle={[styles.directionRowSpace , {width:'100%'}]} style={[styles.scrollView , {borderBottomWidth:1 , borderBottomColor:'#ddd'}]}>
                            <TouchableOpacity onPress={() => setActive(0)} style={[styles.paddingVertical_15 , styles.Width_50 , styles.paddingHorizontal_15 , {borderBottomWidth:2 , borderBottomColor:active === 0 ? COLORS.mstarda : 'transparent'}]}>
                                <Text style={[styles.textBold , styles.text_gray, styles.textCenter , styles.textSize_13]}>{ i18n.t('orderInProgress') }</Text>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => setActive(1)} style={[styles.paddingVertical_15 , styles.Width_50 , styles.paddingHorizontal_15 , {borderBottomWidth:2 , borderBottomColor:active === 1 ? COLORS.mstarda : 'transparent'}]}>
                                <Text style={[styles.textBold , styles.text_gray , styles.textCenter , styles.textSize_13]}>{ i18n.t('finishedOrders') }</Text>
                            </TouchableOpacity>
                        </ScrollView>
                    </View>

                    <View style={[styles.paddingHorizontal_20 , styles.marginTop_20]}>
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
                        />
                    </View>

                </View>

            </Content>
        </Container>
    );
}

export default MyOrders;


