import * as React from "react";
import { StyleSheet, View, Text, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { FontFamily, Border, Color, FontSize } from "../GlobalStyles";

const UpdateMember = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.updateMember}>
      <View style={styles.groupParent}>
        <View style={styles.rectangleParent}>
          <View style={styles.groupChild} />
          <Text style={[styles.update, styles.updateText]}>Update</Text>
        </View>
        <View style={[styles.noWaBaruParent, styles.baruParentLayout]}>
          <Text style={[styles.noWaBaru, styles.noWaBaruFlexBox]}>
            No Wa baru :
          </Text>
          <View style={styles.groupItem} />
        </View>
        <View style={[styles.namaBaruParent, styles.baruParentLayout]}>
          <Text style={[styles.noWaBaru, styles.noWaBaruFlexBox]}>
            Nama baru :
          </Text>
          <View style={styles.groupItem} />
        </View>
        <View style={[styles.noWaLamaParent, styles.baruParentLayout]}>
          <Text style={[styles.noWaBaru, styles.noWaBaruFlexBox]}>
            No Wa lama :
          </Text>
          <View style={styles.groupItem} />
        </View>
        <View style={[styles.namaLamaParent, styles.baruParentLayout]}>
          <Text style={[styles.noWaBaru, styles.noWaBaruFlexBox]}>
            Nama lama :
          </Text>
          <View style={styles.groupItem} />
        </View>
        <View style={[styles.rectangleGroup, styles.rectangleLayout]}>
          <View style={[styles.groupChild2, styles.groupChildLayout]} />
          <Text style={[styles.reset, styles.resetTypo]}>RESET</Text>
        </View>
        <View style={[styles.rectangleContainer, styles.rectangleLayout]}>
          <View style={[styles.groupChild3, styles.groupChildLayout]} />
          <Text style={[styles.update1, styles.resetTypo]}>UPDATE</Text>
        </View>
      </View>
      <Pressable
        style={styles.headerPosition}
        onPress={() => navigation.navigate("UpdateMemberList")}
      >
        <View style={[styles.headerChild, styles.headerPosition]} />
        <Text style={[styles.fitcashier, styles.noWaBaruFlexBox]}>
          FitCashier
        </Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  updateText: {
    textShadowRadius: 4,
    textShadowOffset: {
      width: 0,
      height: 4,
    },
    textShadowColor: "rgba(0, 0, 0, 0.25)",
  },
  baruParentLayout: {
    height: 61,
    width: 308,
    left: 0,
    position: "absolute",
  },
  noWaBaruFlexBox: {
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
    textAlign: "center",
    fontFamily: FontFamily.interBlack,
    fontWeight: "900",
    position: "absolute",
  },
  rectangleLayout: {
    height: 42,
    width: 82,
    top: 434,
    position: "absolute",
  },
  groupChildLayout: {
    height: 48,
    width: 88,
    borderRadius: Border.br_8xs,
    borderWidth: 3,
    borderColor: Color.colorWhite,
    borderStyle: "solid",
    left: -3,
    top: -3,
    position: "absolute",
  },
  resetTypo: {
    color: Color.colorWhite,
    lineHeight: 21,
    fontSize: FontSize.size_base,
    textAlign: "center",
    fontFamily: FontFamily.interBlack,
    fontWeight: "900",
    top: 10,
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
    borderWidth: 3,
    borderColor: Color.colorWhite,
    borderStyle: "solid",
    left: -3,
    top: -3,
    position: "absolute",
  },
  update: {
    left: 116,
    textAlign: "center",
    color: Color.colorBlack,
    fontFamily: FontFamily.interBlack,
    fontWeight: "900",
    lineHeight: 31,
    fontSize: FontSize.size_5xl,
    top: 10,
    textShadowRadius: 4,
    textShadowOffset: {
      width: 0,
      height: 4,
    },
    textShadowColor: "rgba(0, 0, 0, 0.25)",
    position: "absolute",
  },
  rectangleParent: {
    left: 2,
    width: 320,
    top: 0,
    height: 500,
    position: "absolute",
  },
  noWaBaru: {
    width: 183,
    left: 0,
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
    color: Color.colorBlack,
    lineHeight: 31,
    fontSize: FontSize.size_5xl,
    top: 0,
  },
  groupItem: {
    top: 31,
    left: 16,
    borderRadius: Border.br_6xs,
    backgroundColor: Color.colorWhite,
    width: 292,
    height: 30,
    position: "absolute",
  },
  noWaBaruParent: {
    top: 260,
  },
  namaBaruParent: {
    top: 198,
  },
  noWaLamaParent: {
    top: 132,
  },
  namaLamaParent: {
    top: 66,
  },
  groupChild2: {
    backgroundColor: "#5551ff",
    shadowOpacity: 1,
    elevation: 4,
    shadowRadius: 4,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
  },
  reset: {
    left: 15,
  },
  rectangleGroup: {
    left: 226,
  },
  groupChild3: {
    backgroundColor: Color.colorMediumseagreen,
  },
  update1: {
    left: 8,
  },
  rectangleContainer: {
    left: 27,
    shadowOpacity: 1,
    elevation: 4,
    shadowRadius: 4,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
  },
  groupParent: {
    top: 190,
    left: 18,
    width: 322,
    height: 500,
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
  updateMember: {
    backgroundColor: Color.colorBlack,
    flex: 1,
    width: "100%",
    height: 800,
    overflow: "hidden",
  },
});

export default UpdateMember;
