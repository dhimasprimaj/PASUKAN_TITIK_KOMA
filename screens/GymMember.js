import * as React from "react";
import { StyleSheet, View, Text, Pressable } from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import { Color, FontSize, FontFamily, Border } from "../GlobalStyles";

const GymMember = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.gymMember}>
      <Pressable
        style={styles.headerPosition}
        onPress={() => navigation.navigate("Home")}
      >
        <View style={[styles.headerChild, styles.headerPosition]} />
        <Text style={styles.fitcashier}>FitCashier</Text>
      </Pressable>
      <Pressable
        style={[styles.rectangleParent, styles.rectangleShadowBox]}
        onPress={() => navigation.navigate("UpdateMemberList")}
      >
        <View style={styles.groupChild} />
        <View style={[styles.updateMemberParent, styles.parentPosition]}>
          <Text style={[styles.updateMember, styles.updateMemberTypo]}>
            Update Member
          </Text>
          <Image
            style={[styles.updateMember1, styles.updateMember1Position]}
            contentFit="cover"
            source={require("../assets/update-member-1.png")}
          />
        </View>
      </Pressable>
      <Pressable
        style={[styles.rectangleGroup, styles.rectangleShadowBox]}
        onPress={() => navigation.navigate("Registration")}
      >
        <View style={styles.groupChild} />
        <View
          style={[
            styles.nicepngRegisterNowButtonPnParent,
            styles.parentPosition,
          ]}
        >
          <Image
            style={[
              styles.nicepngRegisterNowButtonPnIcon,
              styles.updateMember1Position,
            ]}
            contentFit="cover"
            source={require("../assets/nicepng-registernowbuttonpng-2801903-1.png")}
          />
          <Text style={[styles.registration, styles.updateMemberTypo]}>
            Registration
          </Text>
        </View>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  headerPosition: {
    height: 76,
    width: 360,
    left: 0,
    top: 0,
    position: "absolute",
  },
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
  parentPosition: {
    width: 232,
    left: 44,
    position: "absolute",
  },
  updateMemberTypo: {
    height: 38,
    color: Color.colorBlack,
    lineHeight: 31,
    fontSize: FontSize.size_5xl,
    width: 232,
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
    left: 0,
    position: "absolute",
  },
  updateMember1Position: {
    top: 0,
    position: "absolute",
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
    width: 326,
    height: 220,
    position: "absolute",
  },
  updateMember: {
    top: 75,
  },
  updateMember1: {
    left: 70,
    width: 93,
    height: 75,
  },
  updateMemberParent: {
    top: 51,
    height: 113,
  },
  rectangleParent: {
    top: 470,
  },
  nicepngRegisterNowButtonPnIcon: {
    left: 79,
    width: 76,
    height: 69,
  },
  registration: {
    top: 69,
  },
  nicepngRegisterNowButtonPnParent: {
    top: 54,
    height: 107,
  },
  rectangleGroup: {
    top: 178,
  },
  gymMember: {
    backgroundColor: Color.colorBlack,
    flex: 1,
    width: "100%",
    height: 800,
    overflow: "hidden",
  },
});

export default GymMember;
