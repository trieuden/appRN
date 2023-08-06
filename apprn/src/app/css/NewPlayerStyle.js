import { StyleSheet } from "react-native";
const NewPlayerStyle = StyleSheet.create({
  newPlayer: {
    width: "90%",
    borderColor: "black",
    marginHorizontal: "5%",
    backgroundColor: "#9999ff",
    borderRadius: 7,
    paddingHorizontal: "7%",
    paddingVertical: 12,
  },
  textHeader: {
    height: 35,
    fontFamily: "Times",
    fontWeight: "bold",
    fontSize: 17,
  },
  player: {
    flexDirection: "row",
    backgroundColor: "#b3b3ff",
    borderRadius: 17.5,
    padding: 3,
    alignItems: "center",
  },
});
export default NewPlayerStyle;
