import * as React from 'react';
import { View,Text, StyleSheet, Button } from 'react-native';

const About = ({navigation})=> {
    return(
        <View>
            <Text>About Screen</Text>
            <Button title='Go Back'
            onPress={()=>navigation.navigate('Home')}/>
        </View>
    );
};

export default About;
