import { StyleSheet, Text, View } from 'react-native';

const Navbar = () => {
    return (
        <View style={styles.Navbar}>
            <Text>123</Text>
        </View>
    );
}

export default Navbar;

const styles = StyleSheet.create({
    Navbar: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });