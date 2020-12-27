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

function Offers({navigation,route}) {

    // const lang = useSelector(state => state.lang.lang);
    // const token = useSelector(state => state.auth.user ? state.auth.user.data.token : null);

    const offers =[
        {id :'0',image:require("../../assets/images/banner_home.png")},
        {id :'1',image:require("../../assets/images/banner_red.png")},
        {id :'2',image:require("../../assets/images/banner_home.png")},
        {id :'3',image:require("../../assets/images/banner_red.png")},
    ]
    function Item({ image , id , index }) {
        return (
            <TouchableOpacity onPress={() => navigation.navigate('offerDetails')} style={[styles.Width_100 , styles.height_150 , styles.marginBottom_15]}>
                <Image source={image} style={styles.swiperImg} resizeMode={'cover'}/>
            </TouchableOpacity>
        );
    }


    return (
        <Container style={[styles.bg_black]}>
            <Content contentContainerStyle={[styles.bgFullWidth , styles.bg_black]}>

                <Header navigation={navigation} title={ i18n.t('offers') } />

                <View style={[styles.bgFullWidth ,styles.bg_White, styles.Width_100,styles.paddingHorizontal_20, {overflow:'hidden'}]}>

                    <View style={[styles.marginTop_20]}>
                        <FlatList
                            data={offers}
                            horizontal={false}
                            showsVerticalScrollIndicator={false}
                            renderItem={({ item , index}) => <Item
                                id={item.id}
                                image={item.image}
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

export default Offers;


