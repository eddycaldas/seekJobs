
import React, {Component} from 'react';
import {StyleSheet, View} from 'react-native';

import PlaceInput from './src/components/PlaceInput/PlaceInput';
import PlaceList from './src/components/PlaceList/PlaceList';

export default class App extends Component {
  state = {
    names: []
  }

  workerAddedHandler = workerName => {
    this.setState(prevState => {
      return {
        names: prevState.names.concat(workerName)
      }
    })
  }

  render() {
    return (
      <View style={styles.container}>
        <PlaceInput onWorkerAdded={this.workerAddedHandler}/>
        <PlaceList names={this.state.names}/>
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
  }
});
