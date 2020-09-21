import React, {Component} from 'react';
import { View } from 'react-native';

class Inicio extends React.Component {
  render(){
    return(
      <View style={styles.container}>
        <Text>Hola</Text>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default Inicio;
