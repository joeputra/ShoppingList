import React from 'react'
import { View, Text, StyleSheet, StatusBar, Platform } from 'react-native'


const Header = () => {
    return (
        
        <View style={styles.header}>
            <Text style={styles.text}>HEADER</Text>
        </View>
    );
}
const styles = StyleSheet.create({
    header: {
        height: 60,
        padding: 15,
        justifyContent: 'center',
        backgroundColor: '#00bfa5',
        paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0

    },
    text: {         
        fontSize: 22,
        textAlign: 'left',
        color: 'white'
    }
})
export default Header
