import React from 'react';
import Screen from '../components/HOC/Screen/Screen';
import ListItem from '../components/ListItem/ListItem';

import { StyleSheet, View, FlatList } from 'react-native';

import colors from '../config/colors'
import Icon from '../components/Icon/Icon';
import ListItemSeparator from '../components/ListItemSeparator/ListItemSeparator';

const menuItems = [
    {
        title: 'My Listings',
        icon: {
            name: 'format-list-bulleted',
            backgroundColor: colors.primary,
        }
    },
    {
        title: 'My Messages',
        icon: {
            name: 'email',
            backgroundColor: colors.secondary,
        }
    }
]

function AccountScreen(props) {
    return (
        <Screen style={styles.screen}>
            <View style={styles.container}>
                <ListItem
                    title="Alex Safronov"
                    subTitle="safronov.sanya37@gmail.com"
                    image={require('../assets/mosh.jpg')}
                />
            </View>
            <View style={styles.list}>
                <FlatList
                    data={menuItems}
                    keyExtractor={menuItem => menuItem.title}
                    renderItem={({ item }) =>
                        <ListItem
                            title={item.title}
                            IconComponent={
                                <Icon name={item.icon.name} backgroundColor={item.icon.backgroundColor} />
                            }
                        />
                    }
                    ItemSeparatorComponent={ListItemSeparator}
                />
            </View>
            <ListItem
                title="Log Out"
                IconComponent={
                    <Icon name="logout" backgroundColor="#ffe66d" />
                }
            />
        </Screen>
    );
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        backgroundColor: colors.light,
    },
    container: {
        marginVertical: 20,
    },
    list: {
        marginBottom: 20,
    },
})

export default AccountScreen;