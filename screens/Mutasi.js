import * as React from "react";
import { StyleSheet, View, Text, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Color, FontFamily, FontSize, Border } from "../GlobalStyles";

const Mutasi = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.mutasi}>
      <View style={[styles.saldo, styles.saldoLayout]}>
        <View style={[styles.saldoChild, styles.childBg]} />
        <Text style={[styles.saldo1, styles.saldo1FlexBox]}>Saldo :</Text>
        <Text style={[styles.rp1500750000, styles.saldo1FlexBox]}>
          Rp. 1.500.750.000
        </Text>
      </View>
      <View style={styles.mutasi1}>
        <View style={styles.mutasiChild} />
        <Text style={[styles.mutasi2, styles.mutasi2Typo]}>Mutasi</Text>
        <View style={[styles.november2023Parent, styles.november2023Layout]}>
          <Text style={[styles.november2023, styles.saldo1FlexBox]}>
            25 November 2023
          </Text>
          <View style={[styles.groupChild, styles.childBg]} />
          <Text
            style={[styles.budiRegistrasi, styles.textTypo]}
          >{`Budi - Registrasi `}</Text>
          <Text style={[styles.text, styles.textTypo]}>13:00</Text>
          <Text style={[styles.rp80000, styles.rp80000Typo]}>+ Rp. 80.000</Text>
        </View>
        <View style={[styles.november2023Group, styles.november2023Layout]}>
          <Text style={[styles.november2023, styles.saldo1FlexBox]}>
            27 November 2023
          </Text>
          <View style={[styles.groupChild, styles.childBg]} />
          <Text style={[styles.budiRegistrasi, styles.textTypo]}>
            Barbell - 2
          </Text>
          <Text style={[styles.text, styles.textTypo]}>17:32</Text>
          <Text style={[styles.rp1000000, styles.rp80000Typo]}>
            - Rp. 1000.000
          </Text>
        </View>
      </View>
      <Pressable
        style={styles.headerPosition}
        onPress={() => navigation.navigate("GymFinance")}
      >
        <View style={[styles.headerChild, styles.headerPosition]} />
        <Text style={[styles.fitcashier, styles.mutasi2Typo]}>FitCashier</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  saldoLayout: {
    height: 70,
    width: 320,
  },
  childBg: {
    backgroundColor: Color.colorWhite,
    position: "absolute",
  },
  saldo1FlexBox: {
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
  },
  mutasi2Typo: {
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
  november2023Layout: {
    height: 89,
    width: 307,
    left: 0,
    position: "absolute",
  },
  textTypo: {
    textAlign: "left",
    color: Color.colorBlack,
    fontFamily: FontFamily.interBlack,
    fontWeight: "900",
    position: "absolute",
  },
  rp80000Typo: {
    lineHeight: 17,
    fontSize: FontSize.size_smi,
    textAlign: "left",
    top: 48,
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
  saldoChild: {
    borderBottomRightRadius: Border.br_3xs,
    borderBottomLeftRadius: Border.br_3xs,
    left: 0,
    top: 0,
    height: 70,
    width: 320,
  },
  saldo1: {
    top: 20,
    left: 7,
    fontSize: 20,
    lineHeight: 26,
    width: 72,
    height: 29,
    textAlign: "center",
    fontFamily: FontFamily.interBlack,
    fontWeight: "900",
    alignItems: "center",
    display: "flex",
    color: Color.colorBlack,
    position: "absolute",
  },
  rp1500750000: {
    top: 23,
    left: 141,
    fontSize: FontSize.size_base,
    lineHeight: 21,
    width: 167,
    height: 25,
    textAlign: "center",
    fontFamily: FontFamily.interBlack,
    fontWeight: "900",
    alignItems: "center",
    display: "flex",
    color: Color.colorBlack,
    position: "absolute",
  },
  saldo: {
    top: 96,
    left: 20,
    position: "absolute",
  },
  mutasiChild: {
    top: -3,
    left: -2,
    borderRadius: Border.br_mini,
    backgroundColor: Color.colorGold,
    borderStyle: "solid",
    borderColor: Color.colorWhite,
    borderWidth: 3,
    width: 326,
    height: 506,
    position: "absolute",
  },
  mutasi2: {
    top: 10,
    left: 118,
    fontSize: FontSize.size_5xl,
    lineHeight: 31,
    color: Color.colorBlack,
    textShadowRadius: 4,
    textShadowOffset: {
      width: 0,
      height: 4,
    },
    textShadowColor: "rgba(0, 0, 0, 0.25)",
  },
  november2023: {
    fontSize: FontSize.size_mini,
    lineHeight: 20,
    width: 159,
    textAlign: "center",
    fontFamily: FontFamily.interBlack,
    fontWeight: "900",
    alignItems: "center",
    display: "flex",
    color: Color.colorBlack,
    position: "absolute",
    left: 0,
    top: 0,
  },
  groupChild: {
    top: 24,
    left: 15,
    borderRadius: Border.br_6xs,
    width: 292,
    height: 65,
  },
  budiRegistrasi: {
    left: 18,
    fontSize: FontSize.size_xs,
    lineHeight: 16,
    width: 133,
    top: 48,
    textAlign: "left",
    alignItems: "center",
    display: "flex",
  },
  text: {
    top: 74,
    left: 270,
    fontSize: FontSize.size_3xs,
    lineHeight: 13,
  },
  rp80000: {
    left: 202,
    color: "#42ff00",
  },
  november2023Parent: {
    top: 99,
  },
  rp1000000: {
    left: 186,
    color: "#ff0000",
  },
  november2023Group: {
    top: 222,
  },
  mutasi1: {
    top: 190,
    left: 19,
    shadowColor: "rgba(0, 0, 0, 0.25)",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowRadius: 4,
    elevation: 4,
    shadowOpacity: 1,
    width: 321,
    height: 500,
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
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
  },
  mutasi: {
    backgroundColor: Color.colorBlack,
    flex: 1,
    width: "100%",
    height: 800,
    overflow: "hidden",
  },
});

export default Mutasi;
