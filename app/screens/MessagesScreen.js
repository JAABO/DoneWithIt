import { FlatList, SafeAreaView, StyleSheet} from 'react-native'
import React from 'react'

import ListItem from '../component/ListItem'

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
    
}]

function MessagesScreen(props) {
  return (
    <SafeAreaView>
        <FlatList
        data={messages}
        keyExtractor={message => message.id.toString()}
        renderItem={ ({item})=> 
            <ListItem
                title={item.titles}
                subTitle={item.description}
                image={item.image}
            />} 
        />
    </SafeAreaView>
   
  )
}

export default MessagesScreen;