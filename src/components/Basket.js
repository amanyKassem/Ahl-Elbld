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

function Basket({navigation,route}) {

    // const lang = useSelector(state => state.lang.lang);
    // const token = useSelector(state => state.auth.user ? state.auth.user.data.token : null);

    const myOrders =[
        {id :'0',name:'اسم المطعم' ,category:'مطاعم'  , space:'مسافه ٦ كيلو' , orderNum:'12345', image:require("../../assets/images/restu_image.png")},
        {id :'1',name:'اسم المطعم' ,category:'محلات'  , space:'مسافه ٦ كيلو' , orderNum:'12345', image:require("../../assets/images/depart_two.png")},
        {id :'2',name:'اسم المطعم' ,category:'مخابز'  , space:'مسافه ٦ كيلو' , orderNum:'12345', image:require("../../assets/images/depart_four.png")},
        {id :'3',name:'اسم المطعم',category:'حلويات'  , space:'مسافه ٦ كيلو' , orderNum:'12345', image:require("../../assets/images/depart_six.png")},
    ]
    function Item({ name , category , image , space , id , index }) {
        return (
            <TouchableOpacity onPress={() => navigation.navigate('basketDetails')} style={[styles.borderGray,styles.marginBottom_20 , styles.directionRow , styles.Radius_5 , {flex:1 , padding:15}]}>
                <Image source={image} style={[styles.icon70 , styles.Radius_7]} resizeMode={'cover'} />
                <View style={[{marginLeft:15 , flex:1}]}>
                    <View style={styles.directionRowSpace}>
                        <Text style={[styles.textRegular , styles.text_gray , styles.textSize_14]}>{ name }</Text>
                        <View style={[styles.directionRow]}>
                            <StarRating
                                disabled={false}
                                maxStars={5}
                                rating={4}
                                fullStarColor={'#fec104'}
                                starSize={12}
                                starStyle={{ marginHorizontal: 2 }}
                            />
                        </View>
                    </View>
                    <Text style={[styles.textRegular , styles.text_midGray , styles.textSize_13 , styles.alignStart , styles.marginVertical_5]}>{ category }</Text>
                    <View style={[styles.directionRow , styles.marginTop_5]}>
                        <Icon type={'MaterialIcons'} name={'location-on'} style={[styles.textSize_14 , styles.text_mstarda , {marginRight:5}]} />
                        <Text style={[styles.textRegular , styles.text_midGray , styles.textSize_13]}>{ space }</Text>
                    </View>
                </View>
            </TouchableOpacity>
        );
    }


    return (
        <Container style={[styles.bg_black]}>
            <Content contentContainerStyle={[styles.bgFullWidth , styles.bg_black]}>

                <Header navigation={navigation} title={ i18n.t('basket') } />

                <View style={[styles.bgFullWidth ,styles.bg_White, styles.Width_100,styles.paddingHorizontal_20, {overflow:'hidden'}]}>

                    <View style={[styles.marginTop_20]}>
                        <FlatList
                            data={myOrders}
                            horizontal={false}
                            showsVerticalScrollIndicator={false}
                            renderItem={({ item , index}) => <Item
                                id={item.id}
                                name={item.name}
                                category={item.category}
                                image={item.image}
                                space={item.space}
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

export default Basket;


