import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import React from 'react'

interface ButtonWithRadiusProps {
    children: string;
    btnHeight: number;
    onAdd?: any;
    onRemove?: any;
    unit: number;
}
const ButtonWithRadius: React.FC<ButtonWithRadiusProps> = ({children, btnHeight, onAdd, onRemove, unit}) => {

  
  // unit = 0
  return (
    <View>
      {!unit || unit === undefined || unit < 1 ? (
        <TouchableOpacity
        onPress={() => onAdd()}
        style={[styles.btn, {height: btnHeight} ]}
        >
          <Text style={styles.text}>{children}</Text>
        </TouchableOpacity>
      ) : (
        <View style={styles.optionView}>
          <TouchableOpacity 
            style={styles.btnAddRem}
            onPress={() => onRemove()}
          >
            <Text style={{fontSize: 20}}>-</Text>
          </TouchableOpacity>
          <Text style={styles.countText}>
            {unit}
          </Text>
          <TouchableOpacity 
            style={styles.btnAddRem}
            onPress={() => onAdd()}
          >
            <Text style={{fontSize: 20}}>+</Text>
          </TouchableOpacity>
        </View>
      )}
      
    </View>
    
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
    },
    optionView: {
      flexDirection: 'row',
      width: '100%',
      height: 50,
      alignItems: 'center',
      justifyContent: 'center'
    },
    btnAddRem: {
      flex: 1,
      borderColor: 'red',
      borderWidth: 1,
      backgroundColor: 'white',
      borderRadius: 5,
      height: 40,
      color: 'red',
      width: 50,
      alignItems: 'center',
      justifyContent: 'center'
    },
    countText: {
      fontSize: 14,
      color: 'red',
      flex: 1,
      textAlign: 'center'
    }
})
export default ButtonWithRadius