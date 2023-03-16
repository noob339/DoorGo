import {
  StyleSheet,
  View,
  Button,
} from 'react-native';

import AppIntro from '../components/AppIntro';
import doAlert from '../utils/doAlert';

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <AppIntro />
      <View style={styles.separator} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    // backgroundColor: '#fff',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
    backgroundColor: '#DCDCDC',
  },
});
