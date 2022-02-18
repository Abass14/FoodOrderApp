import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { Category } from '../redux'

interface ProductProps {
  addedFontSize?: number;
  onTap: Function;
  item: Category;
  additionalHeight?: number;
  addedWidth?: number;
}

const Product: React.FC<ProductProps> = ({addedFontSize, onTap, item, addedWidth, additionalHeight}) => {

  // console.log(item.icon, "<=== Item icon")
  return (
    <TouchableOpacity style={style.container} onPress={() => onTap(item)}>
      <Image style={[style.image, {width: addedWidth, height: additionalHeight}]} height={50} width={80} source={{uri: item.icon}} />
      <Text style={[style.text, {fontSize: addedFontSize}]}>{item.title}</Text>
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
      borderTopRightRadius: 20,
      borderTopLeftRadius: 20
    },
    text: {
      flex: 1,
      fontSize: 12
    }
})

export default Product
