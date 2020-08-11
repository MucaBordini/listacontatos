import React from 'react';
import {Text, View, Image, StyleSheet} from 'react-native';
import Line from '../components/Line';

export default class PersonDetail extends React.Component {
    render() {

        const { person } = this.props.navigation.state.params;
        const picURL = person.picture.large;

        return(
            <View style={styles.container}>
                <Image source={{ uri: picURL}} 
                    style={styles.avatar}
                />
                <View style={styles.detailContainer}>
                    <Line label='Email: ' content={person.email}/>
                    <Line label='Cidade: ' content={person.location.city}/>
                    <Line label='Estado: ' content={person.location.state}/>
                    <Line label='Cel: ' content={person.cell}/>
                    <Line label='Nacionalidade: ' content={person.nat}/>
                    <Line label='Profissão: ' content={person.profissao}/>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        padding: 15,
    },
    avatar: {
        aspectRatio: 1,
        borderRadius: 15
    },
    detailContainer: {
        backgroundColor: '#DAA520',
        marginTop: 20,
        elevation: 1,
    }
});