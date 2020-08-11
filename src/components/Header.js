import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

//Stateless component
const Header = (props) => (
    <View style={styles.header}>
        <Text style={styles.text}>{props.label}</Text>
    </View>
);

const styles = StyleSheet.create({
    header: {
        marginTop: 1,
        backgroundColor: '#DAA520',
        alignItems: 'center'
    },
    text: {
        fontSize: 50,
        color: '#ffffff'
    }
});

export default Header;