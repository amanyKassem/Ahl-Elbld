import React, {useEffect, useRef, useState} from "react";
import {View, Text, Image, TouchableOpacity, Dimensions, FlatList, ActivityIndicator} from "react-native";
import {Container, Content, Icon, Input} from 'native-base'
import styles from '../../assets/styles'
import i18n from "../../locale/i18n";
import Swiper from 'react-native-swiper';
import {useDispatch, useSelector} from "react-redux";
import {getBanners , getCategories} from '../actions';
import Header from '../common/Header';
import COLORS from "../consts/colors";

const height = Dimensions.get('window').height;
const isIOS = Platform.OS === 'ios';

function Home({navigation,route}) {


    const lang = useSelector(state => state.lang.lang);
    const token = useSelector(state => state.auth.user ? state.auth.user.data.token : null);
    const banners = useSelector(state => state.banners.banners);
    const bannersLoader = useSelector(state => state.banners.loader);
    const categories = useSelector(state => state.categories.categories);
    const categoriesLoader = useSelector(state => state.categories.loader);
    const [screenLoader , setScreenLoader ] = useState(true);

    const dispatch = useDispatch();

    function fetchData(){
        setScreenLoader(true);
        dispatch(getBanners(lang)).then(() => setScreenLoader(false));
        dispatch(getCategories(lang)).then(() => setScreenLoader(false));
    }
    useEffect(() => {
        fetchData();
        const unsubscribe = navigation.addListener('focus', () => {
            fetchData();
        });

        return unsubscribe;
    }, [navigation , bannersLoader , categoriesLoader]);

    function renderLoader(){
        if (screenLoader){
            return(
                <View style={[styles.loading, styles.flexCenter, {height:'100%'}]}>
                    <ActivityIndicator size="large" color={COLORS.mstarda} style={{ alignSelf: 'center' }} />
                </View>
            );
        }
    }

    function Item({ title , image , type , id , index }) {
        return (
            <TouchableOpacity onPress={() => navigation.navigate('category' , {title , type , category_id:id})} style={[styles.height_130,styles.marginBottom_10 , styles.Radius_5 , styles.marginHorizontal_5 , {flex:1 , overflow:'hidden'}]}>
                <View style={[styles.flexCenter , styles.overlay_black , styles.Width_100 , {position:'absolute' , bottom :0,zIndex:1 , padding:7}]}>
                    <Text style={[styles.textBold , styles.text_White , styles.textSize_13, styles.textCenter ]}>{title}</Text>
                </View>
                <Image source={{uri:image}} style={[styles.Width_100, styles.heightFull]} resizeMode={'cover'} />
            </TouchableOpacity>
        );
    }

    return (
        <Container style={[styles.bg_gray]}>
            { renderLoader() }
            <Content contentContainerStyle={[styles.bgFullWidth , styles.bg_gray]}>

                <Header navigation={navigation} title={ i18n.t('home') }/>

                <View style={[styles.bgFullWidth ,styles.bg_White, styles.Width_100 , styles.marginTop_55 , {paddingBottom:35}]}>

                   <View style={[styles.marginVertical_20, styles.paddingHorizontal_20 , {top:-70}]}>
                       <Swiper key={2} dotStyle={styles.eventdoteStyle} activeDotStyle={styles.eventactiveDot}
                               containerStyle={styles.eventswiper} showsButtons={false} autoplay={true}>


                           {
                               banners && (banners).length > 0?

                                   banners.map((banner, i) => {
                                       return (
                                           <TouchableOpacity key={i}>
                                               <Image source={{uri:banner.image}} style={styles.swiperImg} resizeMode={'cover'}/>
                                           </TouchableOpacity>
                                       )
                                   })
                                   :
                                   null
                           }


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
                               title={item.name}
                               image={item.img}
                               type={item.type}
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


