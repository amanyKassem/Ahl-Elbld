import React, {useEffect, useRef, useState} from "react";
import {View, Text, Image, TouchableOpacity, Dimensions, FlatList, I18nManager} from "react-native";
import {Container, Content, Icon, Input} from 'native-base'
import styles from '../../assets/styles'
import i18n from "../../locale/i18n";
import Swiper from 'react-native-swiper';
import {useSelector, useDispatch} from 'react-redux';
import Header from '../common/Header';
import COLORS from "../consts/colors";

const height = Dimensions.get('window').height;
const isIOS = Platform.OS === 'ios';

function Basket({navigation,route}) {

    // const lang = useSelector(state => state.lang.lang);
    // const token = useSelector(state => state.auth.user ? state.auth.user.data.token : null);
    const [search, setSearch] = useState('');

    const myOrders =[
        {id :'0',name:'اسم مقدم الخدمة'  , location:'الرياض - السعودية' , image:require("../../assets/images/banner1.png")},
        {id :'1',name:'اسم مقدم الخدمة' , location:'الرياض - السعودية' , image:require("../../assets/images/banner2.png")},
        {id :'2',name:'اسم مقدم الخدمة'  , location:'الرياض - السعودية' , image:require("../../assets/images/banner3.png")},
        {id :'3',name:'اسم مقدم الخدمة' , location:'الرياض - السعودية' , image:require("../../assets/images/banner4.png")},
    ]
    function Item({ name , image , location , id , index }) {
        return (
            <TouchableOpacity onPress={() => navigation.navigate('basketDetails')} style={[styles.borderGray,styles.marginBottom_20 , styles.directionRow , styles.Radius_5 , {flex:1 , padding:10}]}>
                <Image source={image} style={[styles.icon50 , styles.Radius_7]} resizeMode={'cover'} />
                <View style={[styles.paddingHorizontal_10 , {flex:1}]}>
                    <Text style={[styles.textRegular , styles.text_gray , styles.textSize_14 , styles.alignStart]}>{ name }</Text>
                    <View style={[styles.directionRow , styles.marginTop_5]}>
                        <Icon type={'MaterialIcons'} name={'location-on'} style={[styles.textSize_14 , styles.text_mstarda , {marginRight:5}]} />
                        <Text style={[styles.textRegular , styles.text_midGray , styles.textSize_13, {lineHeight:20}]}>{ location }</Text>
                    </View>
                </View>
            </TouchableOpacity>
        );
    }


    return (
        <Container style={[styles.bg_gray]}>
            <Content contentContainerStyle={[styles.bgFullWidth , styles.bg_gray]}>

                <Header navigation={navigation} title={ i18n.t('basket') } />

                <View style={[styles.Width_90,styles.SelfCenter , styles.marginBottom_20 , styles.marginTop_15]}>
                    <Input style={[styles.inputSearch , styles.Width_100 , {flex:0}]}
                           placeholder={i18n.t('search')}
                           placeholderTextColor={'#fff'}
                           onChangeText={(search) => setSearch(search)}
                           value={search}
                    />

                    <TouchableOpacity onPress={() => navigation.push('searchResults' , {keyword:search})} style={[styles.directionRow , {position:'absolute' , right:15 , top:13}]}>
                        <Image source={require("../../assets/images/search.png")} style={[styles.icon17]} resizeMode={'cover'} />
                    </TouchableOpacity>
                </View>

                <View style={[styles.bgFullWidth ,styles.bg_White, styles.Width_100,styles.paddingHorizontal_20, {overflow:'hidden'}]}>

                    <View style={[styles.marginTop_20]}>
                        <FlatList
                            data={myOrders}
                            horizontal={false}
                            showsVerticalScrollIndicator={false}
                            renderItem={({ item , index}) => <Item
                                id={item.id}
                                name={item.name}
                                image={item.image}
                                location={item.location}
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


