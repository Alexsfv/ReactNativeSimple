import React, { useState } from 'react';
import { FlatList, View } from 'react-native'
import Screen from '../components/HOC/Screen/Screen';
import ListItem from '../components/ListItem/ListItem'
import ListItemDeleteAction from '../components/ListItemDeleteAction/ListItemDeleteAction';
import ListItemSeparator from '../components/ListItemSeparator/ListItemSeparator';

const initialMessages = [
    {
        id: 1,
        title: 'T1',
        description: 'D1',
        image: require('../assets/mosh.jpg')
    },
    {
        id: 2,
        title: 'T1',
        description: 'D1',
        image: require('../assets/mosh.jpg')
    },
    {
        id: 3,
        title: 'T1',
        description: 'D1',
        image: require('../assets/mosh.jpg')
    }
]

function MessagesScreen(props) {
    const [messages, setMessages] = useState(initialMessages)
    const [refreshing, setRefreshing] = useState(false)

    const handleDelete = message => {
        setMessages(messages.filter(m => m.id !== message.id))
    }


    return (
        <Screen>
            <FlatList
                data={messages}
                keyExtractor={message => message.id.toString()}
                renderItem={({ item }) =>
                    <ListItem
                        title={item.title}
                        subTitle={item.description}
                        image={item.image}
                        onPress={() => console.log(item)}
                        renderRightActions={() => <ListItemDeleteAction onPress={() => handleDelete(item)} />}
                    />
                }
                ItemSeparatorComponent={ListItemSeparator}
                refreshing={refreshing}
                onRefresh={() => {
                    setMessages([
                        {
                            ...initialMessages[1]
                        }
                    ])
                }}
            />
        </Screen>
    )
}

export default MessagesScreen;