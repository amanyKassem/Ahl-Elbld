import React, {useEffect, useRef, useState} from "react";
import {View, Text, Image, TouchableOpacity, Dimensions, FlatList, I18nManager, ScrollView} from "react-native";
import {Container, Content, Icon, Input} from 'native-base'
import styles from '../../assets/styles'
import i18n from "../../locale/i18n";
import {useSelector, useDispatch} from 'react-redux';
import Header from '../common/Header';
import COLORS from "../consts/colors";
import FavItem from "./FavItem";

const height = Dimensions.get('window').height;
const isIOS = Platform.OS === 'ios';

function Favourite({navigation,route}) {

    const myOrders =[
        {id :'0', isFav : true , name:'اسم مقدم الخدمة'  , location:'الرياض - السعودية' , image:require("../../assets/images/banner1.png")},
        {id :'1', isFav : false , name:'اسم مقدم الخدمة' , location:'الرياض - السعودية' , image:require("../../assets/images/banner2.png")},
        {id :'2', isFav : false , name:'اسم مقدم الخدمة'  , location:'الرياض - السعودية' , image:require("../../assets/images/banner3.png")},
        {id :'3', isFav : true , name:'اسم مقدم الخدمة' , location:'الرياض - السعودية' , image:require("../../assets/images/banner4.png")},
    ]
    function Item({ name , image , location , id , index , isFav }) {
        return (
            <FavItem data={{name , image , location , id , index}} isFav={isFav}
                   onToggleFavorite={() => onToggleFavorite(id)}
                   navigation={navigation}/>
        );
    }

    function onToggleFavorite (id){
        // axios({
        //     url         : CONST.url + 'favAndUnFavAd',
        //     method      : 'POST',
        //     headers     : { Authorization: token },
        //     data        : {lang ,ad_id :id }
        // }).then(response => {
        //
        //     fetchData();
        //
        //     Toast.show({
        //         text        : response.data.message,
        //         type        : response.data.success ? "success" : "danger",
        //         duration    : 3000,
        //         textStyle       : {
        //             color           : "white",
        //             fontFamily      : 'cairo',
        //             textAlign       : 'center'
        //         }
        //     });
        // });

    }


    return (
        <Container style={[styles.bg_gray]}>
            <Content contentContainerStyle={[styles.bgFullWidth , styles.bg_gray]}>

                <Header navigation={navigation} title={ i18n.t('favourite') } />

                <View style={[styles.bgFullWidth ,styles.bg_White, styles.Width_100,styles.paddingHorizontal_20, {overflow:'hidden'}]}>

                    <View style={[styles.marginTop_20 , styles.marginBottom_60]}>
                        <FlatList
                            data={myOrders}
                            horizontal={false}
                            showsVerticalScrollIndicator={false}
                            renderItem={({ item , index}) => <Item
                                id={item.id}
                                name={item.name}
                                image={item.image}
                                location={item.location}
                                isFav={item.isFav}
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

export default Favourite;


