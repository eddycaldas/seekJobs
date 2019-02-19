import React from 'react';

import {StyleSheet, View} from 'react-native';
import ListItem from '../ListItem/ListItem';

const placeList = props => {
    const namesOutput = props.names.map((name, i) => (
        <ListItem 
          key={i} 
          onItemPressed={() => alert('pressed ' + i)}
          workerName={name}/>
      ))
      return (
          <View style={styles.listContainer}>{namesOutput}</View>
      )
}

const styles = StyleSheet.create({
    listContainer: {
        width: '100%'
        }
})

export default placeList;