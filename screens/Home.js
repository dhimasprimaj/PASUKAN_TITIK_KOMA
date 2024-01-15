import * as React from "react";
import { StyleSheet, View, Text, Pressable } from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import { Border, FontFamily, Color, FontSize } from "../GlobalStyles";

const Home = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.home}>
      <Pressable
        style={[styles.rectangleParent, styles.rectangleShadowBox]}
        onPress={() => navigation.navigate("GymMember")}
      >
        <View style={[styles.groupChild, styles.groupChildLayout]} />
        <Text style={[styles.gymMember, styles.gymTypo]}>Gym Member</Text>
        <Image
          style={[styles.memberIcon1, styles.groupChildLayout]}
          contentFit="cover"
          source={require("../assets/member-icon-1.png")}
        />
      </Pressable>
      <Pressable
        style={[styles.rectangleGroup, styles.rectangleShadowBox]}
        onPress={() => navigation.navigate("GymFinance")}
      >
        <View style={[styles.groupChild, styles.groupChildLayout]} />
        <Text style={[styles.gymFinance, styles.gymTypo]}>Gym Finance</Text>
        <Image
          style={styles.gymFinance1}
          contentFit="cover"
          source={require("../assets/gym-finance-1.png")}
        />
      </Pressable>
      <View style={styles.headerPosition}>
        <View style={[styles.headerChild, styles.headerPosition]} />
        <Text style={[styles.fitcashier, styles.gymTypo]}>FitCashier</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  rectangleShadowBox: {
    height: 214,
    width: 320,
    shadowOpacity: 1,
    elevation: 4,
    shadowRadius: 4,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
    left: 20,
    position: "absolute",
  },
  groupChildLayout: {
    borderRadius: Border.br_mini,
    position: "absolute",
  },
  gymTypo: {
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
  headerPosition: {
    height: 76,
    width: 360,
    left: 0,
    top: 0,
    position: "absolute",
  },
  groupChild: {
    top: -5,
    left: -5,
    backgroundColor: Color.colorGold,
    borderStyle: "solid",
    borderColor: Color.colorWhite,
    borderWidth: 5,
    width: 330,
    height: 224,
  },
  gymMember: {
    height: 53,
    width: 294,
    color: Color.colorBlack,
    lineHeight: 52,
    fontSize: FontSize.size_21xl,
    left: 13,
    top: 135,
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
  },
  memberIcon1: {
    top: 31,
    left: 87,
    width: 146,
    height: 104,
  },
  rectangleParent: {
    top: 178,
  },
  gymFinance: {
    height: 53,
    width: 294,
    color: Color.colorBlack,
    lineHeight: 52,
    fontSize: FontSize.size_21xl,
    left: 13,
    top: 135,
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
  },
  gymFinance1: {
    top: 23,
    left: 108,
    width: 103,
    height: 112,
    position: "absolute",
  },
  rectangleGroup: {
    top: 470,
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
  },
  home: {
    backgroundColor: Color.colorBlack,
    flex: 1,
    width: "100%",
    height: 800,
    overflow: "hidden",
  },
});

export default Home;
