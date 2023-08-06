import React, { useState } from "react";
import {
  View,
  Text,
  Image,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import DashboardStyle from "../app/css/DashboardStyle";
import Top from "./Top";
import Calendar from "./Calendar";
import NewPlayer from "./NewPlayer";
const currentDate = new Date();

const Dashboard = () => {
  return (
    <View style={{ backgroundColor: "#b3b3ff", width: "100%",paddingVertical:6 }}>
      <Header />
      <Top/>
      <Calendar/>
      <NewPlayer/>
    </View>
  );
};
const Header = () => {
  return (
    <View style={DashboardStyle.containerHeader}>
      <View style={DashboardStyle.leftContainerHeader}>
        <Text style={DashboardStyle.dateHeader}>7.1.1999</Text>
        <Text style={DashboardStyle.activeHeader}>Admin</Text>
      </View>
      <View style={DashboardStyle.rightContainerHeader}>
        <Image
          source={require("../../assets/avatar.png")}
          style={DashboardStyle.avatarHeader}
        />
      </View>
    </View>
  );
};

const DateItem = ({ value }) => {
  const day = value.getDay();
  const date = value.getDate();
  const daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  const dayName = daysOfWeek[day];

  const handlePress = () => {};

  return (
    <TouchableOpacity
      onPress={handlePress}
      style={{
        backgroundColor: "#b3b3ff",
        marginRight: 3,
        height: 80,
        width: 70,
        alignItems: "center",
        borderRadius: 15,
      }}
    >
      <Text style={{ fontSize: 18 }}>{dayName}</Text>
      <Text style={{ fontSize: 30 }}>{date}</Text>
    </TouchableOpacity>
  );
};

const Dates = () => {
  const dateComponents = [];

  for (let i = 0; i < 7; i++) {
    const nextDate = new Date(currentDate);
    nextDate.setDate(currentDate.getDate() + i);
    dateComponents.push(<DateItem key={i} value={nextDate} />);
  }

  return (
    <View style={{height: 115,marginVertical:20}}>
      <Text style={{fontStyle:"Times",color:" #3333ff", fontSize:22, fontWeight:"bold",paddingHorizontal:16}} >Top Score</Text>
      <ScrollView horizontal showsHorizontalScrollIndicator={false} style={{paddingTop:5 }}>
      {dateComponents}
    </ScrollView>
    </View>
  );
};

export default Dashboard;
