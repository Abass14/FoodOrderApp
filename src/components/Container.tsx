import { View, Text, SafeAreaView, StyleSheet } from 'react-native';
import React from 'react';

type Props = {
    children: React.ReactNode,
    addedPaddingTop?: number | undefined,
    addedPaddingHorizontal?: number | undefined
}
export default function Container(props: Props) {
  return (
    <SafeAreaView style={styles.container}>
      {props.children}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#eeeeee',
        paddingTop: 40,
        paddingHorizontal: 20
    }
})
