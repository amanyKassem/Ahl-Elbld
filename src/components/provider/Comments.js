import React, {useEffect, useRef, useState} from "react";
import {View, Text, Image, TouchableOpacity, Dimensions, FlatList, I18nManager} from "react-native";
import {Container, Content, Icon, Input} from 'native-base'
import styles from '../../../assets/styles'
import i18n from "../../../locale/i18n";
import Swiper from 'react-native-swiper';
import {useSelector, useDispatch} from 'react-redux';
import Header from '../../common/Header';
import COLORS from "../../consts/colors";
import StarRating from "react-native-star-rating";

const height = Dimensions.get('window').height;
const isIOS = Platform.OS === 'ios';

function Comments({navigation,route}) {


    // const lang = useSelector(state => state.lang.lang);
    // const token = useSelector(state => state.auth.user ? state.auth.user.data.token : null);

    const myOrders =[
        {id :'0',name:'اسم مقدم الخدمة'  , comment:'تعليق تعليق تعلييييييق العتبة ميدان الجيزه تحرير تحرير تحرييييييييييير' , image:require("../../../assets/images/banner1.png")},
        {id :'1',name:'اسم مقدم الخدمة' , comment:'تعليق تعليق تعلييييييق العتبة ميدان الجيزه تحرير تحرير تحرييييييييييير' , image:require("../../../assets/images/banner2.png")},
        {id :'2',name:'اسم مقدم الخدمة'  , comment:'تعليق تعليق تعلييييييق العتبة ميدان الجيزه تحرير تحرير تحرييييييييييير' , image:require("../../../assets/images/banner3.png")},
        {id :'3',name:'اسم مقدم الخدمة' , comment:'تعليق تعليق تعلييييييق العتبة ميدان الجيزه تحرير تحرير تحرييييييييييير' , image:require("../../../assets/images/banner4.png")},
     ]
    function Item({ name , image , comment , id , index }) {
        return (
            <TouchableOpacity onPress={() => navigation.navigate('categoryDetails')} style={[styles.borderGray,styles.marginBottom_20 , styles.directionBasicRow , styles.Radius_5 , {flex:1 , padding:10}]}>
                <Image source={image} style={[styles.icon33 , styles.Radius_50]} resizeMode={'cover'} />
                <View style={[{marginLeft:15 , flex:1}]}>
                    <View style={styles.directionRow}>
                        <Text style={[styles.textRegular , styles.text_gray , styles.textSize_12]}>{ name.substr(0,20) }</Text>
                        <View style={[styles.directionRow , {marginLeft:30}]}>
                            <StarRating
                                disabled={false}
                                maxStars={5}
                                rating={4}
                                fullStarColor={'#fec104'}
                                starSize={10}
                                starStyle={{ marginHorizontal: 2 }}
                            />
                        </View>
                    </View>
                    <Text style={[styles.textRegular , styles.text_midGray , styles.textSize_12 , styles.writingDir ,styles.marginTop_5, {lineHeight:20}]}>{ comment }</Text>
                </View>
            </TouchableOpacity>
        );
    }



    return (
        <Container style={[styles.bg_gray]}>
            <Content contentContainerStyle={[styles.bgFullWidth , styles.bg_gray]}>

                <Header navigation={navigation} title={ i18n.t('comments') }/>

                <View style={[styles.bgFullWidth ,styles.bg_White, styles.Width_100,styles.paddingHorizontal_20, {overflow:'hidden' , zIndex:-1}]}>

                    <View style={[styles.marginTop_20 , styles.marginBottom_60]}>
                        <FlatList
                            data={myOrders}
                            horizontal={false}
                            showsVerticalScrollIndicator={false}
                            renderItem={({ item , index}) => <Item
                                id={item.id}
                                name={item.name}
                                image={item.image}
                                comment={item.comment}
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

export default Comments;


