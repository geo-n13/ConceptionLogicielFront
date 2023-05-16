import { StyleSheet, Text, View } from 'react-native';
import Sites from "./src/screens/Sites";

export default function App() {
  return (
    <View style={styles.container}>
        <Sites></Sites>
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
