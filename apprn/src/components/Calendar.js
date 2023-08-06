import React,{useState} from "react";
import { View,Text, Image } from "react-native";
import CalendarStyles from "../app/css/CalenderStyle";
import { CalendarAction } from "../app/controller/CalendarAction"; 

const Calendar = () =>{
    return(
        <View>
            <View style={CalendarStyles.calendar}>
                <Header/>
                <Content/>
                <Detail/>
            </View>
        </View>
    )
}

const Header = () =>{
    const { handlePress, monthTextStyle, yearTextStyle } = CalendarAction();

    return (
        <View style={CalendarStyles.header}>
            <Text style={[CalendarStyles.headerText, monthTextStyle]} onPress={() => handlePress("month")}>
                This Month
            </Text>
            <Text style={[CalendarStyles.headerText, yearTextStyle]} onPress={() => handlePress("year")}>
                This Year
            </Text>
        </View>
    );
}
const Content = () => {
    return(
        <View style={CalendarStyles.content}>
                <View style={{flex:1}}>
                    <Text style={{fontSize:12}} >This month earnings</Text>
                    <Text style={CalendarStyles.value}>$1000</Text>
                </View>
                <View style={{flex:1,alignItems:"end"}}>
                    <Text style={{fontSize:12}} >Your Rating</Text>
                    <Text style={CalendarStyles.value}>4.5</Text>
                </View>
        </View>
    )
}
const Detail = () => {
    return(
        <View style={CalendarStyles.detail}>
            <View>
                <Text style={CalendarStyles.detailTitle}>Detail</Text>
            </View>
            <View style={CalendarStyles.detailTab}>
                <Text style={CalendarStyles.detailText}>Average days</Text>
                <Text style={CalendarStyles.detailValue}>3.2$</Text>
            </View>
            <View style={CalendarStyles.detailTab}>
                <Text style={CalendarStyles.detailText}>Top day</Text>
                <Text style={CalendarStyles.detailValue}>3.2$</Text>
            </View>
            <View style={CalendarStyles.detailTab}>
                <Text style={CalendarStyles.detailText}>Revenue change</Text>
                <Text style={CalendarStyles.detailValue}>3%</Text>
            </View>
        </View>
    )
}
export default Calendar;