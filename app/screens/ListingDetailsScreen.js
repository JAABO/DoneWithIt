import { StyleSheet, View, Image } from 'react-native'
import React from 'react'

import colors from '../config/colors';
import AppText from '../component/AppText/AppText';
import ListItem from '../component/ListItem';

export default function ListingDetailsScreen({props}) {
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={require('../assets/jacket.jpg')}/>
        
        <View style={styles.detailsContainer}>
            <AppText style={styles.title}>Red jacket for sale</AppText>
            <AppText style={styles.subTitle}>$100</AppText>
<View style={styles.userContainer}>

            <ListItem
                image={require("../assets/mosh.jpeg")}
                title="Jake Boldbaatar"
                subTitle="5 Listings"/>
    
</View>
        </View>
          
    </View>
  );
}

const styles = StyleSheet.create({
    detailsContainer:{
        padding: 20,
    
    },
    title:{
        fontSize: 24,
        fontWeight:"500",
        marginBottom: 7,  
    },
    subTitle:{
        color:colors.secondary,
        fontSize: 20,
        fontWeight: "bold",
        marginVertical: 10,
    },

    container:{
        borderRadius: 15,
        backgroundColor:colors.white,
        marginBottom: 20,
        overflow: "hidden",
    },
    image:{
        marginTop:20,
        width:'100%',
        height: 200,
    },
    userContainer:{
        marginVertical:40,
    }
})