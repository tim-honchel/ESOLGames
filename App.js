import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    // <View style={styles.container}>
    //   <Text>Share ESOL classroom games!</Text>
    //   <StatusBar style="auto" />
    // </View>
    <HomeScreen></HomeScreen>
  );
}

const HomeScreen = () => {
  return (
    <SafeAreaView style = {styles.container}>
      <Text>Share ESOL classroom games!</Text>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
