import { View, Text, StyleSheet, TouchableOpacity, ImageSourcePropType, Image } from 'react-native'
import React from 'react'

interface ButtonWithIconProps {
    onTap: Function;
    addedWidth?: number;
    addedHeight?: number;
    icon: ImageSourcePropType;
}

const ButtonWithIcon: React.FC<ButtonWithIconProps> = ({onTap, addedWidth, addedHeight, icon}) => {
  return (
    <TouchableOpacity 
        style={[style.btn, {width: addedWidth, height: addedHeight}]}
        onPress={() => onTap()}
    >
      <Image style={{width: (addedWidth!! - 2), height: (addedHeight!! - 2)}} source={icon} />
    </TouchableOpacity>
  )
}

const style = StyleSheet.create({
    btn: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: 40,
        width: 60
    }
})

export default ButtonWithIcon