import { StyleSheet } from 'react-native';
const DashboardStyle = StyleSheet.create({
    containerHeader: {
      width: "100%",
      height: 60,
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
      paddingHorizontal: 16,
      backgroundColor: "#b3b3ff",
    },
    leftContainerHeader: {
      flexDirection: "column",
      alignItems: "left",
    },
    dateHeader: {
      fontSize: 20,
      marginRight: 8,
    },
    activeHeader: {
      fontSize: 17,
      fontFamily:"Fantasy",
      color: "white",
    },
    rightContainerHeader: {
      alignItems: "flex-end",
    },
    avatarHeader: {
      width: 40,
      height: 40,
      borderRadius: 20,
      borderColor: "green",
      borderWidth: 3,
    },
  });

export default DashboardStyle;
