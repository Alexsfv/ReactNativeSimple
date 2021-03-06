import React from 'react';
import { View, StyleSheet, Image, TouchableHighlight } from 'react-native';
import Swipeable from 'react-native-gesture-handler/Swipeable';
import colors from '../../config/colors';
import AppText from '../AppText/AppText.android';

function ListItem({ title, subTitle, image, onPress, IconComponent, renderRightActions }) {
    return (
        <Swipeable renderRightActions={renderRightActions}>
            <TouchableHighlight
                onPress={onPress}
                underlayColor={colors.light}
            >
                <View style={styles.container}>
                    {
                        image && <Image style={styles.image} source={image} />
                    }
                    {IconComponent}
                    <View style={styles.detailsContainer}>
                        <AppText style={styles.title}>{title}</AppText>
                        {
                            subTitle && <AppText style={styles.subTitle}>{subTitle}</AppText>
                        }
                    </View>
                </View>
            </TouchableHighlight>
        </Swipeable>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        padding: 15,
        backgroundColor: colors.white,
    },
    image: {
        width: 70,
        height: 70,
        borderRadius: 35,
    },
    detailsContainer: {
        marginLeft: 10,
        justifyContent: 'center',
    },
    title: {
        fontWeight: '500',
    },
    subTitle: {
        color: colors.medium
    }
})

export default ListItem;