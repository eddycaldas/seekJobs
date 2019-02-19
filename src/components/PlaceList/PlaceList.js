import React from 'react';

import {StyleSheet, View, FlatList} from 'react-native';
import ListItem from '../ListItem/ListItem';

const placeList = props => {  
      return (
          <FlatList 
            style={styles.listContainer} 
            data={props.names}
            renderItem={(info) => (
                <ListItem 
                    onItemPressed={() => props.onItemDeleted(info.item.key)}
                    workerName={info.item.value}/>
            )}
            />
          
      )
}

const styles = StyleSheet.create({
    listContainer: {
        width: '100%'
        }
})

export default placeList;