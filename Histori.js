import * as React from 'react';
import { View,Text, StyleSheet, Button } from 'react-native';

const Histori = ({navigation}) => {
    return(
        <View>
            <Text>Histori Screen</Text>
            <Text>1. sate </Text>
            <Text>2. soto </Text>
            <Text>3. Lontong Balap </Text>
            <Text>4. Dst.</Text>
            <Button title='Go to Home'
            onPress={()=>navigation.navigate('Home')}/>
        </View>
    );
};

export default Histori;
