import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { Category, Restaurant } from '../redux'

interface RestaurantsProps {
  addedFontSize?: number;
  onTap: Function;
  item: Restaurant;
  additionalHeight?: number;
  addedWidth?: number;
}

const Restaurants: React.FC<RestaurantsProps> = ({addedFontSize, onTap, item, addedWidth, additionalHeight}) => {

    let imageIcon: string = '';
    if(item?.images?.length > 0){
        imageIcon = item.images[0]
    }
  // console.log(item.images[0], "<=== Item icon")
  return (
    <TouchableOpacity style={style.container} onPress={() => onTap(item)}>
      <Image 
        style={[style.image, {width: addedWidth, height: additionalHeight}]} 
        height={50} 
        width={80} 
        source={imageIcon ? {uri: imageIcon} : require('../images/lunch.jpeg')} resizeMode='cover' 
      />
      <Text style={[style.text, {fontSize: addedFontSize}]}>{item.name}</Text>
    </TouchableOpacity>
  )
}

const style = StyleSheet.create({
    container: {
      flex: 1,
      borderRadius: 15,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: 'white'
    },
    image: {
      width: 80,
      height: 60,
      borderTopRightRadius: 15,
      borderTopLeftRadius: 15
    },
    text: {
        flex: 1,
        fontSize: 12,
        paddingTop: 5,
        color: 'blue',
        fontStyle: 'italic',
        fontWeight: 'bold'
      }
})

export default Restaurants
