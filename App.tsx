import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  const x = true ? 1 : false ? 0: 1;
  return 
    <View style={styles.container}>
      <Text>I changed this a third time!</Text>
    </View
  );
}

export const test = () => {
  const x = true ? 1 : false ? 0: 1;
  return (
    <View style={styles.container}>
      <Text>I changed this a third time!</Text>
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
