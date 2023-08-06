import React, { useEffect, useState, Component } from "react";
import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  Image,
  TextInput,
  TouchableOpacity,
  Alert,
} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome5";
import UserData from "../../data/UserData";
import LoginStyles from "../css/LoginStyle";

const Login = ({ navigation }) => {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");

  const userData = UserData();

  const handleLogin = () => {
    console.log("userName:", userName);
    console.log("password:", password);
    userData.map((user) => {
      console.log(user);
      if (userName === user.username && password === user.password) {
        Alert.alert("Alert Title", "My Alert Msg", [
          {
            text: "Cancel",
            onPress: () => console.log("Cancel Pressed"),
            style: "cancel",
          },
          { text: "OK", onPress: () => console.log("OK Pressed") },
        ]);
        navigation.navigate("HomePage");
      }
    });
  };

  return (
    <SafeAreaView style={LoginStyles.body}>
      <View style={LoginStyles.header}>
        <Text style={LoginStyles.header_text}>Sign in</Text>
        <TouchableOpacity
          onPress={() => this.props.navigation.navigate("Black")}
          style={LoginStyles.black_mode}
        >
          <Icon
            color={"black"}
            style={{ marginLeft: 10 }}
            size={15}
            name={"adjust"}
          />
        </TouchableOpacity>
      </View>
      <View style={LoginStyles.logo_area}>
        <Image
          source={require("../../../assets/test.jpg")}
          style={{ width: 150, height: 150, borderRadius: 150 / 2 }}
        />
      </View>
      <View style={LoginStyles.form}>
        <View style={LoginStyles.item}>
          <TextInput
            style={LoginStyles.input}
            placeholder={"User Name"}
            onChangeText={(text) => setUserName(text)}
          />
          <TextInput
            style={LoginStyles.input_margin}
            placeholder={"Password"}
            onChangeText={(text) => setPassword(text)}
          />
          <TouchableOpacity>
            <Text style={LoginStyles.item_text}>Quên mật khẩu ?</Text>
          </TouchableOpacity>
        </View>
        <View style={LoginStyles.login}>
          <TouchableOpacity onPress={handleLogin}>
            <Text style={LoginStyles.login_text}>Login</Text>
          </TouchableOpacity>
        </View>
        <View style={LoginStyles.or}>
          <Text style={LoginStyles.or_text}>Contact</Text>
        </View>
        <View style={LoginStyles.social}>
          <TouchableOpacity style={LoginStyles.social_text}>
            <Icon color={"#3B5999"} size={20} name={"facebook-f"} />
          </TouchableOpacity>
          <TouchableOpacity style={LoginStyles.social_text}>
            <Icon color={"#55ACEE"} size={20} name={"twitter"} />
          </TouchableOpacity>
          <TouchableOpacity style={LoginStyles.social_text}>
            <Icon size={20} name={"github"} />
          </TouchableOpacity>
        </View>
        <View style={LoginStyles.finish}>
          <Text style={LoginStyles.finish_text}>
            Bir hesabın yok mu?{" "}
            <TouchableOpacity>
              <Text style={LoginStyles.register}>Kayıt ol</Text>
            </TouchableOpacity>
          </Text>
        </View>
      </View>
    </SafeAreaView>
  );
};
export default Login;
