
import { StyleSheet, View } from 'react-native';
import Start from './screens/Start';

export default function App() {
  
  return (
    <View style={styles.container}>   
      <Start />     
    </View>
  );
}
  
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:"#EDE6F7",
    alignItems: 'center',
    justifyContent: "center",
  },
});
