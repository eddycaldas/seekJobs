import React, {Component} from 'react';

import {StyleSheet, Button, TextInput,View} from 'react-native';

class PlaceInput extends Component {
    state = {
        workerName: ""
      }
    
    workerNameChangedHandler = (val) => {
        this.setState({
          workerName: val
      })
    }

    nameSubmitHandler = () => {
        if(this.state.workerName.trim() === "") {
          return;
        }
        this.props.onWorkerAdded(this.state.workerName)
      }   

    render() {
        return(
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
                    style={styles.placeButton}
                    onPress={this.nameSubmitHandler}
                    />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    inputContainer: {
        //flex: 1,
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center'
      },
      placeInput: {
        width: '70%'
      },
      placeButton: {
        width: '30%'
      }
})

export default PlaceInput;