import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={{ borderBottomWidth: 3, borderBottomColor: 'pink', paddingHorizontal: 8, paddingVertical: 16 }}>
      <Text style={{ fontSize: 18, fontWeight: '200' }}>Coffee</Text> 
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
