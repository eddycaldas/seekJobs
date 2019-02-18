
import React, {Component} from 'react';
import {StyleSheet, Button, Text, TextInput, View} from 'react-native';

import ListItem from './src/components/ListItem/ListItem';

export default class App extends Component {
  state = {
    workerName: "",
    names: []
  }

  workerNameChangedHandler = (val) => {
    this.setState({
      workerName: val
  })
}

  NameSubmitHandler = () => {
    if(this.state.workerName.trim() === "") {
      return;
    }
    this.setState(prevState => {
      return {
        names: prevState.names.concat(prevState.workerName)
      }
    })
  }  

  render() {
    const nameOutput = this.state.names.map((name, i) => (
      <ListItem key={i} 
        onItemPressed={() => alert('item ID ' + i)}
        workerName={name}/>
    ))

    return (
      <View style={styles.container}>
        <View style={styles.inputContainer}>
          <TextInput 
            style={{width: 150}}
            placeholder="an Awesome Name"
            value={this.state.workerName}
            onChangeText={this.workerNameChangedHandler}  
            style={styles.placeInput}
          />
          <Button 
            title="Add"
            style={styles.placeInput}
            onPress={this.NameSubmitHandler}
            />
        </View>
        <View style={styles.listContainer}>
          {nameOutput}
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 46,
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  inputContainer: {
    //flex: 1,
    width: '100%',
    flexDirection: 'column',
    justifyContent: 'space-around',
    alignItems: 'center'
  },
  placeInput: {
    width: '70%'
  },
  placeButton: {
    width: '30%'
  },
  listContainer: {
    width: '100%'
    }
});
