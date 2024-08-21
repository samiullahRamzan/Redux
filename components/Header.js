import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function Header() {
  return (
    <View style={{backgroundColor:'grey',marginTop:40}}>
      <Text style={{fontSize:30,textAlign:'right'}}>0</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
});
