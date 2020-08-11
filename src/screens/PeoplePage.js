/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Text, View, ActivityIndicator, StyleSheet} from 'react-native';
import Header from '../components/Header';
import PeopleList from '../components/PeopleList';
import axios from 'axios';


type Props = {};
export default class PeoplePage extends Component<Props> {

  constructor(props) {
    super(props);
    this.state = {
      people: [],
      loading: false,
      error: false
    };
  }

  componentDidMount() {
    this.setState({loading: true});
    axios
    .get('https://randomuser.me/api/?nat=br&results=100')
    .then(response => {
      const {results} = response.data;
      this.setState({
        people: results,
        loading: false
      })
    }).catch(error => {
        this.setState({
          error: true,
          loading: false
        })
      });
  }

  renderList() {
    const textElements = this.state.people.map(person => {
      const {first} = person.name;
      return <Text key={first}>{first}</Text>
    });
    return textElements;
  }

  render() {
    return (
      <View style={styles.container}>
        {
          this.state.loading ?
          <ActivityIndicator size="large" color="#CECECE" />
          :
          this.state.error ?
          <Text style={styles.error}>ERRO AO CARREGAR LISTA DE CONTATOS!</Text>
          :
          <PeopleList 
          people={this.state.people}
          onPressItem={(parameters) => this.props.navigation.navigate('PersonDetail', parameters)}
          /> 
        }
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  error: {
    fontSize: 20,
    color: 'red',
    alignSelf: 'center'
  }
})
