import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { Foods } from '../redux'
import ButtonWithRadius from './ButtonWithRadius'

interface FoodDetailCardProps {
    food: Foods,
    imageHeight: number, 
    imageWidth: string,
    onTap: Function,
    onAdd?: Function
}

const FoodDetailCard: React.FC<FoodDetailCardProps> = ({imageHeight, imageWidth, food, onTap, onAdd}) => {

    let imageIcon: string = '';
    if(food?.images?.length > 0){
        imageIcon = food.images[0]
    }
  return (
    <TouchableOpacity style={styles.container} onPress={() => onTap(food)}>
      <View style={styles.imageView}>
        <Image source={imageIcon ? {uri: imageIcon} : require('../images/lunch.jpeg')} style={{
            height: imageHeight, 
            width: imageWidth,
            borderTopLeftRadius: 10,
            borderBottomLeftRadius: 10
        }} />
      </View>
      <View style={styles.otherDetails}>
        <View style={{flex: 2, justifyContent: 'space-around', paddingStart: 10}}>
            <Text>{food.name}</Text>
            <Text>{food.category.toUpperCase()}</Text>
            <Text>{food.category.toUpperCase()}</Text>
        </View>
        <View style={{flex: 1, alignItems: 'flex-end', paddingEnd: 10, justifyContent: 'space-around'}}>
            <Text style={{paddingEnd: 15}}>{`$${food.price}`}</Text>
            <View style={{width: 50}}>
                <ButtonWithRadius
                    btnHeight={30}
                    onTap={()=> onAdd}
                >
                    Add
                </ButtonWithRadius>
            </View>
        </View>
      </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        backgroundColor: 'white',
        borderRadius: 10,
        width: '100%'
    }, 
    imageView: {
        flex: 1
    },
    otherDetails: {
        flex: 3,
        flexDirection: 'row',
        justifyContent: 'space-around',
    },
})

export default FoodDetailCard