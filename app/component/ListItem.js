import { StyleSheet, Image, View } from 'react-native'
import React from 'react'

import AppText from './AppText/AppText'
import colors from '../config/colors'

export default function ListItem ({title, subTitle, image} ){
  return (
    <View style={styles.container}>
        <Image style={styles.image} source={image}/>
        <View>
            <AppText style={styles.title}>{title}</AppText>
            <AppText style={styles.subTitle}>{subTitle}</AppText>
        </View>
    </View>
  )
}

const styles = StyleSheet.create({

    container:{
        flexDirection:"row",

    },
    image:{
        width:70,
        height:70,
        borderRadius:35,
        marginRight: 10,

    },
    title:{
        fontWeight:"500",

    },
    subTitle:{
        color:colors.medium,
    }
})