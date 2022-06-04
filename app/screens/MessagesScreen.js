import { FlatList, SafeAreaView, StyleSheet, Platform, } from 'react-native'
import React from 'react'

import ListItem from '../component/ListItem'
import { StatusBar } from 'expo-status-bar'

const messages =[{
    id: 1,
    title:'T1',
    description:'D1',
    image: require('../assets/mosh.jpeg')},
    {
    id: 2,
    title:'T2',
    description:'D2',
    image: require('../assets/mosh.jpeg'),
    },
];

function MessagesScreen(props) {
  return (
    <SafeAreaView style={styles.screen}>
        <FlatList
        data={messages}
        keyExtractor={message => message.id.toString()}
        renderItem={ ({item})=> 
            <ListItem
                title={item.title}
                subTitle={item.description}
                image={item.image}
            />} 
        />
    </SafeAreaView>
   
  )
}

const styles = StyleSheet.create({
    screen:{
        paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0 
    }
})
export default MessagesScreen;