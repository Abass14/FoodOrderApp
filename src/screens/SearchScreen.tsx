import { View, Text } from 'react-native'
import React from 'react'
import { connect } from 'react-redux'
import { ApplicationState } from '../redux'
import Container from '../components/Container'

interface SearchScreenProps {

}

const SearchScreen = () => {
  return (
    <Container>
      <Text>SearchScreen</Text>
    </Container>
  )
}

export default SearchScreen

// const mapToStateProps = (state: ApplicationState) => ({
//     userReducer: state.userReducer,
//     shoppingReducer: state.shoppingReducer
// })

// export const SearchScreen = connect(mapToStateProps, { onAvailability })(_SearchScreen)
