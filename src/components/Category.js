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

function Category({navigation,route}) {

    // const lang = useSelector(state => state.lang.lang);
    // const token = useSelector(state => state.auth.user ? state.auth.user.data.token : null);

    const [search, setSearch] = useState('');
    const [active, setActive] = useState(0);

    const myOrders =[
        {id :'0',name:'اسم المطعم' ,category:'مطاعم'  , space:'مسافه ٦ كيلو' , orderNum:'12345', image:require("../../assets/images/restu_image.png")},
        {id :'1',name:'اسم المطعم' ,category:'محلات'  , space:'مسافه ٦ كيلو' , orderNum:'12345', image:require("../../assets/images/depart_two.png")},
        {id :'2',name:'اسم المطعم' ,category:'مخابز'  , space:'مسافه ٦ كيلو' , orderNum:'12345', image:require("../../assets/images/depart_four.png")},
    ]
    const closedRest =[
        {id :'0',name:'اسم المطعم' ,category:'مطاعم'  , space:'مسافه ٦ كيلو' , orderNum:'12345', image:require("../../assets/images/restu_image.png")},
        {id :'1',name:'اسم المطعم' ,category:'محلات'  , space:'مسافه ٦ كيلو' , orderNum:'12345', image:require("../../assets/images/depart_two.png")},
        {id :'2',name:'اسم المطعم' ,category:'مخابز'  , space:'مسافه ٦ كيلو' , orderNum:'12345', image:require("../../assets/images/depart_four.png")},
    ]

    function Item({ name , category , image , space , id , index }) {
        return (
            <TouchableOpacity onPress={() => navigation.navigate('restaurantDetails')} style={[styles.borderGray,styles.marginBottom_20 , styles.directionRow , styles.Radius_5 , {flex:1 , padding:15}]}>
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

    function ItemClosed({ name , category , image , space , id , index }) {
        return (
            <View style={[styles.borderGray,styles.marginBottom_20 , styles.directionRow , styles.Radius_5 , {flex:1 , padding:15}]}>
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
                    <Text style={[styles.textRegular , styles.text_midGray , styles.textSize_13, styles.alignStart , styles.marginVertical_5]}>{ category }</Text>
                    <View style={[styles.directionRow , styles.marginTop_5]}>
                        <Icon type={'MaterialIcons'} name={'location-on'} style={[styles.textSize_14 , styles.text_mstarda , {marginRight:5}]} />
                        <Text style={[styles.textRegular , styles.text_midGray , styles.textSize_13]}>{ space }</Text>
                    </View>
                </View>
            </View>
        );
    }


    return (
        <Container style={[styles.bg_black]}>
            <Content contentContainerStyle={[styles.bgFullWidth , styles.bg_black]}>

                <Header navigation={navigation} title={ i18n.t('category') } />

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

                    <View style={[styles.marginVertical_20 , styles.alignEnd , styles.directionRow]}>
                        <TouchableOpacity onPress={() => setActive(0)} style={[styles.directionRowCenter , active === 0 ? styles.bg_White : styles.bg_mstarda , styles.Radius_5 ,styles.paddingVertical_7 , styles.paddingHorizontal_15 , {borderWidth:1 , borderColor:COLORS.mstarda}]}>
                            <Image source={active === 0 ? require("../../assets/images/star_yellow.png") : require("../../assets/images/star_half_white.png")} style={[styles.icon15 , {marginRight:5}]} resizeMode={'contain'} />
                            <Text style={[styles.textBold , active === 0 ? styles.text_mstarda : styles.text_White , styles.textSize_12]}>{ i18n.t('rate') }</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => setActive(1)} style={[styles.directionRowCenter , active === 1 ? styles.bg_White : styles.bg_mstarda , styles.Radius_5 ,styles.paddingVertical_7 , styles.paddingHorizontal_10 , {marginLeft:10, borderWidth:1 , borderColor:COLORS.mstarda}]}>
                            <Image source={active === 1 ? require("../../assets/images/send_orange.png") : require("../../assets/images/send_white.png")} style={[styles.icon15 , {marginRight:5}]} resizeMode={'contain'} />
                            <Text style={[styles.textBold , active === 1 ? styles.text_mstarda : styles.text_White , styles.textSize_12]}>{ i18n.t('closest') }</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => setActive(2)} style={[styles.directionRowCenter , active === 2 ? styles.bg_White : styles.bg_mstarda , styles.Radius_5 ,styles.paddingVertical_7 , styles.paddingHorizontal_10 , {marginLeft:10 , borderWidth:1 , borderColor:COLORS.mstarda}]}>
                            <Image source={active === 2 ? require("../../assets/images/send_orange.png") : require("../../assets/images/send_white.png")} style={[styles.icon15 , {marginRight:5}]} resizeMode={'contain'} />
                            <Text style={[styles.textBold , active === 2 ? styles.text_mstarda : styles.text_White , styles.textSize_12]}>{ i18n.t('furthest') }</Text>
                        </TouchableOpacity>
                    </View>

                   <View>
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

                    <Text style={[styles.textBold , styles.text_gray , styles.textSize_15 , styles.marginBottom_20]}>{ i18n.t('closedRest') }</Text>



                    <View>
                        <FlatList
                            data={closedRest}
                            horizontal={false}
                            showsVerticalScrollIndicator={false}
                            renderItem={({ item , index}) => <ItemClosed
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

export default Category;


