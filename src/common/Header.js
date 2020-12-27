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
        <View style={[styles.marginTop_40 , styles.marginHorizontal_15 , styles.directionRowSpace , styles.marginBottom_20]}>

            <View style={[styles.directionRowSpace , styles.Width_100]}>

                <View style={[styles.directionRow]}>
                    <TouchableOpacity onPress={() => navigation.openDrawer()} style={{marginRight:15}}>
                        <Image source={require('../../assets/images/menu.png')} style={[styles.icon23 , styles.transform]} resizeMode={'contain'} />
                    </TouchableOpacity>
                    {
                        title === i18n.t('home')  || title === i18n.t('restaurantDetails')  ?
                            <TouchableOpacity onPress={() => navigation.navigate('notifications')} style={{marginRight:15}}>
                                <Image source={require('../../assets/images/notification_non_active.png')} style={[styles.icon23 , styles.transform]} resizeMode={'contain'} />
                            </TouchableOpacity>
                            :
                          null
                    }

                </View>

                {
                    title !== i18n.t('home')  ?
                        <Text style={[styles.textBold , styles.text_White , styles.textSize_16]}>{title}</Text>
                        :
                        null
                }


                {
                    title === i18n.t('home')  ?
                        <View style={[styles.directionRow]}>
                            <Text style={[styles.textRegular , styles.text_mstarda , styles.textSize_13]}>{i18n.t('orderPrice')} ٤٠٠ ريال</Text>
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
                            title === i18n.t('restaurantDetails')?
                                <View style={[styles.directionRow]}>
                                    <TouchableOpacity onPress={() => navigation.navigate('basket')} style={{marginRight:15}}>
                                        <View>
                                            <Image source={require('../../assets/images/basket.png')} style={[styles.icon23 , styles.transform]} resizeMode={'contain'} />
                                        </View>
                                        <View style={[styles.icon17 , styles.Radius_50 , styles.bg_mstarda , styles.justifyCenter ,{position:'absolute' , left:-5 , top:0}]}>
                                            <Text style={[styles.textRegular , styles.text_White , styles.textSize_10 , styles.flexCenter]}>1</Text>
                                        </View>
                                    </TouchableOpacity>
                                    <TouchableOpacity onPress={() => navigation.goBack()} >
                                        <Image source={require('../../assets/images/arrow_left.png')} style={[styles.icon23 , styles.transform]} resizeMode={'contain'} />
                                    </TouchableOpacity>
                                </View>
                                :
                                <TouchableOpacity onPress={() => navigation.goBack()} >
                                    <Image source={require('../../assets/images/arrow_left.png')} style={[styles.icon23 , styles.transform]} resizeMode={'contain'} />
                                </TouchableOpacity>
                }

            </View>

            <Modal
                onBackdropPress                 ={toggleModal}
                onBackButtonPress               = {toggleModal}
                isVisible                       = {showModal}
                style                           = {styles.bgModel}
                avoidKeyboard                    = {true}
            >

                <View style={[styles.bg_White, styles.overHidden, styles.Width_100, styles.paddingHorizontal_20 , styles.flexCenter , styles.paddingVertical_20]}>

                    <Image source={require('../../assets/images/student.png')} style={[styles.icon100  , styles.marginVertical_20]} resizeMode={'contain'} />

                    <Text style={[styles.textBold , styles.text_gray , styles.textSize_18 , styles.marginBottom_5]}>{ i18n.t('howUrOrder') }</Text>

                    <Textarea
                        style={[styles.input , styles.height_150 , styles.paddingVertical_10 , styles.bg_light_gray ,
                            {borderTopRightRadius :10 , borderRadius :10  , lineHeight:22}]}
                        placeholder={ i18n.t('addComment') }
                        onChangeText={(comment) => setComment(comment)}
                        value={comment}
                    />

                    <TouchableOpacity style={[styles.mstrdaBtn , styles.Width_95  , styles.marginTop_40]}>
                        <Text style={[styles.textBold , styles.text_White , styles.textSize_13]}>{ i18n.t('add') }</Text>
                    </TouchableOpacity>


                    <TouchableOpacity onPress={() => {navigation.navigate('home') ; setShowModal(false)}} style={[styles.mstrdaBtn , styles.Width_95  , styles.marginTop_10 , styles.marginBottom_15]}>
                        <Text style={[styles.textBold , styles.text_White , styles.textSize_13]}>{ i18n.t('home') }</Text>
                    </TouchableOpacity>

                </View>

            </Modal>
        </View>
    );
}

export default Header;


