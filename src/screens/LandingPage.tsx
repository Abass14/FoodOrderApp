import { View, Text, StyleSheet } from 'react-native';
import React from 'react';
import Container from '../components/Container';

export function LandingPage() {
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
    }
})


