import React, { useState } from "react";
import { StyleSheet, View, TextInput, Pressable, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Color, FontFamily, FontSize, Border } from "../GlobalStyles";
import { saveRegistrationData } from "./Storage"; // Import fungsi penyimpanan lokal

const Registration = () => {
  const navigation = useNavigation();
  const [name, setNama] = useState("");
  const [noWa, setNoWa] = useState("");
  const [bayar, setBayar] = useState("");

  const handleSubmit = async () => {
    // Save registration data to local storage
    await saveRegistrationData({ name, noWa, bayar });

    // Add your logic for other actions if needed
    console.log("Registration Data Submitted:", { name, noWa, bayar });
  };

  return (
    <View style={styles.registration}>
      <View style={[styles.groupParent, styles.parentLayout]}>
        <View style={[styles.rectangleParent, styles.parentLayout]}>
          <View style={[styles.groupChild, styles.groupChildBorder]} />
          <Text style={[styles.registration1, styles.fitcashierText]}>
            Registration
          </Text>
        </View>
        <View style={styles.namaParent}>
          <Text style={[styles.nama, styles.namaFlexBox]}>Nama :</Text>
          {/* Ganti View dengan TextInput */}
          <TextInput
            style={[styles.groupItem, styles.groupLayout]}
            value={name}
            onChangeText={text => setNama(text)}
          />
        </View>
        <View style={[styles.noWaParent, styles.noWaParentLayout]}>
          <Text style={[styles.noWa, styles.noWaTypo]}>No Wa:</Text>
          {/* Ganti View dengan TextInput */}
          <TextInput
            style={[styles.groupInner, styles.groupPosition]}
            value={noWa}
            onChangeText={text => setNoWa(text)}
          />
        </View>
        <View style={[styles.groupContainer, styles.noWaParentLayout]}>
          <View style={styles.groupPosition}>
            <View style={[styles.rectangleView, styles.groupLayout]} />
            <View style={[styles.groupChild1, styles.groupLayout]} />
            <Text style={[styles.rp, styles.rpTypo]}>Rp.</Text>
          </View>
          <Text style={[styles.noWa, styles.noWaTypo]}>Bayar:</Text>
          {/* Ganti View dengan TextInput */}
          <TextInput
            style={[styles.groupInner, styles.groupPosition]}
            value={bayar}
            onChangeText={text => setBayar(text)}
          />
        </View>
        <View style={styles.rectangleContainer}>
          <View style={[styles.groupChild2, styles.groupChildBorder]} />
          {/* Tambahkan komponen Button */}
          <Pressable style={styles.submitButton} onPress={handleSubmit}>
            <Text style={[styles.submit, styles.rpTypo]}>Submit</Text>
          </Pressable>
        </View>
      </View>
      <Pressable
        style={styles.headerPosition}
        onPress={() => navigation.navigate('GymMember')}
      >
        <View style={[styles.headerChild, styles.headerPosition]} />
        <Text style={[styles.fitcashier, styles.namaFlexBox]}>FitCashier</Text>
      </Pressable>
    </View>
  );
};

export default Registration;

const styles = StyleSheet.create({
  parentLayout: {
    height: 500,
    position: "absolute",
  },
  groupChildBorder: {
    borderWidth: 3,
    borderColor: Color.colorWhite,
    borderStyle: "solid",
    left: -3,
    top: -3,
    position: "absolute",
  },
  fitcashierText: {
    textShadowRadius: 4,
    textShadowOffset: {
      width: 0,
      height: 4,
    },
    textShadowColor: "rgba(0, 0, 0, 0.25)",
  },
  namaFlexBox: {
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
    textAlign: "center",
    fontFamily: FontFamily.interBlack,
    fontWeight: "900",
    position: "absolute",
  },
  groupLayout: {
    height: 30,
    position: "absolute",
  },
  noWaParentLayout: {
    height: 77,
    width: 299,
    left: 9,
    position: "absolute",
  },
  noWaTypo: {
    textAlign: "center",
    fontFamily: FontFamily.interBlack,
    fontWeight: "900",
    color: Color.colorBlack,
    lineHeight: 31,
    fontSize: FontSize.size_5xl,
    position: "absolute",
  },
  groupPosition: {
    left: 7,
    top: 47,
    height: 30,
    width: 292,
    position: "absolute",
  },
  rpTypo: {
    color: Color.colorWhite,
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
    borderRadius: Border.br_mini,
    backgroundColor: Color.colorGold,
    width: 326,
    height: 506,
  },
  registration1: {
    left: 85,
    textAlign: "center",
    fontFamily: FontFamily.interBlack,
    fontWeight: "900",
    color: Color.colorBlack,
    lineHeight: 31,
    fontSize: FontSize.size_5xl,
    position: "absolute",
    top: 10,
  },
  rectangleParent: {
    left: 2,
    width: 320,
    top: 0,
  },
  nama: {
    width: 97,
    left: 0,
    color: Color.colorBlack,
    lineHeight: 31,
    fontSize: FontSize.size_5xl,
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
    top: 0,
  },
  groupItem: {
    top: 41,
    left: 16,
    width: 292,
    height: 30,
    backgroundColor: Color.colorWhite,
    borderRadius: Border.br_6xs,
  },
  namaParent: {
    top: 82,
    width: 308,
    height: 71,
    left: 0,
    position: "absolute",
  },
  noWa: {
    left: 0,
    top: 0,
  },
  groupInner: {
    backgroundColor: Color.colorWhite,
    borderRadius: Border.br_6xs,
    left: 7,
    top: 47,
  },
  noWaParent: {
    top: 194,
  },
  rectangleView: {
    width: 292,
    height: 30,
    backgroundColor: Color.colorWhite,
    borderRadius: Border.br_6xs,
    left: 0,
    top: 0,
  },
  groupChild1: {
    borderTopLeftRadius: Border.br_6xs,
    borderBottomLeftRadius: Border.br_6xs,
    width: 28,
    left: 0,
    top: 0,
    backgroundColor: Color.colorBlack,
  },
  rp: {
    top: 6,
    left: 1,
    fontSize: FontSize.size_mini,
    lineHeight: 20,
  },
  groupContainer: {
    top: 309,
  },
  groupChild2: {
    borderRadius: Border.br_8xs,
    backgroundColor: Color.colorMediumseagreen,
    width: 88,
    height: 48,
    shadowOpacity: 1,
    elevation: 4,
    shadowRadius: 4,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
  },
  submit: {
    left: 12,
    fontSize: FontSize.size_base,
    lineHeight: 21,
    top: 10,
  },
  rectangleContainer: {
    top: 424,
    left: 121,
    width: 82,
    height: 42,
    position: "absolute",
  },
  groupParent: {
    top: 190,
    left: 18,
    width: 322,
    shadowOpacity: 1,
    elevation: 4,
    shadowRadius: 4,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
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
  },
  registration: {
    flex: 1,
    width: "100%",
    height: 800,
    overflow: "hidden",
    backgroundColor: Color.colorBlack,
  },
});
