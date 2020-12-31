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
const latitudeDelta = 0.922;
const longitudeDelta = 0.521;

function Home({navigation,route}) {


    // const lang = useSelector(state => state.lang.lang);
    // const token = useSelector(state => state.auth.user ? state.auth.user.data.token : null);

    const categories =[
        {id :'0',title:'الاسر المنتجة' , image:require("../../assets/images/banner1.png")},
        {id :'1',title:'الولائم والمناسبات' , image:require("../../assets/images/banner2.png")},
        {id :'2',title:'سوق الخضار المركزي' , image:require("../../assets/images/banner3.png")},
        {id :'3',title:'البقالة' , image:require("../../assets/images/banner4.png")},
    ]

    function Item({ title , image , id , index }) {
        return (
            <TouchableOpacity onPress={() => navigation.navigate('category' , {title})} style={[styles.height_130,styles.marginBottom_10 , styles.Radius_5 , styles.marginHorizontal_5 , {flex:1 , overflow:'hidden'}]}>
                <View style={[styles.flexCenter , styles.overlay_black , styles.Width_100 , {position:'absolute' , bottom :0,zIndex:1 , padding:7}]}>
                    <Text style={[styles.textBold , styles.text_White , styles.textSize_13, styles.textCenter ]}>{title}</Text>
                </View>
                <Image source={image} style={[styles.Width_100, styles.heightFull]} resizeMode={'cover'} />
            </TouchableOpacity>
        );
    }

    return (
        <Container style={[styles.bg_gray]}>
            <Content contentContainerStyle={[styles.bgFullWidth , styles.bg_gray]}>

                <Header navigation={navigation} title={ i18n.t('home') }/>

                <View style={[styles.bgFullWidth ,styles.bg_White, styles.Width_100 , styles.marginTop_55 , {paddingBottom:35}]}>

                   <View style={[styles.marginVertical_20, styles.paddingHorizontal_20 , {top:-70}]}>
                       <Swiper key={2} dotStyle={styles.eventdoteStyle} activeDotStyle={styles.eventactiveDot}
                               containerStyle={styles.eventswiper} showsButtons={false} autoplay={true}>

                           <TouchableOpacity>
                               <Image source={require("../../assets/images/banner1.png")} style={styles.swiperImg} resizeMode={'cover'}/>
                           </TouchableOpacity>

                           <TouchableOpacity>
                               <Image source={require("../../assets/images/banner2.png")} style={styles.swiperImg} resizeMode={'cover'}/>
                           </TouchableOpacity>

                           <TouchableOpacity>
                               <Image source={require("../../assets/images/banner3.png")} style={styles.swiperImg} resizeMode={'cover'}/>
                           </TouchableOpacity>

                       </Swiper>
                   </View>

                    <Text style={[styles.textBold , styles.text_gray , styles.textSize_15, styles.marginBottom_15 , styles.marginHorizontal_15 , styles.alignStart , {top:-30}]}>{ i18n.t('categories') }</Text>


                   <View style={{top:-30}}>
                       <FlatList
                           data={categories}
                           horizontal={false}
                           numColumns={2}
                           showsVerticalScrollIndicator={false}
                           renderItem={({ item , index}) => <Item
                               title={item.title}
                               image={item.image}
                               id={item.id}
                               index={index}
                           />}
                           keyExtractor={item => item.id}
                           columnWrapperStyle={[styles.directionRowSpace , styles.paddingHorizontal_15]}
                       />

                       <View style={[styles.paddingHorizontal_15]}>
                           <TouchableOpacity onPress={() => navigation.navigate('fastingBreakfast')} style={[styles.height_130,styles.marginBottom_10 , styles.Radius_5 , styles.marginHorizontal_5 , {flex:1 , overflow:'hidden'}]}>
                               <View style={[styles.flexCenter , styles.overlay_black , styles.Width_100 , {position:'absolute' , bottom :0,zIndex:1 , padding:7}]}>
                                   <Text style={[styles.textBold , styles.text_White , styles.textSize_13, styles.textCenter ]}>{i18n.t('fastingBreakfast')}</Text>
                               </View>
                               <Image source={require("../../assets/images/banner4.png")} style={[styles.Width_100, styles.heightFull]} resizeMode={'cover'} />
                           </TouchableOpacity>
                       </View>
                   </View>

                </View>

            </Content>
        </Container>
    );
}

export default Home;


