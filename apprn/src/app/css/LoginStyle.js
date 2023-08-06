import { StyleSheet } from 'react-native';

const LoginStyles = StyleSheet.create({
    body: {
        backgroundColor: "white",
        flex: 1,
      },
      header: {
        marginTop: 20,
      },
      header_text: {
        color: "#525464",
        fontWeight: "bold",
        margin: 10,
        textAlign: "center",
        fontSize: 20,
      },
      logo_area: {
        alignItems: "center",
        marginTop: 40,
      },
      form: {
        marginTop: 40,
      },
      item: {},
      input: {
        borderWidth: 1,
        borderColor: "#B0B0C3",
        backgroundColor: "#F7F7F7",
        padding: 17,
        marginLeft: 10,
        marginRight: 10,
      },
      input_margin: {
        borderWidth: 1,
        borderColor: "#B0B0C3",
        marginTop: 10,
        backgroundColor: "#F7F7F7",
        padding: 17,
        marginLeft: 10,
        marginRight: 10,
      },
      item_text: {
        color: "#525464",
        textAlign: "right",
        marginRight: 10,
        marginTop: 10,
      },
      login: {
        backgroundColor: "#20C3AF",
        padding: 20,
        marginLeft: 10,
        marginRight: 10,
        marginTop: 25,
      },
      login_text: {
        textAlign: "center",
        color: "white",
        fontWeight: "700",
        fontSize: 14,
      },
      or: {
        marginTop: 10,
      },
      or_text: {
        textAlign: "center",
        color: "#525464",
        fontWeight: "100",
      },
      social: {
        flexDirection: "row",
        marginTop: 10,
        marginLeft: 10,
        marginRight: 10,
        justifyContent: "space-between",
      },
      social_text: {
        padding: 10,
        width: 90,
        height: 60,
        borderWidth: 1,
        borderColor: "#E2E2B0",
        justifyContent: "center",
        alignItems: "center",
      },
      finish: {
        marginTop: 15,
        justifyContent: "center",
        alignItems: "center",
      },
      finish_text: {
        color: "#525464",
      },
      register: {
        textDecorationLine: "underline",
        color: "#FFB19D",
      },
      black_mode: {
        marginEnd: 20,
      },
      screen: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      },
      box: {
        width: 300,
        height: 300,
        backgroundColor: "red",
        marginBottom: 30,
      },
      text: {
        fontSize: 30,
      },
});

export default LoginStyles;
