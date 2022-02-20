import { View, Text, StyleSheet, Image, TextInput, TouchableOpacity } from 'react-native'
import React from 'react'

interface SearchProps {
    onEditing?: any | undefined;
    didTouch?: any | undefined;
    autofocus?: boolean | undefined;
    onTextChange?: any;
    addedWidth?: string;
    addedHeight?: number
}
const SearchBarInput: React.FC<SearchProps> = ({onEditing, didTouch, autofocus=false, onTextChange, addedWidth, addedHeight}) => {
  return (
    <TouchableOpacity style={[styles.container, {width: addedWidth, height: addedHeight}]} onPress={didTouch}>
       <Image style={{height: 20, width: 20, marginEnd: 10}} source={require('../images/search.png')} />
      <TextInput 
        style={{width: '90%', height: 50}} 
        placeholder='Seach Food' 
        onChangeText={(text) => onTextChange(text)} 
        onEndEditing={onEditing}
        autoFocus={autofocus}
        onTouchStart={didTouch}
      />
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: 50,
        borderRadius: 10,
        borderColor: 'grey',
        borderWidth: 1,
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 15
    }
})

export default SearchBarInput