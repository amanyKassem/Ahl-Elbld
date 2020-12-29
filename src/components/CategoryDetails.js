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

function CategoryDetails({navigation,route}) {

    // const lang = useSelector(state => state.lang.lang);
    // const token = useSelector(state => state.auth.user ? state.auth.user.data.token : null);
    const [activeType, setActiveType] = useState(0);
    const [search, setSearch] = useState('');
    const [details, setDetails] = useState('');

    const myOrders =[
        {id :'0',name:'اسم المنتج' ,desc:'وصف وصف وصف وصف بكلمك بالامانه ده وصف'  , price:'20 رس' , oldPrice:'30 رس' , image:require("../../assets/images/banner1.png")},
        {id :'1',name:'اسم المنتج' ,desc:'وصف وصف وصف وصف بكلمك بالامانه ده وصف'  , price:'20 رس' , oldPrice:'30 رس' , image:require("../../assets/images/banner2.png")},
        {id :'2',name:'اسم المنتج' ,desc:'وصف وصف وصف وصف بكلمك بالامانه ده وصف'  , price:'20 رس' , oldPrice:'30 رس' , image:require("../../assets/images/banner3.png")},
        {id :'3',name:'اسم المنتج',desc:'وصف وصف وصف وصف بكلمك بالامانه ده وصف'  , price:'20 رس' , oldPrice:'30 رس' , image:require("../../assets/images/banner4.png")},
    ]

    function Item({ name , desc , image , price , id , index }) {
        return (
            <TouchableOpacity onPress={() => navigation.navigate('productDetails')} style={[styles.bg_light_gray,styles.marginBottom_10 , styles.directionRow , styles.Radius_5 , {flex:1 , padding:10}]}>
                <Image source={image} style={[styles.icon70 , styles.Radius_7]} resizeMode={'cover'} />
                <View style={[{marginLeft:15 , flex:1}]}>
                    <View style={[styles.directionRowSpace , styles.marginBottom_5]}>
                        <Text style={[styles.textRegular , styles.text_gray , styles.textSize_14]}>{ name }</Text>
                        <View style={[styles.directionRow]}>
                            <Text style={[styles.textRegular , styles.text_mstarda , styles.textSize_13 , {marginLeft:5}]}>{ price }</Text>
                        </View>
                    </View>
                    <Text style={[styles.textRegular , styles.text_midGray , styles.textSize_12 , styles.alignStart , styles.writingDir , {lineHeight:18}]}>{ desc }</Text>
                </View>
            </TouchableOpacity>
        );
    }

    function changeType(id){
        setActiveType(id)
    }

    useEffect(() => {
        const unsubscribe = navigation.addListener('focus', () => {
            setActiveType(0)

        })
        return unsubscribe
    }, [navigation, route])


    return (
        <Container style={[styles.bg_black]}>
            <Content contentContainerStyle={[styles.bgFullWidth]} scrollEnabled={false}>
                <ImageBackground source={require('../../assets/images/banner1.png')} resizeMode={'cover'} style={[styles.Width_100 ,  activeType != null? styles.height_340 : styles.height_300]}>
                    <View style={[styles.overlay_black , styles.heightFull , styles.Width_100]}>

                        <Header navigation={navigation} title={ i18n.t('details') } likeIcon={true} />

                        <View style={[styles.directionColumnCenter , styles.marginTop_10]}>
                            <View style={[styles.icon70 , styles.Radius_50 , styles.overlay_white, styles.marginBottom_7 ,{ padding: 5 }]}>
                                <Image source={require('../../assets/images/image_placeholder.png')} style={[styles.Width_100 , styles.heightFull , styles.Radius_50]} resizeMode='cover' />
                            </View>
                            <Text style={[styles.textBold , styles.text_White , styles.textSize_14 , styles.textCenter , styles.marginBottom_5]}>اسم الأسره المنتج</Text>

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
                            {
                                activeType != null?
                                    <TouchableOpacity onPress={() => setActiveType(null)} style={[styles.mstrdaBtn , styles.Width_50 , styles.marginVertical_20]}>
                                        <Text style={[styles.textRegular , styles.text_White , styles.textSize_15]}>{ i18n.t('addSpecialOrder') }</Text>
                                    </TouchableOpacity>
                                    :
                                    null
                            }


                        </View>
                    </View>
                </ImageBackground>

                <View style={[styles.bgFullWidth ,styles.bg_White, styles.Width_100, {overflow:'hidden'}]}>
                    <View style={[styles.mainScroll]}>

                        <ScrollView style={[styles.scrollView]} horizontal={true} showsHorizontalScrollIndicator={false}>

                            <TouchableOpacity onPress={() => changeType(0)} style={styles.scrollTouch}>
                                <Text style={[styles.scrollText, { color: activeType === 0 ? COLORS.mstarda : COLORS.black }]}>{i18n.t('all')}</Text>
                                <View style={[styles.triangle, { borderBottomColor: activeType === 0 ? COLORS.mstarda : 'transparent' }]} />
                            </TouchableOpacity>

                            <TouchableOpacity onPress={() => changeType(1)} style={styles.scrollTouch}>
                                <Text style={[styles.scrollText, { color: activeType === 1 ? COLORS.mstarda : COLORS.black }]}>مشويات</Text>
                                <View style={[styles.triangle, { borderBottomColor: activeType === 1 ? COLORS.mstarda : 'transparent' }]} />
                            </TouchableOpacity>

                            <TouchableOpacity onPress={() => changeType(2)} style={styles.scrollTouch}>
                                <Text style={[styles.scrollText, { color: activeType === 2 ? COLORS.mstarda : COLORS.black }]}>حلويات</Text>
                                <View style={[styles.triangle, { borderBottomColor: activeType === 2 ? COLORS.mstarda : 'transparent' }]} />
                            </TouchableOpacity>

                            <TouchableOpacity onPress={() => changeType(3)} style={styles.scrollTouch}>
                                <Text style={[styles.scrollText, { color: activeType === 3 ? COLORS.mstarda : COLORS.black }]}>سلطات</Text>
                                <View style={[styles.triangle, { borderBottomColor: activeType === 3 ? COLORS.mstarda : 'transparent' }]} />
                            </TouchableOpacity>

                            <TouchableOpacity onPress={() => changeType(4)} style={styles.scrollTouch}>
                                <Text style={[styles.scrollText, { color: activeType === 4 ? COLORS.mstarda : COLORS.black }]}>معجنات</Text>
                                <View style={[styles.triangle, { borderBottomColor: activeType === 4 ? COLORS.mstarda : 'transparent' }]} />
                            </TouchableOpacity>

                            <TouchableOpacity onPress={() => changeType(5)} style={styles.scrollTouch}>
                                <Text style={[styles.scrollText, { color: activeType === 5 ? COLORS.mstarda : COLORS.black }]}>مشروبات</Text>
                                <View style={[styles.triangle, { borderBottomColor: activeType === 5 ? COLORS.mstarda : 'transparent' }]} />
                            </TouchableOpacity>


                        </ScrollView>
                    </View>

                    {
                        activeType != null?
                            <View style={[styles.marginTop_10 , styles.paddingHorizontal_20 , {height:IS_IPHONE_X ? height - 470 :  height - 400}]}>

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
                            :
                            <View style={[styles.marginTop_10 , styles.paddingHorizontal_20]}>
                                <Label style={[styles.label , styles.text_black]}>{ i18n.t('specialOrderDet') }</Label>
                                <Textarea
                                    style={[styles.input , styles.height_120 , styles.paddingVertical_10 , styles.bg_light_gray ,
                                        {borderTopRightRadius :10 , borderTopLeftRadius :10 , borderRadius :10  , lineHeight:22}]}
                                    onChangeText={(details) => setDetails(details)}
                                    value={details}
                                />

                                <TouchableOpacity onPress={() => navigation.navigate('orderData')} style={[styles.mstrdaBtn , styles.Width_100 , styles.marginVertical_20]}>
                                    <Text style={[styles.textRegular , styles.text_White , styles.textSize_15]}>{ i18n.t('confirm') }</Text>
                                </TouchableOpacity>

                            </View>
                    }


                </View>

            </Content>
        </Container>
    );
}

export default CategoryDetails;


