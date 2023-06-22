import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,Image } from 'react-native';


export default function App() {
  return (
    <View style={styles.container}>
      <Text>Bé mai chó đin</Text>
      <StatusBar style="auto" />
      <Image source={require('../apprn/assets/test.jpg')}/>
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
