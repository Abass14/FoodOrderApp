import { View, Text, StyleSheet, Image, TextInput, TouchableOpacity } from 'react-native'
import React from 'react'

interface SearchProps {
    onEditing?: any | undefined;
    didTouch?: any | undefined;
    autofocus?: boolean | undefined;
    onTextChange: Function;
    addedWidth?: string;
}
const SearchBar: React.FC<SearchProps> = ({onEditing, didTouch, autofocus=false, onTextChange, addedWidth}) => {
  return (
    <TouchableOpacity style={[styles.container, {width: addedWidth}]} onPress={didTouch}>
      <Image style={{height: 20, width: 20, marginEnd: 10}} source={require('../images/search.png')} />
      {/* <TextInput style={{width: '90%', height: 50}} placeholder='Seach Food' /> */}
      <Text style={{width: '90%'}} >Search Food</Text>
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

export default SearchBar