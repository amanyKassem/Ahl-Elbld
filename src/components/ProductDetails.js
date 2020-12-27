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
import {CheckBox, Container, Content, Form, Icon, Input, Item, Label, Textarea} from 'native-base'
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

function ProductDetails({navigation,route}) {

    // const lang = useSelector(state => state.lang.lang);
    // const token = useSelector(state => state.auth.user ? state.auth.user.data.token : null);

    const pathName = route.params.pathName ? route.params.pathName : '' ;

    const [checkedArr, setCheckedArr] = useState([]);
    const [count, setCount] = useState(1)

    const ingredients = [
        {id:0 , name:'بطاطس' , price:'20 رس'},
        {id:1 , name:'بطاطس' , price:'20 رس'},
        {id:2 , name:'بطاطس' , price:'20 رس'},
        {id:3 , name:'بطاطس' , price:'20 رس'},
    ]

    const increment = () => {
        setCount(count + 1);
    }

    const decrement = () => {
        if (count === 1) {
            setCount(1);
        } else {
            setCount(count - 1);
        }
    }


    useEffect(() => {

        const unsubscribe = navigation.addListener('focus', () => {
            setCheckedArr([])
        })
        return unsubscribe

    }, [navigation, route]);


    function toggleChecked(id){
        if(!checkedArr.includes(id)){
            setCheckedArr([...checkedArr,id])
        }else{
            const index = checkedArr.indexOf(id);
            if (index > -1) {
                checkedArr.splice(index, 1)
                setCheckedArr([...checkedArr]);
            }
        }
    }

    return (
        <Container style={[styles.bg_black]}>
            <Content contentContainerStyle={[styles.bgFullWidth , styles.bg_White]}>
                <ImageBackground source={require('../../assets/images/restu_image.png')} resizeMode={'cover'} style={[styles.Width_100 , styles.height_230 , {borderBottomRightRadius:25 , borderBottomLeftRadius:25 , overflow:'hidden'}]}>
                    <View style={[styles.overlay_black , styles.heightFull , styles.Width_100]}>

                        <Header navigation={navigation} title={ i18n.t('productDetails') } />

                    </View>
                </ImageBackground>

                <View style={[styles.bgFullWidth ,styles.bg_White, styles.Width_100,styles.paddingHorizontal_20 , styles.marginTop_20, {overflow:'hidden'}]}>

                    <View style={[styles.bg_lightMstarda,styles.paddingHorizontal_15  , styles.height_45 , styles.directionRowSpace]}>
                        <Text style={[styles.textRegular , styles.text_gray , styles.textSize_14 ]}>{i18n.t('orderNum') }</Text>
                        <Text style={[styles.textRegular , styles.text_gray , styles.textSize_14 ]}>12345</Text>
                    </View>

                    <View style={[styles.directionRowSpace, styles.marginTop_20]}>
                        <Text style={[styles.textBold , styles.text_gray , styles.textSize_16]}>اسم المنتج</Text>
                        <Text style={[styles.textBold , styles.text_mstarda , styles.textSize_16 ]}>20 ر.س</Text>
                    </View>

                    <Text style={[styles.textRegular , styles.text_midGray , styles.textSize_13 , styles.marginTop_15 , styles.alignStart , styles.writingDir , {lineHeight:24}]}>
                        أي كلااااااام أي كلااااااام أي كلااااااام أي كلااااااام أي كلااااااام أي كلااااااام أي كلااااااام أي كلااااااام أي كلااااااام
                        أي كلااااااام أي كلااااااام أي كلااااااام أي كلااااااام أي كلااااااام أي كلااااااام أي كلااااااام أي كلااااااام أي كلااااااام
                        أي كلااااااام أي كلااااااام أي كلااااااام أي كلااااااام أي كلااااااام أي كلااااااام أي كلااااااام أي كلااااااام أي كلااااااام
                        أي كلااااااام أي كلااااااام أي كلااااااام أي كلااااااام أي كلااااااام أي كلااااااام أي كلااااااام أي كلااااااام أي كلااااااام
                    </Text>

                    <View style={[styles.line , styles.marginVertical_20]}/>

                    <Text style={[styles.textBold , styles.text_gray , styles.textSize_16 , styles.alignStart , styles.marginBottom_20]}>{i18n.t('ingredients') }</Text>

                    <FlatList
                        data={ingredients}
                        keyExtractor={(item) => item.id}
                        renderItem={({ item, index }) =>
                            (
                                <View style={[styles.directionRowSpace , styles.marginBottom_10]}>
                                    <TouchableOpacity onPress={() => toggleChecked(item.id)} style={[styles.directionRow]}>
                                        <CheckBox
                                            checked={checkedArr.indexOf(item.id) !== -1} color={checkedArr.indexOf(item.id) !== -1 ? COLORS.mstarda : '#ddd'}
                                            style={[ styles.checkBox , styles.Radius_3 , { backgroundColor: checkedArr.indexOf(item.id) !== -1 ? COLORS.mstarda : '#ddd' }]}
                                            onPress={() => toggleChecked(item.id)}
                                        />

                                        <Text style={[styles.textRegular , styles.text_gray , styles.textSize_14 ]}>{item.name}</Text>
                                    </TouchableOpacity>
                                    <Text style={[styles.textRegular , styles.text_mstarda , styles.textSize_14 ]}>{item.price}</Text>
                                </View>
                            )}
                    />
                    <View style={[styles.line , styles.marginVertical_20]}/>

                    <Text style={[styles.textBold , styles.text_gray , styles.textSize_16 , styles.alignStart , styles.marginBottom_20]}>{i18n.t('selectQuantity') }</Text>

                    <View style={[styles.directionRowCenter , styles.Width_100 , styles.marginBottom_20]}>
                        <TouchableOpacity onPress={() => increment()} style={[styles.icon35 , styles.bg_mstarda , styles.centerContext , styles.Radius_5]}>
                            <Icon type={'AntDesign'} name={'plus'} style={[styles.textSize_17 , styles.text_White ]} />
                        </TouchableOpacity>
                        <Text style={[styles.textRegular , styles.text_mstarda , styles.textSize_20 , styles.marginHorizontal_35 ]}>{count}</Text>
                        <TouchableOpacity onPress={() => decrement()} style={[styles.icon35 , styles.centerContext  , styles.Radius_5, {backgroundColor:'#ddd'}]}>
                            <Icon type={'AntDesign'} name={'minus'} style={[styles.textSize_17 , styles.text_gray ]} />
                        </TouchableOpacity>
                    </View>

                    <View style={[styles.directionRow , styles.centerContext , styles.Width_100 , styles.marginBottom_20]}>
                        <Text style={[styles.textRegular , styles.text_gray , styles.textSize_15 ]}>{i18n.t('total') }</Text>
                        <Text style={[styles.textRegular , styles.text_mstarda , styles.textSize_15 , {marginLeft:10} ]}>25 ر.س</Text>
                    </View>

                    {
                        pathName === 'restaurantDetails' ?
                            <View>
                                <TouchableOpacity onPress={() => navigation.navigate('basketDetails')} style={[styles.mstrdaBtn , styles.Width_90 , styles.SelfCenter  , styles.marginBottom_10]}>
                                    <Text style={[styles.textBold , styles.text_White , styles.textSize_15]}>{ i18n.t('orderNow') }</Text>
                                </TouchableOpacity>
                                <TouchableOpacity onPress={() => navigation.navigate('basket')} style={[styles.mstrdaBtn , styles.Width_90 , styles.bg_black , styles.SelfCenter  , styles.marginBottom_20]}>
                                    <Text style={[styles.textBold , styles.text_White , styles.textSize_15]}>{ i18n.t('orderLater') }</Text>
                                </TouchableOpacity>
                            </View>
                            :
                            <TouchableOpacity onPress={() => navigation.navigate('basketDetails')} style={[styles.mstrdaBtn , styles.Width_90 , styles.SelfCenter  , styles.marginBottom_20]}>
                                <Text style={[styles.textBold , styles.text_White , styles.textSize_15]}>{ i18n.t('reOrder') }</Text>
                            </TouchableOpacity>
                    }


                </View>

            </Content>
        </Container>
    );
}

export default ProductDetails;


