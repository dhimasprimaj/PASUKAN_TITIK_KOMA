import * as React from "react";
import { StyleSheet, View } from "react-native";

const Saldo = () => {
  return (
    <View style={styles.saldo}>
      <View style={styles.ictwotoneSearch} />
    </View>
  );
};

const styles = StyleSheet.create({
  ictwotoneSearch: {
    position: "absolute",
    top: 0,
    left: 0,
    width: 40,
    overflow: "hidden",
    height: 31,
  },
  saldo: {
    flex: 1,
    width: "100%",
    height: 31,
  },
});

export default Saldo;
