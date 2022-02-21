import { View, Text, FlatList } from 'react-native'
import React, { useState } from 'react'
import { connect } from 'react-redux'
import { ApplicationState, Foods, ShoppingState } from '../redux'
import Container from '../components/Container'
import ButtonWithIcon from '../components/ButtonWithIcon'
import SearchBarInput from '../components/SearchBarInput'
import { ScrollView } from 'react-native-gesture-handler'
import FoodDetailCard from '../components/FoodDetailCard'
import { FOOD_DETAIL_SCREEN } from '../utils/Constants'

interface SearchScreenProps {
  shoppingReducer: ShoppingState;
  navigation: { navigate: any, goBack: Function }
}

const _SearchScreen: React.FC<SearchScreenProps> = (props) => {

  const [isEditing, setIsEditing] = useState(false)
  const [keyword, setKeyword] = useState('')
  const [isSearchError, setIsSearchError] = useState(false)
  const [searchResultMsg, setSearchResultMsg] = useState('')
  
  const { availableFoods } = props.shoppingReducer;
  const {navigate, goBack} = props.navigation
  console.log(availableFoods, "<=== Available foods")

  const renderFoods = (item: Foods) => {
    return (
      <View style={{marginTop: 20}}>
         <FoodDetailCard
          food={item}
          imageHeight={80}
          imageWidth={'100%'}
          onTap={() => {
            navigate(FOOD_DETAIL_SCREEN, {item})
          }}
        />
      </View>
    )
  }

  return (
    <Container>
      <View style={{width: '100%', flexDirection: 'row'}}>
        <View style={{justifyContent: 'center', flex: 1}}>
          <ButtonWithIcon onTap={() => {goBack()}} addedHeight={20} addedWidth={20} icon={require('../images/back_arrow.png')} />
        </View>
        <View style={{flex: 5}}>
          <SearchBarInput 
            onTextChange={setKeyword} 
            onEditing={() => setIsEditing(false)} 
            addedHeight={40} 
            didTouch={() => setIsEditing(true)}
          />
        </View>
      </View>
      <View style={{marginBottom: 50}}>
        <Text>{searchResultMsg}</Text>
          <FlatList 
              showsVerticalScrollIndicator={false}
              renderItem={({ item }) => renderFoods(item)}
              data={
                isEditing ?
                availableFoods.filter((food) => {
                  return food.name.includes(keyword)
                }) :
                availableFoods
              }
              keyExtractor={(item) => `${item._id}`}
          />
      </View>
    </Container>
  )
}

const mapToStateProps = (state: ApplicationState) => ({
    userReducer: state.userReducer,
    shoppingReducer: state.shoppingReducer
})

export const SearchScreen = connect(mapToStateProps, { })(_SearchScreen)
