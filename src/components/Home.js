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
    const [search, setSearch] = useState('');
    const categories =[
        {id :'0',title:'مطاعم' , image:require("../../assets/images/restu_image.png")},
        {id :'1',title:'محلات' , image:require("../../assets/images/depart_two.png")},
        {id :'2',title:'مخابز' , image:require("../../assets/images/depart_four.png")},
        {id :'3',title:'حلويات' , image:require("../../assets/images/depart_six.png")},
    ]

    function Item({ title , image , id , index }) {
        return (
            <TouchableOpacity onPress={() => navigation.navigate('category')} style={[styles.height_130,styles.marginBottom_10 , styles.marginHorizontal_10 , {flex:1}]}>
                <View style={[styles.flexCenter , styles.overlay_black , styles.Width_100 , {position:'absolute' , bottom :0,zIndex:1 , padding:5}]}>
                    <Text style={[styles.textBold , styles.text_White , styles.textSize_15, styles.textCenter ]}>{title}</Text>
                </View>
                <Image source={image} style={[styles.Width_100, styles.heightFull]} resizeMode={'cover'} />
            </TouchableOpacity>
        );
    }

    return (
        <Container style={[styles.bg_black]}>
            <Content contentContainerStyle={[styles.bgFullWidth , styles.bg_black]}>

                <Header navigation={navigation} title={ i18n.t('home') }/>

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

                <View style={[styles.bgFullWidth ,styles.bg_White, styles.Width_100 , {overflow:'hidden'}]}>

                   <View style={[styles.marginVertical_20, styles.paddingHorizontal_20]}>
                       <Swiper key={2} dotStyle={styles.eventdoteStyle} activeDotStyle={styles.eventactiveDot}
                               containerStyle={styles.eventswiper} showsButtons={false} autoplay={true}>

                           <TouchableOpacity onPress={() => navigation.navigate('offerDetails')}>
                               <Image source={require("../../assets/images/banner_home.png")} style={styles.swiperImg} resizeMode={'cover'}/>
                           </TouchableOpacity>

                           <TouchableOpacity onPress={() => navigation.navigate('offerDetails')}>
                               <Image source={require("../../assets/images/banner_red.png")} style={styles.swiperImg} resizeMode={'cover'}/>
                           </TouchableOpacity>

                       </Swiper>
                   </View>

                    <TouchableOpacity onPress={() => navigation.navigate('offers')} style={[styles.marginTop_10, styles.paddingHorizontal_20 , styles.marginBottom_25]}>
                        <Text style={[styles.textBold , styles.text_mstarda , styles.textSize_16 , styles.flexCenter , styles.textDecoration]}>{i18n.t('watchOffer')}</Text>
                    </TouchableOpacity>

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
                        columnWrapperStyle={[styles.directionRowSpace , styles.paddingHorizontal_10]}
                    />

                </View>

            </Content>
        </Container>
    );
}

export default Home;


