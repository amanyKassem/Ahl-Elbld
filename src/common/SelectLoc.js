import React, {useEffect, useRef, useState} from "react";
import {
    View,
    Text,
    Image,
    TouchableOpacity,
    Dimensions,
    FlatList,
    I18nManager,
    ImageBackground,
    ActivityIndicator
} from "react-native";
import {Container, Content, Icon, Input} from 'native-base'
import styles from '../../assets/styles'
import i18n from "../../locale/i18n";
import Swiper from 'react-native-swiper';
import {useSelector, useDispatch} from 'react-redux';
import Header from './Header';
import COLORS from "../consts/colors";
import * as Permissions from "expo-permissions";
import * as Location from "expo-location";
import {useIsFocused} from "@react-navigation/native";
const latitudeDelta = 0.922;
const longitudeDelta = 0.521;

const height = Dimensions.get('window').height;
const isIOS = Platform.OS === 'ios';

function SelectLoc({navigation,route}) {

    const [screenLoader , setScreenLoader ] = useState(false);
    const [mapRegion, setMapRegion] = useState({
        latitude: '',
        longitude: '',
        latitudeDelta,
        longitudeDelta
    });
    let mapRef = useRef(null);
    const isFocused = useIsFocused();

    const user = useSelector(state =>  state.auth.user != null ? state.auth.user.data : null );

    const fetchData = async () => {
        let { status } = await Permissions.askAsync(Permissions.LOCATION);
        let userLocation = {};
        if (status !== 'granted') {
            alert('صلاحيات تحديد موقعك الحالي ملغاه');
        } else {
            const { coords: { latitude, longitude } } = await Location.getCurrentPositionAsync({});

            userLocation = { latitude, longitude , latitudeDelta , longitudeDelta};

            setMapRegion(userLocation);
            isIOS ? mapRef.current.animateToRegion(userLocation, 1000) : false;
        }
    }

    useEffect(() => {
        setScreenLoader(true);
        if(mapRegion.longitude) {
            setScreenLoader(false)
        }
        if (isFocused) {
            fetchData()
        }
    }, [isFocused , mapRegion.longitude])

    function renderLoader(){
        if (screenLoader){
            return(
                <View style={[styles.loading, styles.flexCenter, {height:'100%'}]}>
                    <ActivityIndicator size="large" color={COLORS.mstarda} style={{ alignSelf: 'center' }} />
                </View>
            );
        }
    }


    return (
        <Container style={[styles.bg_gray]}>
            {renderLoader()}
            <Content contentContainerStyle={[styles.bgFullWidth , styles.bg_gray]}>

                <Header navigation={navigation} title={ i18n.t('selectLoc') } />

                <View style={[styles.bgFullWidth ,styles.bg_White, styles.Width_100 , styles.paddingHorizontal_20 , {overflow:'hidden' , paddingBottom:20}]}>

                    <View style={[styles.directionColumnCenter , styles.bgFullWidth]}>

                        <Image source={user && user.user_type === 2 ? require('../../assets/images/home_order_vector.png') : require('../../assets/images/vector_delivery.png')} style={[styles.icon150 , styles.marginBottom_50]} resizeMode='contain' />

                        <TouchableOpacity  onPress={() => navigation.navigate('tabs', {screen: 'home' ,  params: { latitude: mapRegion.latitude , longitude:mapRegion.longitude }})} style={[styles.mstrdaBtn , styles.Width_100 , styles.marginBottom_10]}>
                            <Text style={[styles.textRegular , styles.text_White , styles.textSize_15]}>{ i18n.t('currentLoc') }</Text>
                        </TouchableOpacity>


                        <TouchableOpacity onPress={() => navigation.navigate('newLocation')} style={[styles.mstrdaBtn , styles.Width_100 , styles.marginBottom_10]}>
                            <Text style={[styles.textRegular , styles.text_White , styles.textSize_15]}>{ i18n.t('changeLoc') }</Text>
                        </TouchableOpacity>

                    </View>

                </View>

            </Content>
        </Container>
    );
}

export default SelectLoc;


