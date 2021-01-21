import React, {useEffect, useRef, useState} from "react";
import {View, Text, Image, TouchableOpacity, Dimensions, FlatList, I18nManager} from "react-native";
import {Container, Content, Icon, Input} from 'native-base'
import styles from '../../../assets/styles'
import i18n from "../../../locale/i18n";
import Swiper from 'react-native-swiper';
import {useSelector, useDispatch} from 'react-redux';
import Header from '../../common/Header';
import COLORS from "../../consts/colors";
import {getDelegateOrders} from "../../actions";
import * as Permissions from "expo-permissions";
import * as Location from "expo-location";
import {useIsFocused} from "@react-navigation/native";

const height = Dimensions.get('window').height;
const isIOS = Platform.OS === 'ios';
const latitudeDelta = 0.922;
const longitudeDelta = 0.521;

function Home({navigation,route}) {


    const lang = useSelector(state => state.lang.lang);
    const token = useSelector(state => state.auth.user ? state.auth.user.data.token : null);
    const delegateOrders = useSelector(state => state.orders.delegateOrders);
    const [screenLoader , setScreenLoader ] = useState(true);

    const [mapRegion, setMapRegion] = useState({
        latitude: '',
        longitude: '',
        latitudeDelta,
        longitudeDelta
    });
    let mapRef = useRef(null);
    const isFocused = useIsFocused();

    const dispatch = useDispatch();

    console.log('delegateOrders' , delegateOrders)

    const fetchData = async () => {
        setScreenLoader(true);
        dispatch(getDelegateOrders(lang , mapRegion.latitude, mapRegion.longitude, 'READY' , token)).then(() => setScreenLoader(false));

        let { status } = await Permissions.askAsync(Permissions.LOCATION);
        let userLocation = {};
        if (status !== 'granted') {
            alert('صلاحيات تحديد موقعك الحالي ملغاه');
        } else {
            const { coords: { latitude, longitude } } = await Location.getCurrentPositionAsync({});

            if (route.params && route.params.latitude){
                userLocation = { latitude: route.params.latitude, longitude:route.params.longitude , latitudeDelta , longitudeDelta};
            } else {
                userLocation = { latitude, longitude , latitudeDelta , longitudeDelta};
            }

            setMapRegion(userLocation);
            isIOS ? mapRef.current.animateToRegion(userLocation, 1000) : false;
        }
    }

    useEffect(() => {

        if (isFocused) {
            fetchData()
        }
    }, [isFocused , mapRegion.longitude , route.params])

    const specialOrder = false;

    function Item({ name , image , date , orderNum , id , index }) {
        return (
            <TouchableOpacity onPress={() => navigation.navigate(specialOrder ? 'specialOrderDetails' : 'normalOrderDetails')} style={[styles.borderGray,styles.marginBottom_20 , styles.directionRow , styles.Radius_5 , {flex:1 , padding:10}]}>
                <View style={[styles.directionRow , {flex:1}]}>
                    <Image source={{uri:image}} style={[styles.icon60 , styles.Radius_7]} resizeMode={'cover'} />
                    <View style={[styles.paddingHorizontal_10 , {flex:1}]}>
                        <Text style={[styles.textRegular , styles.text_gray , styles.textSize_14 , styles.marginBottom_5 , styles.alignStart , {lineHeight:20}]}>{name}</Text>
                        <Text style={[styles.textRegular , styles.text_midGray , styles.textSize_14 , styles.alignStart]}>{ date }</Text>
                    </View>
                </View>
                <View style={[{borderLeftWidth:1 , borderLeftColor:'#ddd' , paddingLeft:15} , styles.heightFull , styles.centerContext]}>
                    <Text style={[styles.textRegular , styles.text_mstarda , styles.textSize_14 , styles.marginBottom_5]}>{ i18n.t('orderNum') }</Text>
                    <Text style={[styles.textRegular , styles.text_gray , styles.textSize_14 ]}>{ orderNum }</Text>
                </View>
            </TouchableOpacity>
        );
    }


    return (
        <Container style={[styles.bg_gray]}>
            <Content contentContainerStyle={[styles.bgFullWidth , styles.bg_gray]}>

                <Header navigation={navigation} title={ i18n.t('home') } delegate={true}/>

                <View style={[styles.bgFullWidth ,styles.bg_White, styles.Width_100,styles.paddingHorizontal_20 , styles.paddingVertical_20, {overflow:'hidden'}]}>

                    <FlatList
                        data={delegateOrders}
                        horizontal={false}
                        showsVerticalScrollIndicator={false}
                        renderItem={({ item , index}) => <Item
                            id={item.order_id}
                            name={item.provider.name}
                            image={item.provider.avatar}
                            date={item.date}
                            orderNum={item.order_id}
                            index={index}
                        />}
                        keyExtractor={item => item.order_id}
                        style={[styles.marginBottom_35]}
                    />

                </View>

            </Content>
        </Container>
    );
}

export default Home;


