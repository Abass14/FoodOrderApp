import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { Category, Foods, Restaurant } from '../redux'

interface FoodCardProps {
  addedFontSize?: number;
  onTap: Function;
  item: Foods;
  additionalHeight?: number;
  addedWidth?: number;
}

const FoodCard: React.FC<FoodCardProps> = ({addedFontSize, onTap, item, addedWidth, additionalHeight}) => {

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
      <View style={{flex: 1, width: '100%', flexDirection: 'row', justifyContent:'space-between', alignItems: 'center', paddingHorizontal: 15}}>
        <Text style={[style.text, {fontSize: addedFontSize}]}>{item.name}</Text>
        <Text style={[style.text, {fontSize: addedFontSize}]}>{`$${item.price}`}</Text>
      </View>
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
        fontSize: 12,
        color: 'red',
        fontWeight: 'bold'
      }
})

export default FoodCard
