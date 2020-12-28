import React, {useState} from "react";
import {View, Text, Image, TouchableOpacity, Dimensions} from "react-native";
import styles from '../../assets/styles'
import i18n from "../../locale/i18n";
import {useDispatch, useSelector} from "react-redux";
import Modal from "react-native-modal";
import {Textarea} from "native-base";
// import {getNotifications} from '../actions';

const height = Dimensions.get('window').height;
const isIOS = Platform.OS === 'ios';

function Header({navigation , title}) {

    // const lang          = useSelector(state => state.lang.lang);
    // const token         = useSelector(state => state.auth.user ? state.auth.user.data.token : null);
    // const user          = useSelector(state => state.auth.user ? state.auth.user.data :  {avatar: null});
    // const notifications = useSelector(state => state.notifications.notifications);

    const [showModal, setShowModal] = useState(false);
    const [comment, setComment] = useState('');

    function toggleModal () {
        setShowModal(!showModal);
    };

    return (
        <View style={[styles.directionRowSpace , styles.paddingHorizontal_15 ,  title !== i18n.t('selectNewLoc') ?styles.marginTop_20 : null , styles.height_80
            ,styles.Width_100 , title === i18n.t('selectNewLoc')  ? styles.shadow : null,  {
            borderBottomWidth:title === i18n.t('selectNewLoc')  ? 1 : 0,
            borderBottomColor:title === i18n.t('selectNewLoc')  ? '#ddd' : 0,
        }]}>

            <View style={[styles.directionRow]}>
                {
                    title !== i18n.t('selectLoc') ?
                        <TouchableOpacity onPress={() => navigation.openDrawer()} style={{marginRight:15}}>
                            <Image source={require('../../assets/images/menu.png')} style={[styles.icon23 , styles.transform]} resizeMode={'contain'} />
                        </TouchableOpacity>
                        :
                        null
                }
                {
                    title === i18n.t('home') ?
                        <TouchableOpacity onPress={() => navigation.navigate('notifications')} style={{marginRight:15}}>
                            <Image source={require('../../assets/images/notification_non_active.png')} style={[styles.icon23 , styles.transform]} resizeMode={'contain'} />
                        </TouchableOpacity>
                        :
                        null
                }

            </View>

            <Text style={[styles.textBold , title === i18n.t('selectNewLoc')  ? styles.text_gray : styles.text_White , styles.textSize_16 , styles.textCenter ,
                    {flex:title === i18n.t('selectLoc') ?1:0  , right : title === i18n.t('home') ? 10 : 0}]}>
                {title}
            </Text>


            {
                title === i18n.t('home')  ?
                    <View style={[styles.directionRow]}>
                        <TouchableOpacity onPress={() => navigation.navigate('basket')} >
                            <View style={{marginLeft:15}}>
                                <Image source={require('../../assets/images/basket.png')} style={[styles.icon23 , styles.transform]} resizeMode={'contain'} />
                            </View>
                            <View style={[styles.icon17 , styles.Radius_50 , styles.bg_mstarda , styles.justifyCenter ,{position:'absolute' , left:8 , top:0}]}>
                                <Text style={[styles.textRegular , styles.text_White , styles.textSize_10 , styles.flexCenter]}>1</Text>
                            </View>
                        </TouchableOpacity>

                    </View>
                    :

                    title !== i18n.t('selectLoc') ?
                        <TouchableOpacity onPress={() => navigation.goBack()} >
                            <Image source={require('../../assets/images/arrow_left.png')} style={[styles.icon23 , styles.transform]} resizeMode={'contain'} />
                        </TouchableOpacity>
                        :
                        null
            }

        </View>
    );
}

export default Header;


