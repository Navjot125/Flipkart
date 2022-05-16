import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import React from "react";
import { DATA } from "./items";

const FeildData = ({ title, data }) => {
  return (
    <View style={styles.container}>
      <View style={styles.shop}>
        <View style={styles.title}>
          <Text style={{ color: "black", fontSize: 25, fontWeight: "400" }}>
            {title}
          </Text>
        </View>
        <View style={styles.data}>
          {data.map((item, index) => (
            <TouchableOpacity key={index} style={styles.innerContainer}>
              <Image style={styles.icons} source={item.image} />
              <View style={styles.text}>
                <Text>{item.name}</Text>
                <Text style={{ color: "green" }}> From ₹ {item.price}</Text>
                <Text>{item.brand}</Text>
              </View>
            </TouchableOpacity>
          ))}
        </View>
      </View>
    </View>
  );
};

export default FeildData;

const styles = StyleSheet.create({
  container: {
    height: "50%",
    width: "100%",
    alignItems: "center",
    backgroundColor: "#f2f2f2",
  },
  shop: {
    backgroundColor: "white",
    height: "100%",
    width: "100%",
    marginTop: "1%",
    alignItems: "center",
    shadowColor: "#171717",
    shadowOffset: { width: 3, height: -3 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
  },
  title: {
    height: "20%",
    width: "98%",
    justifyContent: "center",
    paddingLeft: 20,
  },
  data: {
    height: "80%",
    width: "98%",
    // backgroundColor: "red",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },
  innerContainer: {
    height: "90%",
    width: 165,
    // backgroundColor: "cyan",
    justifyContent: "space-around",
    shadowColor: "#171717",
    shadowOffset: { width: 3, height: -3 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
  },
  image: {
    height: "60%",
    width: "100%",
    // backgroundColor: "white",
  },
  icons: {
    height: "60%",
    width: "100%",
    resizeMode: "contain",
  },
  text: {
    height: "40%",
    width: "100%",
    // backgroundColor: "white",
    justifyContent: "center",
    alignItems: "center",
  },
});
