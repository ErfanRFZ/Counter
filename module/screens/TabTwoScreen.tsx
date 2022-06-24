import { useState } from 'react';

import EditScreenInfo from '../components/EditScreenInfo';
import { StyleSheet, Text, View, Button} from 'react-native';


export default function TabTwoScreen() {
  const [count, setCount] = useState(0);
  
  return (
    <View style={styles.container}>
      <Button onPress= { () => setCount(count + 1)} title='Increase'/>
      <Button onPress= { () => setCount(count - 1)} title='Decrease'/>
      <Button onPress= { () => setCount(count - count)} title='Set to 0'/>
      <Text style={styles.counter}>Counter: {count}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  counter: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
  button:{
    margin:5,
    width: 40,
    height: 40,
  }
});
