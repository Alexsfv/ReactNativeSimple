import React from 'react';
import { Image, ImageBackground, StyleSheet, Text, View } from 'react-native';
import AppButton from '../components/AppButton/AppButton';

function WelcomeScreen(props) {
    return (
        <ImageBackground
            source={require('../assets/background.jpg')}
            style={styles.background}
            blurRadius={4}
        >
            <View style={styles.logoContainer}>
                <Image source={require('../assets/logo-red.png')} style={styles.logo} />
                <Text style={styles.logoText}>Sell what you don't need!</Text>
            </View>

            <View style={styles.buttonsContainer}>
                <AppButton title="login" />
                <AppButton title="register" color='secondary' />
            </View>
        </ImageBackground>
    );
}

const styles = StyleSheet.create({
    background: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'center',
    },
    logoContainer: {
        position: 'absolute',
        flex: 1,
        top: 50,
        alignItems: 'center',
    },
    logo: {
        width: 100,
        height: 100,
    },
    logoText: {
        margin: 20,
        fontSize: 22,
        fontWeight: 'bold'
    },
    buttonsContainer: {
        width: '100%',
        paddingHorizontal: 20,
        paddingTop: 20,
        paddingBottom: 10,
    }
})

export default WelcomeScreen;