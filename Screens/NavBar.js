import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Button,
  TextInput,
  Pressable,
  Modal,
} from "react-native";
import React, { useState } from "react";
import CountryPicker from "react-native-country-picker-modal";
import { RadioButton } from "react-native-paper";
// import DatePicker from "react-native-date-picker";

const NavBar = () => {
  const [value, setValue] = useState("first");
  const [countryCode, setCountryCode] = useState("IN");
  const [callingCode, setCallingCode] = useState("91");
  const [color, setColor] = useState("FFFFFF");
  const [modalVisible, setModalVisible] = useState(false);
  const [modalEnable, setModalEnable] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [date, setDate] = useState(new Date());
  const [open, setOpen] = useState(false);

  const validateEmail = () => {
    var regForEmail =
      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (regForEmail.test(email)) {
      styles.inputEmail = {
        borderBottomWidth: 1,
        borderColor: "gray",
        width: "100%",
        padding: 10,
      };
      return true;
    } else {
      styles.inputEmail = {
        borderWidth: 1,
        borderColor: "red",
        width: "100%",
        padding: 10,
      };
    }
  };
  const validatePassword = () => {
    var regForPassword =
      /^.*(?=.{8,})(?=.*[a-zA-Z])(?=.*\d)(?=.*[!#$%&? "]).*$/;
    if (regForPassword.test(password)) {
      styles.inputPassword = {
        borderBottomWidth: 1,
        borderColor: "gray",
        width: "100%",
        padding: 10,
      };
      return true;
    } else {
      styles.inputPassword = {
        borderWidth: 1,
        borderColor: "red",
        width: "100%",
        padding: 10,
      };
    }
  };
  const validateConfirmPassword = () => {
    return password == confirmPassword ? true : null;
  };

  const generateColor = () => {
    setColor(Math.random().toString(16).substr(-6));
  };
  return (
    <View style={styles.container}>
      <Modal
        animationType="fade"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
          setModalVisible(!modalVisible);
        }}
      >
        <TouchableOpacity
          onPress={() => setModalEnable(false) || setModalVisible(false)}
          style={{
            height: 40,
            width: 40,
            justifyContent: "center",
            alignItems: "center",
            position: "absolute",
            right: 300,
            top:60,
            zIndex: 2,
          }}
        >
          <Text style={{ fontSize: 30, color: "blue" }}>X</Text>
        </TouchableOpacity>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <View style={styles.blueScreen}>
              <View style={styles.blueText}>
                <Text
                  style={{ color: "white", fontSize: 26, fontWeight: "700" }}
                >
                  Login
                </Text>
                <Text
                  style={{
                    color: "white",
                    fontSize: 17,
                    fontWeight: "600",
                    textAlign: "auto",
                  }}
                >
                  Get access to your Orders, Wishlist and Recommendations
                </Text>
              </View>
            </View>
            <View style={styles.loginScreen}>
              <View style={styles.details}>
                <TextInput
                  placeholder="Enter Email/Mobile number"
                  style={styles.inputEmail}
                  value={email}
                  onChangeText={(value) => setEmail(value)}
                  onChange={() => validateEmail()}
                ></TextInput>
                <TextInput
                  style={styles.inputPassword}
                  placeholder="Enter Password"
                  value={password}
                  onChangeText={(value) => setPassword(value)}
                  onChange={validatePassword}
                ></TextInput>
                <Text>
                  By continuing, you agree to Flipkart's Terms of Use and
                  Privacy Policy.{" "}
                </Text>
                <TouchableOpacity
                  style={styles.btn}
                  onPress={() =>
                    validateEmail() == true || validateEmail() == true
                      ? setModalVisible(!modalVisible) ||
                        setEmail("") ||
                        setPassword("")
                      : alert("Fill The Correct Details Or Refresh The Page")
                  }
                >
                  <Text style={{ color: "white" }}>Login</Text>
                </TouchableOpacity>
              </View>
              <TouchableOpacity
                onPress={() =>
                  setModalEnable(true) || setEmail("") || setPassword("")
                }
                style={{ color: "blue", fontWeight: "600", marginBottom: 30 }}
              >
                New to Flipkart? Create an account
              </TouchableOpacity>
            </View>
            <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={() => setModalVisible(!modalVisible)}
            ></Pressable>
          </View>
        </View>
      </Modal>
      <Modal
        animationType="fade"
        transparent={true}
        visible={modalEnable}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
          setModalEnable(!modalEnable);
        }}
      >
        <TouchableOpacity
          onPress={() => setModalEnable(false) || setModalVisible(false)}
          style={{
            height: 40,
            width: 40,
            justifyContent: "center",
            alignItems: "center",
            position: "absolute",
            right: 300,
            top:60,
            zIndex: 2,
          }}
        >
          <Text style={{ fontSize: 30, color: "blue" }}>X</Text>
        </TouchableOpacity>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <View style={styles.blueScreen}>
              <View style={styles.blueText}>
                <Text
                  style={{ color: "white", fontSize: 26, fontWeight: "700" }}
                >
                  Login
                </Text>
                <Text
                  style={{
                    color: "white",
                    fontSize: 17,
                    fontWeight: "600",
                    textAlign: "auto",
                  }}
                >
                  Get access to your Orders, Wishlist and Recommendations
                </Text>
              </View>
            </View>
            <View style={styles.loginScreen}>
              <View style={styles.detailsSignup}>
                <TextInput
                  placeholder="Enter Email/Mobile number"
                  style={styles.inputEmail}
                  value={email}
                  onChangeText={(value) => setEmail(value)}
                  onChange={() => validateEmail()}
                ></TextInput>
                <TextInput
                  style={styles.inputPassword}
                  placeholder="Enter Password"
                  value={password}
                  onChangeText={(value) => setPassword(value)}
                  onChange={() => validatePassword()}
                ></TextInput>
                <TextInput
                  // style={styles.inputConfirmPassword}
                  style={
                    validateConfirmPassword() == true
                      ? styles.inpt
                      : styles.inptError
                  }
                  placeholder="Confirm Password"
                  value={confirmPassword}
                  onChangeText={(value) => setConfirmPassword(value)}
                  onChange={validateConfirmPassword}
                ></TextInput>
                <View
                  style={{
                    flexDirection: "row",
                    height: 30,
                    width: "100%",
                    alignItems: "center",
                    borderBottomWidth: 1,
                    borderColor: "gray",
                  }}
                >
                  <Text
                    style={{ color: "black", fontSize: 16, marginBottom: 4 }}
                  >
                    Select Your Country :-{" "}
                  </Text>
                  <CountryPicker
                    countryCode={countryCode}
                    withAlphaFilter={true}
                    withEmoji={true}
                    withCountryNameButton={true}
                    withFlagButton={false}
                    withCloseButton={true}
                    withFlag={true}
                    withModal={true}
                    onSelect={(country) => {
                      const { cca2, callingCode } = country;
                      setCountryCode(cca2);
                      setCallingCode(callingCode[0]);
                    }}
                  ></CountryPicker>
                </View>
                <View
                  style={{
                    flexDirection: "row",
                    height: 30,
                    width: "100%",
                    alignItems: "center",
                    borderBottomWidth: 1,
                    borderColor: "gray",
                  }}
                >
                  <Text
                    style={{ color: "black", fontSize: 16, marginBottom: 4 }}
                  >
                    Select Your Gender :-{" "}
                  </Text>
                  <RadioButton.Group
                    onValueChange={(newValue) => setValue(newValue)}
                    value={value}
                  >
                    <View
                      style={{ flexDirection: "row", alignItems: "center" }}
                    >
                      <Text>Male</Text>
                      <RadioButton value="Male" />
                      <Text>Female</Text>
                      <RadioButton value="Female" />
                    </View>
                  </RadioButton.Group>
                </View>
                {/* <DatePicker showToday onChange={onChange("DatePicker")} /> */}
                {/* <DatePicker date={date} onDateChange={setDate} /> */}
                {/* <View>
                  <Button title="Open" onPress={() => setOpen(true)} />
                  <DatePicker
                    modal
                    open={open}
                    date={date}
                    onConfirm={(date) => {
                      setOpen(false);
                      setDate(date);
                    }}
                    onCancel={() => {
                      setOpen(false);
                    }}
                  />
                </View> */}
                <Text>
                  By continuing, you agree to Flipkart's Terms of Use and
                  Privacy Policy.{" "}
                </Text>
                <TouchableOpacity
                  style={styles.btn}
                  onPress={() =>
                    validateEmail() == true || validateEmail() == true
                      ? setModalEnable(!modalEnable) ||
                        setModalVisible(!modalEnable) ||
                        setEmail("") ||
                        setPassword("") ||
                        setConfirmPassword("")
                      : alert("Fill The Correct Details Or Refresh The Page")
                  }
                >
                  <Text style={{ color: "white", fontWeight: "600" }}>
                    Continue
                  </Text>
                </TouchableOpacity>
              </View>
              <TouchableOpacity
                onPress={() =>
                  setModalEnable(!modalEnable) ||
                  setEmail("") ||
                  setPassword("")
                }
                style={{ color: "blue", fontWeight: "600", marginBottom: 30 }}
              >
                Existing User? Log in
              </TouchableOpacity>
            </View>
            <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={() => setModalEnable(!modalEnable)}
            ></Pressable>
          </View>
        </View>
      </Modal>
      <TouchableOpacity onPress={generateColor}>
        <View style={styles.logo}>
          <Text
            style={{ fontSize: 24, color: "#" + color, fontStyle: "italic" }}
          >
            Flipkart
          </Text>
          <View
            style={{ flexDirection: "row", width: "95%", alignSelf: "center" }}
          >
            <Text style={{ color: "white" }}>Explore </Text>
            <Text style={{ color: "yellow" }}>Plus</Text>
          </View>
        </View>
      </TouchableOpacity>
      <TextInput
        style={styles.input}
        placeholder="search for Products, brands and more"
      ></TextInput>
      <Button onPress={() => setModalVisible(true)} title="Login"></Button>
      <View style={styles.functions}>
        <TouchableOpacity>
          <Text style={styles.text}>Become a Seller</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={styles.text}> More</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <View style={styles.msg}>
            <Text style={{ color: "white" }}>4</Text>
          </View>
          <Text style={styles.text}> Cart</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
