import React, {useEffect, useRef, useState} from "react";
import {
    View,
    Text,
    Image,
    TouchableOpacity,
    Dimensions,
    ScrollView,
    I18nManager,
    ImageBackground,
    FlatList
} from "react-native";
import {Container, Content, Form, Icon, Input, Item, Label, Textarea} from 'native-base'
import styles from '../../assets/styles'
import i18n from "../../locale/i18n";
import Swiper from 'react-native-swiper';
import {useSelector, useDispatch} from 'react-redux';
import Header from '../common/Header';
import COLORS from "../consts/colors";
import StarRating from "react-native-star-rating";

const height = Dimensions.get('window').height;
const isIOS = Platform.OS === 'ios';

const IS_IPHONE_X 	= (height === 812 || height === 896) && Platform.OS === 'ios';

function FastingBreakfastDetails({navigation,route}) {

    // const lang = useSelector(state => state.lang.lang);
    // const token = useSelector(state => state.auth.user ? state.auth.user.data.token : null);
    const [search, setSearch] = useState('');
    const [details, setDetails] = useState('');

    const myOrders =[
        {id :'0',name:'اسم الحدث' ,desc:'وصف وصف وصف وصف بكلمك بالامانه ده وصف' , image:require("../../assets/images/banner1.png")},
        {id :'1',name:'اسم الحدث' ,desc:'وصف وصف وصف وصف بكلمك بالامانه ده وصف' , image:require("../../assets/images/banner2.png")},
        {id :'2',name:'اسم الحدث' ,desc:'وصف وصف وصف وصف بكلمك بالامانه ده وصف' , image:require("../../assets/images/banner3.png")},
        {id :'3',name:'اسم الحدث',desc:'وصف وصف وصف وصف بكلمك بالامانه ده وصف' , image:require("../../assets/images/banner4.png")},
    ]

    function Item({ name , desc , image , price , id , index }) {
        return (
            <TouchableOpacity onPress={() => navigation.navigate('eventDetails')} style={[styles.bg_light_gray,styles.marginBottom_10 , styles.directionRow , styles.Radius_5 , {flex:1 , padding:10}]}>
                <Image source={image} style={[styles.icon70 , styles.Radius_7]} resizeMode={'cover'} />
                <View style={[{marginLeft:15 , flex:1}]}>
                    <Text style={[styles.textRegular , styles.text_gray , styles.textSize_14 , styles.marginBottom_5 , styles.alignStart]}>{ name }</Text>
                    <Text style={[styles.textRegular , styles.text_midGray , styles.textSize_12 , styles.alignStart , styles.writingDir , {lineHeight:18}]}>{ desc }</Text>
                </View>
            </TouchableOpacity>
        );
    }


    return (
        <Container style={[styles.bg_gray]}>
            <Content contentContainerStyle={[styles.bgFullWidth]} scrollEnabled={false}>
                <ImageBackground source={require('../../assets/images/banner1.png')} resizeMode={'cover'} style={[styles.Width_100 ,  styles.height_300]}>
                    <View style={[styles.overlay_black , styles.heightFull , styles.Width_100]}>

                        <Header navigation={navigation} title={ i18n.t('providerDetails') } likeIcon={true} />

                        <View style={[styles.directionColumnCenter , styles.marginTop_10]}>
                            <View style={[styles.icon70 , styles.Radius_50 , styles.overlay_white, styles.marginBottom_7 ,{ padding: 5 }]}>
                                <Image source={require('../../assets/images/image_placeholder.png')} style={[styles.Width_100 , styles.heightFull , styles.Radius_50]} resizeMode='cover' />
                            </View>
                            <Text style={[styles.textBold , styles.text_White , styles.textSize_14 , styles.textCenter , styles.marginBottom_5]}>اسم المقدم</Text>

                            <View style={[styles.directionRow , styles.marginTop_5]}>
                                <Icon type={'MaterialIcons'} name={'location-on'} style={[styles.textSize_14 , styles.text_mstarda , {marginRight:5}]} />
                                <Text style={[styles.textRegular , styles.text_White , styles.textSize_13]}>السعوديه - الرياض</Text>
                            </View>

                            <View style={[styles.directionRow , styles.marginTop_10]}>
                                <StarRating
                                    disabled={false}
                                    maxStars={5}
                                    rating={4}
                                    fullStarColor={'#fec104'}
                                    starSize={12}
                                    starStyle={{ marginHorizontal: 2}}
                                />
                                <Text style={[styles.textRegular , styles.text_White , styles.textSize_12, {marginLeft:10}]}>يبعد ٦ كيلو</Text>
                            </View>

                        </View>
                    </View>
                </ImageBackground>

                <View style={[styles.bgFullWidth ,styles.bg_White, styles.Width_100, {overflow:'hidden'}]}>

                    <View style={[styles.marginTop_20 , styles.paddingHorizontal_20 , {height:IS_IPHONE_X ? height - 390 :  height - 320}]}>

                        <FlatList
                            data={myOrders}
                            horizontal={false}
                            showsVerticalScrollIndicator={false}
                            renderItem={({ item , index}) => <Item
                                id={item.id}
                                name={item.name}
                                desc={item.desc}
                                image={item.image}
                                price={item.price}
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

export default FastingBreakfastDetails;


