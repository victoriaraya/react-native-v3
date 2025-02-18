import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={{ borderBottomWidth: 5, borderBottomColor: 'blue', paddingHorizontal: 10, paddingVertical: 16 }}>
      <Text style={{ fontSize: 18, fontWeight: '300' }}>Coffee </Text> 
      <StatusBar style="auto" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
  },
});
