import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import React from 'react'

interface ButtonWithRadiusProps {
    children: string;
    onTap: Function;
    btnHeight: number;
}
const ButtonWithRadius: React.FC<ButtonWithRadiusProps> = ({children, onTap, btnHeight}) => {
  return (
    <TouchableOpacity
        onPress={() => onTap()}
        style={[styles.btn, {height: btnHeight}]}
    >
      <Text style={styles.text}>{children}</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
    btn: {
        backgroundColor: 'red',
        borderRadius: 15,
        width: '100%',
        height: 50,
        alignItems: 'center',
        justifyContent: 'center'
    },
    text: {
        color: 'white',
        fontSize: 14
    }
})
export default ButtonWithRadius