export default NavBar;

const styles = StyleSheet.create({
  container: {
    height: "10%",
    width: "100%",
    backgroundColor: "#1a1aff",
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
    paddingHorizontal: "5%",
  },
  logo: {
    height: "100%",
    // backgroundColor: "red",
    justifyContent: "center",
    alignItems: "center",
  },
  functions: {
    height: "100%",
    width: "25%",
    // backgroundColor: "yellow",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  text: {
    fontSize: 20,
    color: "white",
    fontStyle: "italic",
  },
  input: {
    width: "37%",
    backgroundColor: "white",
    height: "60%",
    paddingLeft: 20,
  },
  msg: {
    height: 20,
    width: 20,
    borderRadius: 7,
    borderWidth: 0.5,
    borderColor: "white",
    backgroundColor: "red",
    position: "absolute",
    top: -10,
    justifyContent: "center",
    alignItems: "center",
    left: 40,
  },
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    // top:20,
    // backgroundColor:'black',
  },
  modalView: {
    height: "80%",
    width: "50%",
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    alignItems: "center",
    flexDirection: "row",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  blueScreen: {
    height: "100%",
    width: "40%",
    backgroundColor: "blue",
    alignItems: "center",
  },
  blueText: {
    margin: 30,
    height: "30%",
    width: "60%",
    // backgroundColor: "red",
    justifyContent: "space-evenly",
    alignItems: "flex-start",
  },
  loginScreen: {
    height: "100%",
    width: "60%",
    // backgroundColor: "white",
    alignItems: "center",
    justifyContent: "space-between",
  },
  details: {
    height: "50%",
    width: "80%",
    // backgroundColor: "cyan",
    alignItems: "center",
    justifyContent: "space-evenly",
  },
  detailsSignup: {
    height: "70%",
    width: "80%",
    // backgroundColor: "cyan",
    alignItems: "center",
    justifyContent: "space-evenly",
  },
  inputEmail: {
    borderBottomWidth: 1,
    borderColor: "gray",
    width: "100%",
    padding: 10,
  },
  inputPassword: {
    borderBottomWidth: 1,
    borderColor: "gray",
    width: "100%",
    padding: 10,
  },
  inputConfirmPassword: {
    borderBottomWidth: 1,
    borderColor: "gray",
    width: "100%",
    padding: 10,
  },
  inpt: {
    borderBottomWidth: 1,
    borderColor: "gray",
    width: "100%",
    padding: 10,
  },
  inptError: {
    borderWidth: 1,
    borderColor: "red",
    width: "100%",
    padding: 10,
  },
  btn: {
    height: 40,
    width: "80%",
    backgroundColor: "blue",
    justifyContent: "center",
    alignItems: "center",
  },
  buttonClose: {
    backgroundColor: "#2196F3",
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
});
