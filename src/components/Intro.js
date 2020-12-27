import React, { useState , useEffect } from "react";
import {
    View,
    Text,
    Image,
    TouchableOpacity,
    StyleSheet,
    Dimensions,
    ActivityIndicator,
    Platform,
    ImageBackground
} from "react-native";
import {Container, Content, Form, Icon, Input, Item, Label, Toast} from 'native-base'
import styles from '../../assets/styles'
import i18n from "../../locale/i18n";
import COLORS from "../consts/colors";
import SwiperFlatList from 'react-native-swiper-flatlist';


const isIOS = Platform.OS === 'ios';
const { width } = Dimensions.get('window');

function Intro({navigation}) {

    const intro = [
        {image:require('../../assets/images/intro_one.png') , title:'العنوان يابا' , details:'صباح الخير ياسطااااا دي الانتروو صباح الخير ياسطااااا دي الانتروو صباح الخير ياسطااااا دي الانتروو صباح الخير ياسطااااا دي الانتروو صباح الخير ياسطااااا دي الانتروو '},
        {image:require('../../assets/images/intro_two.png') , title:'العنوان يابا' , details:'صباح الخير ياسطااااا دي الانتروو صباح الخير ياسطااااا دي الانتروو صباح الخير ياسطااااا دي الانتروو صباح الخير ياسطااااا دي الانتروو صباح الخير ياسطااااا دي الانتروو '},
        {image:require('../../assets/images/intro_three.png') , title:'العنوان يابا' , details:'صباح الخير ياسطااااا دي الانتروو صباح الخير ياسطااااا دي الانتروو صباح الخير ياسطااااا دي الانتروو صباح الخير ياسطااااا دي الانتروو صباح الخير ياسطااااا دي الانتروو '},
    ]

    return (
        <Container >
            {/*<ImageBackground source={require('../../assets/images/splash_bg.png')} resizeMode={'cover'} style={styles.imageBackground}>*/}
                <Content contentContainerStyle={[styles.bgFullWidth]}>
                    <View style={[styles.bgFullWidth, styles.Width_100]}>
                        <SwiperFlatList
                            index={0}
                            showPagination
                            paginationActiveColor={COLORS.mstarda}
                            paginationStyle={[styles.marginBottom_65]}
                            paginationStyleItem={{ width: 10, height: 10 ,marginHorizontal:5}}
                        >

                            {
                                intro.map((intr, i) => (
                                    <View style={[styles.heightFull , {width}]} key={i}>
                                        <Image source={intr.image} style={[{width , height:'100%'}]} resizeMode={'cover'} />
                                        <View style={styles.wrapText}>
                                            <Text style={[styles.text_black , styles.textBold , styles.textSize_18 , styles.textCenter]}>{intr.title}</Text>
                                            <Text numberOfLines={4} style={[styles.text_gray , styles.textRegular , styles.textSize_14 , styles.marginTop_10 , styles.textCenter , {lineHeight:24}]}> {intr.details} </Text>
                                        </View>
                                        {
                                            intro.length == i + 1 ?
                                                <TouchableOpacity style={styles.introButton} onPress={() => navigation.navigate('login')}>
                                                    <Text style={[styles.text_White , styles.textBold , styles.textSize_18]}>
                                                        {i18n.t('start')}
                                                    </Text>
                                                </TouchableOpacity> : null
                                        }
                                    </View>
                                ))
                            }


                        </SwiperFlatList>

                    </View>
                </Content>
            {/*</ImageBackground>*/}
        </Container>
    );
}


export default Intro;


