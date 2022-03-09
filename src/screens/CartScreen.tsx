import { View, Text, StyleSheet, Image } from 'react-native'
import React from 'react'
import Container from '../components/Container'

const CartScreen = () => {
  return (
    <Container>
      <View style={styles.topBar}>
        <Text>My Cart</Text>
        <Image source={require('../images/')} />
      </View>
    </Container>
  )
}

const styles = StyleSheet.create({
    topBar: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    }
})

export default CartScreen