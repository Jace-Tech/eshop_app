import { Image, Text, View } from 'react-native'
import React from 'react'
import { styles } from './styles'
import Button from '../../components/Button';
import Container from '../../components/Container';

const Welcome = ({ navigation }) => {
    return (
        <View style={styles.welcome}>
            <View style={styles.imageContainer}>
                <View style={{marginBottom: 20}}>
                    <Text style={styles.title}>Bon Appetit</Text>
                </View>

                <Image source={require('../../assets/bon.png')} style={styles.image} />
            </View>

            <View style={styles.btnContainer}>
                <Container>
                    <Button onPress={() => navigation.navigate('Login')} color="primary" title="Get Started" />
                </Container>
            </View>
        </View>
    );
};

export default Welcome;
