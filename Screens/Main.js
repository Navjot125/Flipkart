import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";
import FeildData from "./FeildData";
import { DATA, DATA2, DATA3, DATA4 } from "./items";

const Main = () => {
  return (
    <View style={styles.container}>
      <View style={styles.mid}>
        <View style={styles.common}>
          <Image
            style={styles.image}
            source={require("../assets/offers.png")}
          />
          <Text style={styles.text}>Top Offers</Text>
        </View>
        <View style={styles.common}>
          <Image
            style={styles.image}
            source={require("../assets/grocery.png")}
          />
          <Text style={styles.text}>Grocery</Text>
        </View>
        <View style={styles.common}>
          <Image
            style={styles.image}
            source={require("../assets/mobiles.png")}
          />
          <Text style={styles.text}>Mobiles</Text>
        </View>
        <View style={styles.common}>
          <Image
            style={styles.image}
            source={require("../assets/fashion.png")}
          />
          <Text style={styles.text}>Fashion</Text>
        </View>
        <View style={styles.common}>
          <Image
            style={styles.image}
            source={require("../assets/electronis.png")}
          />
          <Text style={styles.text}>Electronics</Text>
        </View>
        <View style={styles.common}>
          <Image style={styles.image} source={require("../assets/home.png")} />
          <Text style={styles.text}>Home</Text>
        </View>
        <View style={styles.common}>
          <Image
            style={styles.image}
            source={require("../assets/appliances.png")}
          />
          <Text style={styles.text}>Appliances</Text>
        </View>
        <View style={styles.common}>
          <Image
            style={styles.image}
            source={require("../assets/travel.png")}
          />
          <Text style={styles.text}>Travel</Text>
        </View>
        <View style={styles.common}>
          <Image style={styles.image} source={require("../assets/toys.png")} />
          <Text style={styles.text}>Beauty, Toys & More</Text>
        </View>
      </View>
      <View style={styles.slider}>
        <Image
          style={{ height: "100%", width: "100%" }}
          source={require("../assets/slider1.png")}
        />
      </View>
      <FeildData data={DATA} title="Trending Offers" />
      <FeildData data={DATA2} title="Best of Electronics" />
      <FeildData data={DATA3} title="Top Picks On Fashion" />
      <FeildData data={DATA4} title="Deals of the Day" />
    </View>
  );
};

export default Main;

const styles = StyleSheet.create({
  container: {
    height: "100%",
    width: "100%",
    backgroundColor: "white",
    alignItems: "center",
  },
  mid: {
    flexDirection: "row",
    height: "20%",
    width: "100%",
    paddingHorizontal:'3%',
    backgroundColor: "white",
    // backgroundColor: "red",
    justifyContent: "space-around",
    shadowColor: "#171717",
    shadowOffset: { width: -3, height: 1.5 },
    shadowOpacity: 0.2,
    // shadowRadius: 3,
  },
  common: {
    height: "90%",
    width: "8%",
    backgroundColor: "white",
    // backgroundColor: "black",
    justifyContent:'space-around'
  },
  text: {
    color: "black",
    fontWeight: "500",
    alignSelf: "center",
  },
  image: {
    height: "60%",
    width: "100%",
    // backgroundColor:'green',
    resizeMode: "contain",
  },
  slider: {
    height: "55%",
    width: "98%",
    backgroundColor: "cyan",
    marginTop: "1.5%",
  },
 
});
