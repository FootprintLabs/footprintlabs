import {StyleSheet, Dimensions, Platform} from 'react-native';

const styles = StyleSheet.create({
  container: {
      maxHeight: (Platform.OS === 'ios')
            ? Dimensions.get("window").height - 325
            : Dimensions.get("window").height - 305
  }
});

export default styles;