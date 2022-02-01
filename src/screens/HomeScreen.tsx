import { View, Text, StyleSheet } from 'react-native';
import React from 'react';
import Container from '../components/Container';

const HomeScreen = () => {
  return (
    <Container>
        <View style={styles.section}>
            <Text>Header</Text>
        </View>
        <View style={styles.sectionCenter}>
            <Text>Landing Page</Text>
        </View>
        <View style={styles.sectionBottom}>
            <Text>Footer</Text>
        </View>
    </Container>
  );
};

const styles = StyleSheet.create({
    sectionCenter: {
        flex: 9,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'yellow'
    },
    section: {
        flex: 2,
        alignItems: 'center',
        backgroundColor: 'red'
    },
    sectionBottom: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'flex-end',
        backgroundColor: 'cyan'
    }
})

export default HomeScreen;
