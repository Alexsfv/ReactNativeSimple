import React from 'react';
import { Text, StyleSheet } from 'react-native';

function AppText({ children }) {
    return (
        <Text style={styles.text}>
            { children}
        </Text>
    );
}

const styles = StyleSheet.create({
    text: {
        fontSize: 18,
        fontSize: 16,
    }
})

export default AppText;