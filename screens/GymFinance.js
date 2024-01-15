import * as React from "react";
import { StyleSheet, View, Text, Pressable } from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import { FontFamily, Border, Color, FontSize } from "../GlobalStyles";

const GymFinance = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.gymFinance}>
      <Pressable
        style={[styles.rectangleParent, styles.rectangleShadowBox]}
        onPress={() => navigation.navigate("Mutasi")}
      >
        <View style={styles.groupChild} />
        <Text style={[styles.mutasi, styles.mutasiTypo]}>Mutasi</Text>
        <Image
          style={styles.mutasiIcon}
          contentFit="cover"
          source={require("../assets/mutasi.png")}
        />
      </Pressable>
      <Pressable
        style={[styles.rectangleGroup, styles.rectangleShadowBox]}
        onPress={() => navigation.navigate("Pengeluaran")}
      >
        <View style={styles.groupChild} />
        <Text style={[styles.pengeluaran, styles.mutasiTypo]}>Pengeluaran</Text>
        <Image
          style={[styles.pengeluaranjpgIcon, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/pengeluaranjpg.png")}
        />
      </Pressable>
      <Pressable
        style={styles.headerPosition}
        onPress={() => navigation.navigate("Home")}
      >
        <View style={[styles.headerChild, styles.headerPosition]} />
        <Text style={[styles.fitcashier, styles.mutasiTypo]}>FitCashier</Text>
      </Pressable>
      <Pressable
        style={[styles.rectangleContainer, styles.rectangleShadowBox]}
        onPress={() => navigation.navigate("ListMember")}
      >
        <View style={styles.groupChild} />
        <Text style={[styles.pemasukan, styles.mutasiTypo]}>Pemasukan</Text>
        <Image
          style={[styles.pemasukanjpgIcon, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/pemasukanjpg.png")}
        />
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  rectangleShadowBox: {
    height: 153,
    width: 253,
    shadowOpacity: 1,
    elevation: 4,
    shadowRadius: 4,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
    left: 53,
    position: "absolute",
  },
  mutasiTypo: {
    textShadowRadius: 4,
    textShadowOffset: {
      width: 0,
      height: 4,
    },
    textShadowColor: "rgba(0, 0, 0, 0.25)",
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
    textAlign: "center",
    fontFamily: FontFamily.interBlack,
    fontWeight: "900",
    position: "absolute",
  },
  iconLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  headerPosition: {
    height: 76,
    width: 360,
    left: 0,
    top: 0,
    position: "absolute",
  },
  groupChild: {
    top: -3,
    left: -3,
    borderRadius: Border.br_mini,
    backgroundColor: Color.colorGold,
    borderStyle: "solid",
    borderColor: Color.colorWhite,
    borderWidth: 3,
    width: 259,
    height: 159,
    position: "absolute",
  },
  mutasi: {
    height: 38,
    width: 232,
    color: Color.colorBlack,
    lineHeight: 31,
    fontSize: FontSize.size_5xl,
    left: 10,
    top: 97,
    textShadowOffset: {
      width: 0,
      height: 4,
    },
    textShadowColor: "rgba(0, 0, 0, 0.25)",
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
    textAlign: "center",
    fontFamily: FontFamily.interBlack,
    fontWeight: "900",
  },
  mutasiIcon: {
    top: 14,
    left: 85,
    width: 83,
    height: 83,
    position: "absolute",
  },
  rectangleParent: {
    top: 556,
  },
  pengeluaran: {
    height: 38,
    width: 232,
    color: Color.colorBlack,
    lineHeight: 31,
    fontSize: FontSize.size_5xl,
    left: 10,
    top: 97,
    textShadowOffset: {
      width: 0,
      height: 4,
    },
    textShadowColor: "rgba(0, 0, 0, 0.25)",
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
    textAlign: "center",
    fontFamily: FontFamily.interBlack,
    fontWeight: "900",
  },
  pengeluaranjpgIcon: {
    height: "48.92%",
    width: "36.76%",
    top: "9.78%",
    right: "31.62%",
    bottom: "41.29%",
    left: "31.62%",
  },
  rectangleGroup: {
    top: 362,
  },
  headerChild: {
    backgroundColor: Color.colorDarkgray,
  },
  fitcashier: {
    top: 15,
    left: 89,
    fontSize: FontSize.size_13xl,
    lineHeight: 42,
    color: Color.colorGold,
    width: 182,
    height: 46,
    textShadowOffset: {
      width: 0,
      height: 4,
    },
    textShadowColor: "rgba(0, 0, 0, 0.25)",
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
    textAlign: "center",
    fontFamily: FontFamily.interBlack,
    fontWeight: "900",
  },
  pemasukan: {
    height: 38,
    width: 232,
    color: Color.colorBlack,
    lineHeight: 31,
    fontSize: FontSize.size_5xl,
    left: 10,
    top: 97,
    textShadowOffset: {
      width: 0,
      height: 4,
    },
    textShadowColor: "rgba(0, 0, 0, 0.25)",
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
    textAlign: "center",
    fontFamily: FontFamily.interBlack,
    fontWeight: "900",
  },
  pemasukanjpgIcon: {
    height: "38.49%",
    width: "30.04%",
    top: "18.92%",
    right: "34.78%",
    bottom: "42.6%",
    left: "35.18%",
  },
  rectangleContainer: {
    top: 168,
  },
  gymFinance: {
    backgroundColor: Color.colorBlack,
    flex: 1,
    width: "100%",
    height: 800,
    overflow: "hidden",
  },
});

export default GymFinance;
