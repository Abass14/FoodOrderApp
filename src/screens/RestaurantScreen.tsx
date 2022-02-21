import { View, Text, ImageBackground, FlatList } from 'react-native'
import React from 'react'
import Container from '../components/Container'
import { Foods, Restaurant } from '../redux';
import ButtonWithIcon from '../components/ButtonWithIcon';
import FoodDetailCard from '../components/FoodDetailCard';
import { FOOD_DETAIL_SCREEN } from '../utils/Constants';

interface RestaurantScreenProps {
  navigation: {goBack: Function, navigate: any };
  route: { params: { item: {}}}
}

const RestaurantScreen: React.FC<RestaurantScreenProps> = (props) => {
  const { goBack } = props.navigation;
  const { params } = props.route;
  const { navigation } = props
  const restaurant = params.item as Restaurant
  const availableFoods = restaurant.foods
  console.log(restaurant, "restaurant")

  const renderAvailableFoods = (item: Foods) => {
    return (
      <View style={{marginVertical: 10}}>
        <FoodDetailCard 
          food={item}
          imageHeight={80}
          imageWidth={'100%'}
          onTap={() => {
            navigation.navigate(FOOD_DETAIL_SCREEN, {item})
          }}
        />
      </View>
    )
  }

  return (
    <Container>
      <View style={{flexDirection: 'row', justifyContent:'space-between'}}>
        <ButtonWithIcon onTap={() => goBack()} icon={require('../images/back_arrow.png')} addedHeight={20} addedWidth={20} />
        <Text style={{fontSize: 20}}>{restaurant.name}</Text>
        <View></View>
      </View>
      <View style={{marginTop: 10}}>
        <ImageBackground style={{width: '100%', height: 300, justifyContent: 'flex-end'}} source={{uri: restaurant.images[0]}}>
          <View style={{height: 100, backgroundColor: 'black', opacity: 0.7}}>
            <Text style={{fontSize: 30, color: 'white', fontWeight: 'bold', marginLeft: 10}}>{restaurant.name}</Text>
            <Text style={{fontSize: 15, color: 'white', marginLeft: 10}}>{restaurant.address}</Text>
          </View>
          
        </ImageBackground>
        <FlatList 
            showsVerticalScrollIndicator={false}
            renderItem={({ item }) => renderAvailableFoods(item)}
            data={availableFoods}
            keyExtractor={(item) => `${item._id}`}
            style={{marginBottom:330}}
        />
      </View>
    </Container>
  )
}

export default RestaurantScreen