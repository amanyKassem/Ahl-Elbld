import React , {useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {chooseLang} from "../actions";
import {DrawerContentScrollView, DrawerItem} from "@react-navigation/drawer";
import styles from "../../assets/styles";
import {Dimensions, I18nManager, Image, Platform, Text, TouchableOpacity, View, Share, Switch} from "react-native";
import i18n from "../../locale/i18n";
import COLORS from "../consts/colors";
import {logout, tempAuth} from '../actions';


const height = Dimensions.get('window').height;
const isIOS = Platform.OS === 'ios';

export default function CustomDrawerContent(props) {

    const lang  = useSelector(state => state.lang.lang);
    // const auth = useSelector(state => state.auth);
    // const token = useSelector(state => state.auth.user ? state.auth.user.data.token : null);
    // const user  = useSelector(state => state.auth.user ? state.auth.user.data : { avatar: '', name: null});
    const [switchValue, setSwitchValue] = useState(false);


    const dispatch  = useDispatch();
    function toggleSwitch(value) {
        setSwitchValue(value);
    }

    // function logoutFunc(){
    //     dispatch(logout(lang , token));
    //     dispatch(tempAuth(token));
    // }

    const onShare = async () => {
        try {
            const result = await Share.share({
                message:
                    'Ahl-Elbld App',
            });

            if (result.action === Share.sharedAction) {
                if (result.activityType) {
                    // shared with activity type of result.activityType
                } else {
                    // shared
                }
            } else if (result.action === Share.dismissedAction) {
                // dismissed
            }
        } catch (error) {
            alert(error.message);
        }
    };

    return (
        <DrawerContentScrollView {...props} style={[styles.bg_mstarda]}>
            <View style={[styles.bgFullWidth , styles.bg_White,{minHeight:height, paddingTop:0}]}>
                <Image source={require('../../assets/images/bg_menu.png')} style={[styles.Width_100 , styles.height_230]} resizeMode={'cover'} />

                <View style={[styles.flexCenter , {position:'absolute' , top:45 }]}>
                    <TouchableOpacity style={[styles.icon70 , styles.marginBottom_5 , styles.Radius_50 , {overflow:'hidden' , borderWidth:5 , borderColor:'#6f6a6a1a'}]}>
                        <Image source={require('../../assets/images/image_placeholder.png')} style={[styles.Width_100 , styles.heightFull, styles.Radius_50]} resizeMode={'cover'} />
                    </TouchableOpacity>
                    <Text style={[styles.textBold , styles.text_White , styles.textSize_17, styles.textCenter ]}>أماني قاسم</Text>
                </View>

                <DrawerItem
                    style={[styles.marginTop_15 , styles.justifyCenter , {marginHorizontal:20 }]}
                    label={
                        ({ focused, color }) => {
                            return (
                                <Text style={[styles.textRegular, focused ? styles.text_midGray : styles.text_gray , styles.textSize_15, styles.alignStart , {writingDirection: I18nManager.isRTL ? 'rtl' : 'ltr', marginLeft:-10}]}>{ i18n.t('home') }</Text>
                            )
                        }
                    }
                    icon={
                        ({ focused, color }) => {
                            return (
                                <Image source={require('../../assets/images/home_menu.png')} style={[styles.icon20]} resizeMode={'contain'} />
                            )
                        }
                    }
                    onPress={() => props.navigation.navigate('home')}
                />

                <DrawerItem
                    style={[styles.justifyCenter , {marginHorizontal:20 }]}
                    label={
                        ({ focused, color }) => {
                            return (
                                <Text style={[styles.textRegular, focused ? styles.text_midGray : styles.text_gray , styles.textSize_15, styles.alignStart , {writingDirection: I18nManager.isRTL ? 'rtl' : 'ltr', marginLeft:-10}]}>{ i18n.t('aboutApp') }</Text>
                            )
                        }
                    }
                    icon={
                        ({ focused, color }) => {
                            return (
                                <Image source={require('../../assets/images/info_menu.png')} style={[styles.icon20]} resizeMode={'contain'} />
                            )
                        }
                    }
                    onPress={() => props.navigation.navigate('aboutApp')}
                />

                <DrawerItem
                    style={[styles.justifyCenter , {marginHorizontal:20 }]}
                    label={
                        ({ focused, color }) => {
                            return (
                                <Text style={[styles.textRegular, focused ? styles.text_midGray : styles.text_gray , styles.textSize_15, styles.alignStart , {writingDirection: I18nManager.isRTL ? 'rtl' : 'ltr', marginLeft:-10}]}>{ i18n.t('appPolicy') }</Text>
                            )
                        }
                    }
                    icon={
                        ({ focused, color }) => {
                            return (
                                <Image source={require('../../assets/images/policy_menu.png')} style={[styles.icon20]} resizeMode={'contain'} />
                            )
                        }
                    }
                    onPress={() => props.navigation.navigate('appPolicy')}
                />

                <DrawerItem
                    style={[styles.justifyCenter , {marginHorizontal:20 }]}
                    label={
                        ({ focused, color }) => {
                            return (
                                <Text style={[styles.textRegular, focused ? styles.text_midGray : styles.text_gray , styles.textSize_15, styles.alignStart , {writingDirection: I18nManager.isRTL ? 'rtl' : 'ltr', marginLeft:-10}]}>{ i18n.t('contactUs') }</Text>
                            )
                        }
                    }
                    icon={
                        ({ focused, color }) => {
                            return (
                                <Image source={require('../../assets/images/contactUs_menu.png')} style={[styles.icon20]} resizeMode={'contain'} />
                            )
                        }
                    }
                    onPress={() => props.navigation.navigate('contactUs')}
                />

                <DrawerItem
                    style={[styles.justifyCenter , {marginHorizontal:20 }]}
                    label={
                        ({ focused, color }) => {
                            return (
                                <Text style={[styles.textRegular, focused ? styles.text_midGray : styles.text_gray , styles.textSize_15, styles.alignStart , {writingDirection: I18nManager.isRTL ? 'rtl' : 'ltr', marginLeft:-10}]}>{ i18n.t('wallet') }</Text>
                            )
                        }
                    }
                    icon={
                        ({ focused, color }) => {
                            return (
                                <Image source={require('../../assets/images/account_menu.png')} style={[styles.icon20]} resizeMode={'contain'} />
                            )
                        }
                    }
                    onPress={() => props.navigation.navigate('wallet')}
                />

                <DrawerItem
                    style={[styles.justifyCenter , {marginHorizontal:20 }]}
                    label={
                        ({ focused, color }) => {
                            return (
                                <Text style={[styles.textRegular, focused ? styles.text_midGray : styles.text_gray , styles.textSize_15, styles.alignStart , {writingDirection: I18nManager.isRTL ? 'rtl' : 'ltr', marginLeft:-10}]}>{ i18n.t('comp&sug') }</Text>
                            )
                        }
                    }
                    icon={
                        ({ focused, color }) => {
                            return (
                                <Image source={require('../../assets/images/noun_complain_menu.png')} style={[styles.icon20]} resizeMode={'contain'} />
                            )
                        }
                    }
                    onPress={() => props.navigation.navigate('compAndSug')}
                />

                <DrawerItem
                    style={[styles.justifyCenter , {marginHorizontal:20 }]}
                    label={
                        ({ focused, color }) => {
                            return (
                                <Text style={[styles.textRegular, focused ? styles.text_midGray : styles.text_gray , styles.textSize_15, styles.alignStart , {writingDirection: I18nManager.isRTL ? 'rtl' : 'ltr', marginLeft:-10}]}>{ i18n.t('shareApp') }</Text>
                            )
                        }
                    }
                    icon={
                        ({ focused, color }) => {
                            return (
                                <Image source={require('../../assets/images/share_menu.png')} style={[styles.icon20]} resizeMode={'contain'} />
                            )
                        }
                    }
                    onPress={() => onShare()}
                />

                <DrawerItem
                    style={[styles.justifyCenter , {marginHorizontal:20 }]}
                    label={
                        ({ focused, color }) => {
                            return (
                                <Text style={[styles.textRegular, focused ? styles.text_midGray : styles.text_gray , styles.textSize_15, styles.alignStart , {writingDirection: I18nManager.isRTL ? 'rtl' : 'ltr', marginLeft:-10}]}>{ i18n.t('settings') }</Text>
                            )
                        }
                    }
                    icon={
                        ({ focused, color }) => {
                            return (
                                <Image source={require('../../assets/images/settings_menu.png')} style={[styles.icon20]} resizeMode={'contain'} />
                            )
                        }
                    }
                    onPress={() => props.navigation.navigate('settings')}
                />

                <DrawerItem
                    style={[styles.justifyCenter , {marginHorizontal:20 }]}
                    label={
                        ({ focused, color }) => {
                            return (
                                <Text style={[styles.textRegular, focused ? styles.text_midGray : styles.text_gray , styles.textSize_15, styles.alignStart , {writingDirection: I18nManager.isRTL ? 'rtl' : 'ltr', marginLeft:-10}]}>{ i18n.t('logout') }</Text>
                            )
                        }
                    }
                    icon={
                        ({ focused, color }) => {
                            return (
                                <Image source={require('../../assets/images/logout_menu.png')} style={[styles.icon20]} resizeMode={'contain'} />
                            )
                        }
                    }
                    onPress={() => props.navigation.navigate('logout')}
                />

                <View style={[styles.directionRowSpace , styles.marginTop_10 , styles.marginBottom_35 , {paddingLeft:30 , paddingRight:10}]}>
                    <Text style={[styles.textRegular , styles.text_gray , styles.textSize_15 ]}>{ i18n.t('delegateStatus')}</Text>
                    <Switch
                        style={{}}
                        onValueChange={() => toggleSwitch(!switchValue)}
                        value={switchValue}
                        trackColor={{ false: COLORS.midGray, true: '#ddd' }}
                        thumbColor={switchValue ? COLORS.mstarda : "#f4f3f4"}
                    />
                </View>

            </View>
        </DrawerContentScrollView>
    );
}