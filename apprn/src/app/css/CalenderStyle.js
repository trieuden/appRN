import { StyleSheet } from "react-native";
const CalendarStyles = StyleSheet.create({
  calendar: {
    width: "90%",
    borderColor: "black",
    margin: "5%",
    backgroundColor: "#9999ff",
    borderRadius: 7,
  },
  detail: {
    flexDirection: "column",
    marginTop: 20,
  },
  detailTitle: {
    backgroundColor: "#b3b3ff",
    height: 40,
    paddingHorizontal: "7%",
    paddingTop: 12,
    fontFamily: "Times",
    fontWeight: "bold",
    fontSize: 17,
  },
  detailTab: {
    flexDirection: "row",
    paddingVertical: 10,
    marginHorizontal: "7%",
  },
  detailText: {
    fontFamily: "Tahoma",
    color: "#d9d9d9",
    fontSize: 12,
    flex: 1,
  },
  detailValue: {
    fontWeight: "bold",
  },
  content: {
    flexDirection: "row",
    marginTop: 20,
    paddingHorizontal: "7%",
  },
  value: {
    fontSize: 20,
    fontWeight: "bold",
    fontFamily: "Times",
  },
  header: {
    flexDirection: "row",
    height: 40,
    marginHorizontal: "7%",
    borderWidth: 1,
    borderRadius: 20,
    borderColor: "#d9d9d9",
    marginTop: "7%",
  },
  headerText: {
    flex: 1,
    textAlign: "center",
    borderRadius: 20,
    paddingTop: 12,
    fontFamily: "Times",
    color: "#ffffff",
  },
  activeTabText: {
    backgroundColor: "blue",
  },
});

export default CalendarStyles;
