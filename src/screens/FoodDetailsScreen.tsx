import { View, Text, ImageBackground } from 'react-native'
import React from 'react'
import Container from '../components/Container'
import ButtonWithIcon from '../components/ButtonWithIcon'
import { Foods } from '../redux'
import FoodCard from '../components/FoodCard'
import FoodDetailCard from '../components/FoodDetailCard'

interface FoodDetailScreenProps {
  navigation: {goBack: Function, navigate: any };
  route: { params: { item: {} }}
}

const FoodDetailsScreen: React.FC<FoodDetailScreenProps> = (props) => {

  const { goBack } = props.navigation;
  const { params } = props.route;
  const { navigation } = props
  const food = params.item as Foods
  console.log(food, "params")

  return (
    <Container>
        <View style={{flexDirection: 'row', justifyContent:'space-between'}}>
          <ButtonWithIcon onTap={() => goBack()} icon={require('../images/back_arrow.png')} addedHeight={20} addedWidth={20} />
          <Text style={{fontSize: 20}}>{food.name}</Text>
          <View></View>
        </View>
        <View style={{justifyContent: 'space-between', flex: 1, marginTop: 10}}>
          <ImageBackground style={{width: '100%', height: 400, justifyContent: 'flex-end', marginTop: 0}} source={{uri: food.images[0]}}>
            <View style={{minHeight: 100, backgroundColor: 'black', opacity: 0.7}}>
              <Text style={{fontSize: 30, color: 'white', fontWeight: 'bold', marginLeft: 10}}>{food.name}</Text>
              <Text style={{fontSize: 15, color: 'white', marginLeft: 10, textTransform: 'capitalize'}}>{food.category}</Text>
              <Text style={{fontSize: 15, color: 'white', marginLeft: 10}}>{food.description}</Text>
              <Text style={{fontSize: 15, color: 'white', marginLeft: 10}}>{`Ready in ${food.readyTime}mins`}</Text>
            </View>
          </ImageBackground>
          <View style={{marginBottom: 10}}>
            <FoodDetailCard food={food} onTap={() => {}} imageHeight={80} imageWidth={'100%'} />
          </View>
        </View>
    </Container>
  )
}

export default FoodDetailsScreen