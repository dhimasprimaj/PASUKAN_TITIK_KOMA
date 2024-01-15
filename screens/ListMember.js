import * as React from "react";
import { StyleSheet, View, Text, Pressable } from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import { Border, Color, FontSize, FontFamily } from "../GlobalStyles";

const ListMember = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.listMember}>
      <View style={[styles.phcheckFill, styles.phcheckFillLayout]}>
        <View style={styles.rectangleParent}>
          <View style={[styles.groupChild, styles.groupLayout]} />
          <Image
            style={[styles.check1Icon, styles.iconLayout]}
            contentFit="cover"
            source={require("../assets/check-1.png")}
          />
        </View>
      </View>
      <View style={styles.phsquareLightParent}>
        <Image
          style={[styles.phsquareLightIcon, styles.phcheckFillLayout]}
          contentFit="cover"
          source={require("../assets/phsquarelight.png")}
        />
        <View
          style={[styles.fluentMdl2acceptMedium, styles.rectangleGroupPosition]}
        />
        <View style={[styles.rectangleGroup, styles.rectangleGroupPosition]}>
          <View style={[styles.groupItem, styles.groupLayout]} />
          <Pressable
            style={[styles.eghi, styles.primajayaLayout]}
            onPress={() => navigation.navigate("Pemasukan")}
          >
            <View style={styles.eghiChild} />
            <Text style={[styles.eghi1, styles.eghi1Layout]}>Eghi</Text>
            <Text style={styles.text}>0812-3456-1234</Text>
          </Pressable>
          <Pressable
            style={[styles.primajaya, styles.dhimasLayout1]}
            onPress={() => navigation.navigate("Pemasukan")}
          >
            <View style={[styles.primajayaChild, styles.childShadowBox]} />
            <Text style={[styles.primajaya1, styles.dhimas1FlexBox]}>
              Primajaya
            </Text>
            <Text style={styles.textTypo}>0812-3456-0987</Text>
          </Pressable>
          <Pressable
            style={[styles.dhimas, styles.dhimasLayout]}
            onPress={() => navigation.navigate("Pemasukan")}
          >
            <View style={[styles.dhimasChild, styles.dhimasLayout]} />
            <Text style={[styles.dhimas1, styles.dhimas1FlexBox]}>Dhimas</Text>
            <Text style={[styles.text2, styles.textTypo]}>0812-3456-7890</Text>
          </Pressable>
        </View>
      </View>
      <View style={styles.search}>
        <View style={styles.ictwotoneSearch} />
        <View style={styles.searchChild} />
        <Image
          style={[styles.vectorIcon, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/vector.png")}
        />
        <View style={styles.searchItem} />
        <Text style={[styles.cariMember, styles.memberTypo]}>Cari member</Text>
        <Text style={[styles.listMember1, styles.memberTypo]}>List Member</Text>
      </View>
      <Pressable
        style={styles.headerPosition}
        onPress={() => navigation.navigate("GymFinance")}
      >
        <View style={[styles.headerChild, styles.headerPosition]} />
        <Text style={[styles.fitcashier, styles.pemasukanTypo]}>
          FitCashier
        </Text>
      </Pressable>
      <Text style={[styles.pemasukan, styles.pemasukanTypo]}>Pemasukan</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  phcheckFillLayout: {
    height: 256,
    width: 256,
    position: "absolute",
    overflow: "hidden",
  },
  groupLayout: {
    borderRadius: Border.br_mini,
    position: "absolute",
  },
  iconLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  rectangleGroupPosition: {
    top: 0,
    position: "absolute",
  },
  primajayaLayout: {
    height: 47,
    position: "absolute",
  },
  eghi1Layout: {
    height: 19,
    width: 86,
    color: Color.colorBlack,
    lineHeight: 21,
    fontSize: FontSize.size_base,
  },
  dhimasLayout1: {
    width: 279,
    left: 17,
  },
  childShadowBox: {
    left: 3,
    width: 276,
    backgroundColor: Color.colorWhite,
    borderRadius: Border.br_3xs,
    top: 0,
    shadowOpacity: 1,
    elevation: 4,
    shadowRadius: 4,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
  },
  dhimas1FlexBox: {
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
  },
  dhimasLayout: {
    height: 45,
    position: "absolute",
  },
  textTypo: {
    top: 23,
    width: 155,
    justifyContent: "center",
    textAlign: "center",
    lineHeight: 20,
    fontSize: FontSize.size_mini,
    alignItems: "center",
    display: "flex",
    color: Color.colorBlack,
    fontFamily: FontFamily.interBlack,
    fontWeight: "900",
    left: 0,
    position: "absolute",
  },
  memberTypo: {
    textAlign: "center",
    fontFamily: FontFamily.interBlack,
    fontWeight: "900",
    position: "absolute",
  },
  headerPosition: {
    height: 76,
    width: 360,
    top: 0,
    left: 0,
    position: "absolute",
  },
  pemasukanTypo: {
    textShadowRadius: 4,
    textShadowOffset: {
      width: 0,
      height: 4,
    },
    textShadowColor: "rgba(0, 0, 0, 0.25)",
    textAlign: "center",
    fontFamily: FontFamily.interBlack,
    fontWeight: "900",
    position: "absolute",
  },
  groupChild: {
    height: "100%",
    top: "0%",
    right: "0%",
    bottom: "0%",
    left: "0%",
    backgroundColor: Color.colorGainsboro,
    width: "100%",
  },
  check1Icon: {
    height: "82.14%",
    width: "84.38%",
    top: "7.14%",
    right: "9.38%",
    bottom: "10.71%",
    left: "6.25%",
  },
  rectangleParent: {
    height: "10.94%",
    width: "12.5%",
    top: "73.44%",
    right: "3.13%",
    bottom: "15.63%",
    left: "84.38%",
    position: "absolute",
  },
  phcheckFill: {
    top: 272,
    left: 52,
  },
  phsquareLightIcon: {
    top: 512,
    left: 0,
  },
  fluentMdl2acceptMedium: {
    left: 320,
    width: 2048,
    height: 2048,
    overflow: "hidden",
  },
  groupItem: {
    top: -3,
    left: -3,
    backgroundColor: Color.colorGold,
    borderStyle: "solid",
    borderColor: Color.colorWhite,
    borderWidth: 3,
    width: 326,
    height: 506,
  },
  eghiChild: {
    left: 6,
    width: 276,
    backgroundColor: Color.colorWhite,
    borderRadius: Border.br_3xs,
    height: 47,
    top: 0,
    shadowOpacity: 1,
    elevation: 4,
    shadowRadius: 4,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
    position: "absolute",
  },
  eghi1: {
    left: 14,
    textAlign: "left",
    alignItems: "center",
    display: "flex",
    fontFamily: FontFamily.interBlack,
    fontWeight: "900",
    height: 19,
    width: 86,
    top: 5,
    position: "absolute",
  },
  text: {
    top: 24,
    height: 17,
    width: 155,
    justifyContent: "center",
    textAlign: "center",
    lineHeight: 20,
    fontSize: FontSize.size_mini,
    alignItems: "center",
    display: "flex",
    color: Color.colorBlack,
    fontFamily: FontFamily.interBlack,
    fontWeight: "900",
    left: 0,
    position: "absolute",
  },
  eghi: {
    top: 286,
    left: 15,
    width: 282,
  },
  primajayaChild: {
    height: 47,
    position: "absolute",
  },
  primajaya1: {
    top: 7,
    left: 7,
    textAlign: "center",
    fontFamily: FontFamily.interBlack,
    fontWeight: "900",
    position: "absolute",
    height: 19,
    width: 86,
    color: Color.colorBlack,
    lineHeight: 21,
    fontSize: FontSize.size_base,
  },
  primajaya: {
    top: 223,
    height: 47,
    position: "absolute",
  },
  dhimasChild: {
    left: 3,
    width: 276,
    backgroundColor: Color.colorWhite,
    borderRadius: Border.br_3xs,
    top: 0,
    shadowOpacity: 1,
    elevation: 4,
    shadowRadius: 4,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
  },
  dhimas1: {
    left: 2,
    width: 76,
    height: 18,
    textAlign: "center",
    fontFamily: FontFamily.interBlack,
    fontWeight: "900",
    position: "absolute",
    color: Color.colorBlack,
    lineHeight: 21,
    fontSize: FontSize.size_base,
    top: 5,
    justifyContent: "center",
  },
  text2: {
    height: 16,
  },
  dhimas: {
    top: 164,
    width: 279,
    left: 17,
  },
  rectangleGroup: {
    width: 320,
    height: 500,
    left: 0,
  },
  phsquareLightParent: {
    top: 190,
    left: 20,
    width: 2368,
    height: 2048,
    shadowOpacity: 1,
    elevation: 4,
    shadowRadius: 4,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
    position: "absolute",
  },
  ictwotoneSearch: {
    height: "57.45%",
    width: "19.55%",
    top: "1.06%",
    right: "3.02%",
    bottom: "41.49%",
    left: "77.42%",
    position: "absolute",
    overflow: "hidden",
  },
  searchChild: {
    width: 278,
    height: 55,
    backgroundColor: Color.colorWhite,
    borderRadius: Border.br_3xs,
    top: 0,
    left: 0,
    shadowOpacity: 1,
    elevation: 4,
    shadowRadius: 4,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
    position: "absolute",
  },
  vectorIcon: {
    height: "31.91%",
    width: "10.8%",
    top: "15.96%",
    right: "7.45%",
    bottom: "52.13%",
    left: "81.74%",
  },
  searchItem: {
    left: 10,
    width: 213,
    height: 30,
    backgroundColor: Color.colorDarkgray,
    top: 15,
    borderRadius: Border.br_3xs,
    position: "absolute",
  },
  cariMember: {
    top: "22.34%",
    left: "7.2%",
    color: Color.colorDimgray,
    lineHeight: 20,
    fontSize: FontSize.size_mini,
    textAlign: "center",
  },
  listMember1: {
    top: "79.79%",
    left: "0.72%",
    lineHeight: 20,
    fontSize: FontSize.size_mini,
    textAlign: "center",
    color: Color.colorBlack,
  },
  search: {
    height: "11.75%",
    width: "77.14%",
    top: "31.38%",
    right: "11.75%",
    bottom: "56.88%",
    left: "11.11%",
    position: "absolute",
  },
  headerChild: {
    backgroundColor: Color.colorDarkgray,
  },
  fitcashier: {
    left: 89,
    fontSize: FontSize.size_13xl,
    lineHeight: 42,
    color: Color.colorGold,
    width: 182,
    height: 46,
    top: 15,
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
  },
  pemasukan: {
    top: 199,
    left: 109,
    fontSize: FontSize.size_5xl,
    lineHeight: 31,
    color: Color.colorBlack,
  },
  listMember: {
    backgroundColor: Color.colorBlack,
    flex: 1,
    height: 800,
    overflow: "hidden",
    width: "100%",
  },
});

export default ListMember;
