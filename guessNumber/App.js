
import { StyleSheet, View } from 'react-native';
import Start from './screens/Start';
import GradientBackground from './components/GradientBackground';

export default function App() {
  
  return (
    <GradientBackground style={styles.container}>   
      <Start />     
    </GradientBackground>
  );
}
  
const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor:"#EDE6F7",
    alignItems: 'center',
    justifyContent: "center",
  },
});
