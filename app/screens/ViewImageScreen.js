import React from 'react';
import { Image, StyleSheet, TouchableOpacity, View } from 'react-native';
import colors from '../config/colors';
import { MaterialCommunityIcons } from '@expo/vector-icons'

function ViewImageScreen(props) {
    return (
        <View style={styles.container}>
            <View style={styles.controls}>

                <TouchableOpacity>
                    <MaterialCommunityIcons name="close" color="white" size={30} />
                </TouchableOpacity>

                <TouchableOpacity>
                    <MaterialCommunityIcons name="trash-can-outline" color="white" size={30} />
                </TouchableOpacity>

            </View>
            <Image
                resizeMode="contain"
                style={styles.image}
                source={require('../assets/chair.jpg')}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.black,
    },
    controls: {
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        paddingVertical: 10,
        paddingHorizontal: 20,
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor: colors.blackOpacity,
        zIndex: 1,
    },
    image: {
        width: '100%',
        height: '100%',
    }
})

export default ViewImageScreen;