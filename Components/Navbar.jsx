import { StyleSheet, Text, View, Image, Platform, StatusBar } from 'react-native';

const Navbar = () => {
    return (
        <View>
            <View style={styles.Top} />
            <View style={styles.Navbar}>
                <Image 
                    source={{uri : "https://picsum.photos/20/30" ,width : 20, height : 20}}
                    style={{paddingLeft : 10 }}
                />
                <Text>123</Text>
            </View>
        </View>
    );
}

export default Navbar;

const styles = StyleSheet.create({
    Top: {
      flex: 0,
      paddingTop: Platform.OS==='android' ? StatusBar.currentHeight : 0,
    },
    Navbar: {
      flex: 0,
      backgroundColor: 'gray',
      alignItems: 'center',
      flexDirection: 'row',
      width: '100%',
      height: 40,
    },
  });