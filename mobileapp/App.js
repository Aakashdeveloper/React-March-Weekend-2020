import React,{useState} from 'react';
import { StyleSheet, Text, View,Button } from 'react-native';

function App() {
  const [counter,setCounter] = useState(0)
  return (
    <View style={styles.container}>
      <Text>This is from visual path</Text>
      <Text>{counter}</Text>
      <Button title="clickMe" onPress={()=>{setCounter(counter+1)}} ></Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});


export default App;