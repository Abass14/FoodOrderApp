import { View, Text, StyleSheet, Image, Dimensions } from 'react-native';
import React, { useEffect, useState } from 'react';
import Container from '../components/Container';
import Paragraph from '../components/Paragraph';
import * as Location from 'expo-location';
import { useNavigation } from '../utils'; 
import { NativeStackScreenProps, createNativeStackNavigator, NativeStackNavigationProp } from '@react-navigation/native-stack';
import { HOME_PAGE, HOME_STACK } from '../utils/Constants';
import { updateLocation, UserState, ApplicationState} from '../redux'
import { connect } from 'react-redux';

const screenWidth = Dimensions.get('screen').width

type RootStackParamList = {
    LandingPage: undefined;
    HomeScreen: undefined;
  };

type Props = NativeStackScreenProps<RootStackParamList, 'LandingPage'>;

interface LandingProps {
    userReducer: UserState,
    updateLocation: Function,
    navigation: any
}

export const _LandingPage: React.FC<LandingProps> = (props) => {

    const { userReducer, updateLocation, navigation } = props

    const [errorMsg, setErrorMsg] = useState("");
    const [address, setAddress] = useState<Location.LocationGeocodedAddress>();
    const [displayAddress, setDisplayAddress] = useState("Waiting for current location")

    useEffect(() => {
        const loadAddress = async () => {
            let { status } = await Location.requestForegroundPermissionsAsync();
            if (status !== 'granted') {
                setErrorMsg('Permission to access location denied')
            }
            
            let location = await Location.getCurrentPositionAsync({});
            const { coords } = location; 
            if (coords) {
                const {latitude, longitude} = coords;
                let addressResponse: any = await Location.reverseGeocodeAsync({latitude, longitude});
                for(let item of addressResponse){
                    setAddress(item);
                    // console.log(item, "ADDRESS")
                    updateLocation(item);
                    let currentAddress = `${item.name}, ${item.street}, ${item.postalCode}, ${item.country}`;
                    setDisplayAddress(currentAddress);
                    console.log(currentAddress, "current")

                    if(currentAddress?.length > 0){
                        setTimeout(() => {
                           navigation.navigate(HOME_PAGE)
                        }, 1000)
                    }
                    return;
                }
            }
        }
        loadAddress();
    }, [])

  return (
    <Container>
        <View style={styles.section}>
            <Text>Header</Text>
        </View>
        <View style={styles.sectionCenter}>
            <Image source={require('../images/delivery_icon.png')} style={styles.icon}/>
            <View style={styles.viewUnderline}>
                <Paragraph>You Delivery Address</Paragraph>
            </View>
            <Paragraph>{displayAddress}</Paragraph>
        </View>
        <View style={styles.sectionBottom}>
            <Text>Footer</Text>
        </View>
    </Container>
  );
}

const styles = StyleSheet.create({
    sectionCenter: {
        flex: 9,
        alignItems: 'center',
        justifyContent: 'center',
    },
    section: {
        flex: 2,
        alignItems: 'center',
    },
    sectionBottom: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'flex-end',
    },
    icon: {
        width: 120,
        height: 120
    },
    viewUnderline: {
        width: '70%',
        borderBottomWidth: 1,
        borderBottomColor: 'red',
        alignItems: 'center',
        marginBottom: 10,
        padding: 5
    }
})

const mapToStateProps = (state: ApplicationState) => ({
    userReducer: state.userReducer
})

export const LandingPage = connect(mapToStateProps, { updateLocation })(_LandingPage)


