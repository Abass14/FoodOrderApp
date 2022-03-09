import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { Foods } from '../redux'
import ButtonWithRadius from './ButtonWithRadius'

interface FoodDetailCardProps {
    item: Foods,
    imageHeight: number, 
    imageWidth: string,
    onTap: Function,
    onAdd?: Function
    updateCart: Function
}

const FoodDetailCard: React.FC<FoodDetailCardProps> = ({imageHeight, imageWidth, item, onTap, onAdd, updateCart}) => {

    let imageIcon: string = '';
    if(item?.images?.length > 0){
        imageIcon = item.images[0]
    }

    const didupdateCart = (unit: number) => {
        console.log(unit, "<=== the unit")
        item.unit = unit
        updateCart(item)
        console.log(item.unit, "<=== item unit")
    }

    const addItem = () => {
        let theUnit = isNaN(item.unit) ? 0 : item.unit
        didupdateCart(theUnit + 1)
    }
    const removeItem = () => {
        let theUnit = isNaN(item.unit) ? 0 : item.unit
        didupdateCart(theUnit > 0 ? theUnit - 1 : theUnit)
    }
  return (
    <TouchableOpacity style={styles.container} onPress={() => onTap(item)}>
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
            <Text>{item.name}</Text>
            <Text>{item.category.toUpperCase()}</Text>
            <Text>{item.category.toUpperCase()}</Text>
        </View>
        <View style={{flex: 2, alignItems: 'flex-end', paddingEnd: 10, justifyContent: 'space-around',}}>
            <Text style={{paddingEnd: 15}}>{`$${item.price}`}</Text>
            <View style={{width: 80}}>
                <ButtonWithRadius
                    btnHeight={30}
                    onAdd={()=> {
                        let theUnit = isNaN(item.unit) ? 0 : item.unit
                        didupdateCart(theUnit + 1)
                    }}
                    onRemove={() => {
                        let theUnit = isNaN(item.unit) ? 0 : item.unit
                        didupdateCart(theUnit > 0 ? theUnit - 1 : theUnit);
                    }}
                    unit={item.unit}
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