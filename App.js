import { StyleSheet, View } from 'react-native';
import Login from './Components/Login.jsx'

export default function App() {
  return (
    <View style={styles.container}>
      <Login />
   </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#eee',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%'
  }, 
});
