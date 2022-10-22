import * as React from 'react';
import { View,Text, StyleSheet, Image, Button } from 'react-native';
import { style } from './style';

const Detail = ({navigation}) => {
    return(
        <View>
            <Text>Detail Screen</Text>
            <Text style={style.tulisanku}>Selamat datang</Text>
            <Image source={{uri:'https://placeimg.com/120/120/nature'}} style={{ width:100, height:100}}></Image>
            <Button title='Go to Home'
            onPress={()=>navigation.navigate('Home')}/>
        </View>
    );
};

export default Detail;
