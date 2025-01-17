import React, { useState } from "react";
import {
  Image,
  KeyboardAvoidingView,
  TouchableOpacity,
  StyleSheet,
  View,
  Text,
  TextInput,
  ScrollView,
} from "react-native";
import { RFPercentage } from "react-native-responsive-fontsize";
import { Formik } from "formik";
import {
  FontAwesome5,
  Octicons,
  Fontisto,
  AntDesign,
  Feather,
  MaterialCommunityIcons,
  Entypo,
  Ionicons,
} from "@expo/vector-icons";
import { useNavigation, useRoute } from "@react-navigation/native";

//config
import Colors from "../config/Colors";
import { FontFamily } from "../config/font";
import icons from "../config/icons";

//Components
import Screen from "../components/Screen";
import AppButton from "../components/AppButton";
import MainHeader from "../components/MainHeader";
import TitleFfield from "../components/TitleFfield";
import TitleFieldRO from "../components/TitleFieldRO";

export default function AddRecepientScreen(props) {
  const navigation = useNavigation();
  const route = useRoute();
  const { transferType1, transferType2 } = route.params;
  const handleAddRecepient = () => {
    if (transferType2.name === "Bank") {
      navigation.navigate("AddBankRecepient", {
        transferType1,
        transferType2,
      });
    } else if (transferType2.name === "Crypto") {
      navigation.navigate("AddCryptoRecepient", {
        transferType1,
        transferType2,
      });
    } else if (transferType2.name === "Money") {
      navigation.navigate("AddMoneyRecepient", {
        transferType1,
        transferType2,
      });
    }
  };

  const [searchQuery, setSearchQuery] = useState("");

  const transactionHistory = [
    {
      id: 1,
      profile: icons.profile,
      account: "344-454545-454",
      name: "M Tayyab",
      amount: "Bank",
      date: "05-04-2024",
    },
    {
      id: 2,
      profile: icons.profile,
      account: "dwfwrt54t3t3gffffg3r5t35t",
      name: "Anna Watson",
      amount: "Crpto",
      date: "03-04-2024",
    },
    {
      id: 3,
      profile: icons.profile,
      name: "Wasif Ali",
      account: "344-454545-454",
      amount: "Mobile Money",
      date: "05-05-2024",
    },
    {
      id: 4,
      profile: icons.profile,
      name: "Hassan Gondal",
      account: "344-454545-454",
      amount: "Bank",
      date: "05-07-2024",
    },
    {
      id: 5,
      profile: icons.profile,
      account: "dwfwrt54t3t3gffffg3r5t35t",
      name: "Elon Musk",
      amount: "Crypto",
      date: "05-05-2024",
    },
    {
      id: 6,
      profile: icons.profile,
      account: "344-454545-454",
      name: "Jeff Bezos",
      amount: "Mobile Money",
      date: "05-07-2024",
    },
  ];
  const filteredTransactions = transactionHistory.filter((transaction) =>
    transaction.name.toLowerCase().includes(searchQuery.toLowerCase())
  );
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "flex-start",
        alignItems: "center",
        backgroundColor: Colors.white,
      }}
    >
      <View
        style={{
          width: "100%",
          height: RFPercentage(13),
          backgroundColor: Colors.primary,
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <View
          style={{
            width: "100%",
            position: "absolute",
            bottom: RFPercentage(2),
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <MainHeader
            imageSource={icons.arrowleft}
            title="Add Recepient"
            onpress={() => {
              props.navigation.navigate("HomeScreen");
            }}
            selectColor={Colors.white}
          />
        </View>
      </View>

      {/* button */}
      <TouchableOpacity style={styles.loginButton} onPress={handleAddRecepient}>
        <AppButton title="Add Recepient" buttonColor={Colors.secondary} />
      </TouchableOpacity>

      {/* search field */}
      <View style={styles.searchmain}>
        <View style={styles.innermain}>
          <TextInput
            style={styles.inputtext}
            onChangeText={setSearchQuery}
            value={searchQuery}
            placeholder="Search"
            placeholderTextColor={Colors.grey}
          />
          <Image style={styles.img} source={icons.search} />
        </View>
      </View>
      <View style={styles.recentTransfersContainer}>
        <Text style={styles.recentTransfersText}>Saved Recipients</Text>
      </View>
      {/* saved receipent */}
      <ScrollView
        contentContainerStyle={{
          alignItems: "center",
        }}
        showsVerticalScrollIndicator={false}
        style={{ width: "100%" }}
      >
        {filteredTransactions.map((item) => (
          <TouchableOpacity
            activeOpacity={0.7}
            onPress={() => {
              props.navigation.navigate("ConfirmPayment", {
                transferType1,
                transferType2,
              });
            }}
            key={item.id}
            style={{
              width: "90%",
              alignItems: "center",
              flexDirection: "row",
              marginTop: RFPercentage(3),
              justifyContent: "space-between",
            }}
          >
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <View
                style={{
                  width: RFPercentage(5),
                  height: RFPercentage(5),
                  borderRadius: RFPercentage(3),
                  borderWidth: RFPercentage(0.1),
                  borderColor: Colors.stroke,
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Image
                  style={{ width: RFPercentage(5), height: RFPercentage(5) }}
                  source={item.profile}
                />
              </View>
              <View style={{ marginLeft: RFPercentage(1.4) }}>
                <Text
                  style={{
                    color: Colors.blacky,
                    fontFamily: FontFamily.medium,
                    fontSize: RFPercentage(1.8),
                  }}
                >
                  {item.name}
                </Text>
                <Text
                  style={{
                    marginTop: RFPercentage(0.5),
                    color: Colors.grey,
                    fontFamily: FontFamily.regular,
                    fontSize: RFPercentage(1),
                  }}
                >
                  {item.account}
                </Text>
              </View>
            </View>

            <View style={{ alignItems: "flex-end" }}>
              <Text
                style={{
                  color: Colors.blacky,
                  fontFamily: FontFamily.medium,
                  fontSize: RFPercentage(1.8),
                }}
              >
                {item.amount}
              </Text>
              <Text
                style={{
                  marginTop: RFPercentage(0.5),
                  color: Colors.grey,
                  fontFamily: FontFamily.regular,
                  fontSize: RFPercentage(1),
                }}
              >
                {item.date}
              </Text>
            </View>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "center",
    backgroundColor: Colors.white,
  },
  loginButton: {
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    marginTop: RFPercentage(1),
  },
  searchmain: {
    width: "90%",
    backgroundColor: Colors.fieldcolor,
    padding: RFPercentage(1),
    paddingHorizontal: RFPercentage(2),
    borderRadius: RFPercentage(1.5),
    borderWidth: RFPercentage(0.1),
    borderColor: Colors.stroke,
    height: RFPercentage(6.5),
    justifyContent: "center",
    marginTop: RFPercentage(2),
  },

  innermain: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },

  img: { width: RFPercentage(3), height: RFPercentage(3) },

  inputtext: {
    fontSize: RFPercentage(2),
    color: Colors.blacky,
    fontFamily: FontFamily.regular,
  },
  recentTransfersContainer: {
    width: "90%",
    marginTop: RFPercentage(2),
    marginBottom: RFPercentage(0.5),
  },
  recentTransfersText: {
    color: Colors.blacky,
    fontFamily: FontFamily.medium,
    fontSize: RFPercentage(2),
  },
});
