import { View, Text, StyleSheet, ScrollView, FlatList, Alert, BackHandler } from 'react-native';
import React, { useEffect } from 'react';
import Container from '../components/Container';
import { onAvailability, onSearchFoods, UserState, ApplicationState, ShoppingState, Category, Restaurant, Foods} from '../redux'
import { connect } from 'react-redux';
import SearchBar from '../components/SearchBar';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { FOOD_DETAIL_SCREEN, RESTAURANT_SCREEN, SEARCH_PAGE } from '../utils/Constants';
import ButtonWithIcon from '../components/ButtonWithIcon';
import Product from '../components/Product';
import Restaurants from '../components/Restaurants';
import FoodCard from '../components/FoodCard';
import SearchBarInput from '../components/SearchBarInput';

type RootStackParamList = {
    LandingPage: undefined;
    HomeScreen: undefined;
    SearchScreen: undefined;
    RestaurantScreen: {item: Restaurant};
    FoodDetailScreen: {item: Foods}
  };

type Props = NativeStackScreenProps<RootStackParamList, 'HomeScreen'>;

interface HomeScreenProps {
    userReducer: UserState,
    shoppingReducer: ShoppingState,
    onAvailability: Function,
    onSearchFoods: Function,
    navigation: {navigate: any}
}

export const _HomeScreen: React.FC<HomeScreenProps> = (props) => {

    const { location } = props.userReducer;
    const { availability } = props.shoppingReducer;
    const { categories, foods, restaurants } = availability;
    const { navigation } = props
    console.log(navigation, "navigation")

    useEffect(() => {
        props.onAvailability(location.postalCode)
        setTimeout(() => {
            props.onSearchFoods(location.postalCode)
        }, 1000)
    }, [])

    let foods30 = foods?.filter(food => {
        return food.readyTime === 30;
    } )

    const handleBackButton = () => {
        Alert.alert(
            'Exit App',
            'Exiting the application?', [{
                text: 'Cancel',
                onPress: () => console.log('Cancel Pressed'),
                style: 'cancel'
            }, {
                text: 'OK',
                onPress: () => BackHandler.exitApp()
            }, ], {
                cancelable: false
            }
         )
         return true;
    }

    useEffect(() => {
        const backHandler = BackHandler.addEventListener('hardwareBackPress', handleBackButton);
        return () => backHandler.remove()
    }, [])

    // console.log(foods30, "fooooods")

    const renderCategory = (item: Category) => {
        return (
            <View style={{width: 80, height: 80, marginRight: 15}}>
                <Product 
                    onTap={() => {}}
                    item={item}
                    addedWidth={80}
                    additionalHeight={60}
                />
            </View>
        )
    }

    const renderRestaurant = (item: Restaurant) => {
        return (
            <View style={{width: 250, height: 200, marginRight: 15, marginVertical: 10}}>
                <Restaurants 
                    onTap={() => {navigation.navigate(RESTAURANT_SCREEN, {item})}}
                    item={item}
                    addedWidth={250}
                    additionalHeight={170}
                />
            </View>
        )
    }

    const renderFood = (item: Foods) => {
        return (
            <View style={{width: 250, height: 200, marginRight: 15, marginVertical: 10}}>
                <FoodCard 
                    onTap={() => {navigation.navigate(FOOD_DETAIL_SCREEN, {item})}}
                    item={item}
                    addedWidth={250}
                    additionalHeight={170}
                />
            </View>
        )
    }

  return (
    <Container>
        <View style={styles.section}>
            <View style={{
                flexDirection: 'row'
            }}>
                <Text style={styles.addressText}>{`${location.postalCode}, ${location.street} ${location.city}. ${location.country}`}</Text>
                <Text>Edit Button</Text>
            </View>
            <View style={styles.searchBar}>
                <Text style={styles.addressText}>Search Bar</Text>
                <View style={{flexDirection: 'row', alignItems: 'center', justifyContent:'space-around'}}>
                    <SearchBarInput 
                        addedWidth={'85%'}
                        onTextChange={() => {}}
                        didTouch={() => {
                            navigation.navigate(SEARCH_PAGE)
                        }}
                        addedHeight={45}
                    />
                    <ButtonWithIcon onTap={() => {}} icon={require('../images/hambar.png')} addedHeight={40} addedWidth={40} />
                </View>
            </View>
        </View>
        <View style={styles.sectionCenter}>
            <ScrollView>
                <View>
                    <Text style={{fontSize: 14, color: 'black', marginBottom: 10}}>Categories</Text>
                </View>
                <FlatList 
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    renderItem={({ item }) => renderCategory(item)}
                    data={categories}
                    keyExtractor={(item) => `${item.id}`}
                />
                <View style={{marginTop: 20}}>
                    <Text style={styles.restaurantText}>Top Restaurants</Text>
                </View>
                <FlatList 
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    renderItem={({ item }) => renderRestaurant(item)}
                    data={restaurants}
                    keyExtractor={(item) => `${item._id}`}
                />
                 <View>
                    <Text style={styles.restaurantText}>30 mins Food</Text>
                </View>
                <FlatList 
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    renderItem={({ item }) => renderFood(item)}
                    data={foods30}
                    keyExtractor={(item) => `${item._id}`}
                />
            </ScrollView>
        </View>
    </Container>
  );
};

const styles = StyleSheet.create({
    sectionCenter: {
        flex: 9,
    },
    section: {
        flex: 2,
        alignItems: 'flex-start',
    },
    sectionBottom: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'flex-end',
        backgroundColor: 'cyan'
    },
    addressText: {
        marginEnd: 5,
        marginBottom: 10
    },
    searchBar: {
        width: '100%',
        alignSelf: 'center'
    },
    restaurantText: {
        fontSize: 20,
        color: 'red',
        fontWeight: '700'
    }
})

// export default HomeScreen;

const mapToStateProps = (state: ApplicationState) => ({
    userReducer: state.userReducer,
    shoppingReducer: state.shoppingReducer
})

export const HomeScreen = connect(mapToStateProps, { onAvailability, onSearchFoods })(_HomeScreen)
