import { StyleSheet, Text, View, Dimensions } from 'react-native';
import Navbar from './Components/Navbar';

export default function App() {

  console.log(Dimensions.get("screen"))

  return (
    <View style={styles.container}>
      <Navbar />
      <Text>Hello World!</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: '100%',
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
});
