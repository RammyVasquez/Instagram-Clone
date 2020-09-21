import React from 'react';
import { View } from 'react-native';

class App extends React.Component {
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

export default App;
