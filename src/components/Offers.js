import React, {useEffect, useRef, useState} from "react";
import {View, Text, Image, TouchableOpacity, Dimensions, FlatList, I18nManager} from "react-native";
import {Container, Content, Form, Icon, Input, Item, Label} from 'native-base'
import styles from '../../assets/styles'
import i18n from "../../locale/i18n";
import Swiper from 'react-native-swiper';
import {useSelector, useDispatch} from 'react-redux';
import Header from '../common/Header';
import COLORS from "../consts/colors";
import StarRating from "react-native-star-rating";
import  Modal  from "react-native-modal";

const height = Dimensions.get('window').height;
const isIOS = Platform.OS === 'ios';

function Offers({navigation,route}) {

    // const lang = useSelector(state => state.lang.lang);
    // const token = useSelector(state => state.auth.user ? state.auth.user.data.token : null);
    const [showModal, setShowModal] = useState(false);

    const offers =[
        {id :'0',image:require("../../assets/images/banner_home.png")},
        {id :'1',image:require("../../assets/images/banner_red.png")},
        {id :'2',image:require("../../assets/images/banner_home.png")},
        {id :'3',image:require("../../assets/images/banner_red.png")},
    ]

    const myOrders =[
        {id :'0',name:'اسم مقدم الخدمة'  , location:'الرياض - السعودية' , image:require("../../assets/images/banner1.png")},
        {id :'1',name:'اسم مقدم الخدمة' , location:'الرياض - السعودية' , image:require("../../assets/images/banner2.png")},
        {id :'2',name:'اسم مقدم الخدمة'  , location:'الرياض - السعودية' , image:require("../../assets/images/banner3.png")},
        {id :'3',name:'اسم مقدم الخدمة' , location:'الرياض - السعودية' , image:require("../../assets/images/banner4.png")},
    ]
    function ItemOrder({ name , image , location , id , index }) {
        return (
            <TouchableOpacity onPress={() => {navigation.navigate('categoryDetails') , setShowModal(false)}} style={[styles.borderGray,styles.marginBottom_20 , styles.directionRow , styles.Radius_5 , {flex:1 , padding:10}]}>
                <Image source={image} style={[styles.icon50 , styles.Radius_7]} resizeMode={'cover'} />
                <View style={[{marginLeft:15 , flex:1}]}>
                    <View style={styles.directionRowSpace}>
                        <Text style={[styles.textRegular , styles.text_gray , styles.textSize_12]}>{ name.substr(0,20) }</Text>
                        <View style={[styles.directionRow]}>
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
                    <View style={[styles.directionRow , styles.marginTop_5]}>
                        <Icon type={'MaterialIcons'} name={'location-on'} style={[styles.textSize_13 , styles.text_mstarda , {marginRight:5}]} />
                        <Text style={[styles.textRegular , styles.text_midGray , styles.textSize_12, {lineHeight:20}]}>{ location }</Text>
                    </View>
                </View>
            </TouchableOpacity>
        );
    }


    function Item({ image , id , index }) {
        return (
            <TouchableOpacity onPress={() => toggleModal()} style={[styles.Width_100 , styles.height_150 , styles.marginBottom_15]}>
                <Image source={image} style={styles.swiperImg} resizeMode={'cover'}/>
            </TouchableOpacity>
        );
    }

    function toggleModal () {
        setShowModal(!showModal);
    };

    return (
        <Container style={[styles.bg_gray]}>
            <Content contentContainerStyle={[styles.bgFullWidth , styles.bg_gray]}>

                <Header navigation={navigation} title={ i18n.t('offers') } />

                <View style={[styles.bgFullWidth ,styles.bg_White, styles.Width_100,styles.paddingHorizontal_20, {overflow:'hidden'}]}>

                    <View style={[styles.marginTop_20 , styles.marginBottom_60]}>
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


                    <Modal
                        onBackdropPress                 ={toggleModal}
                        onBackButtonPress               = {toggleModal}
                        isVisible                       = {showModal}
                        style                           = {styles.bgModel}
                        avoidKeyboard                    = {true}
                    >

                        <View style={[styles.bg_White, styles.overHidden, styles.Width_100, styles.flexCenter , {borderTopStartRadius:5 , borderTopEndRadius:5}]}>

                            <View style={[styles.bg_gray , styles.paddingHorizontal_15 , styles.Width_100 , styles.paddingVertical_15 , styles.directionRowSpace]}>
                                <Text style={[styles.textBold , styles.text_White , styles.textSize_15]}>{ i18n.t('declaredFamilies') }</Text>
                                <TouchableOpacity onPress={() => setShowModal(false)}>
                                    <Icon type={'AntDesign'} name={'close'} style={[styles.textSize_20 , styles.text_White ]} />
                                </TouchableOpacity>
                            </View>

                           <View style={[styles.Width_100 , styles.paddingHorizontal_15 , styles.marginTop_20]}>
                               <FlatList
                                   data={myOrders}
                                   horizontal={false}
                                   showsVerticalScrollIndicator={false}
                                   renderItem={({ item , index}) => <ItemOrder
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

                    </Modal>

                </View>

            </Content>
        </Container>
    );
}

export default Offers;


