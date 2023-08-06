import React from "react";
import { View,Text, Image, TouchableOpacity } from "react-native";
import NewPlayerStyle from "../app/css/NewPlayerStyle";
import { ChangePlayerAction } from "../app/controller/ChangePlayerAction";


const NewPlayer = () =>{
    const {handlePress,idPlayer} = ChangePlayerAction();
    return(
        <View style={NewPlayerStyle.newPlayer}>
            <Text style={NewPlayerStyle.textHeader}>New Player</Text>
            <Player idPlayer={idPlayer}/>
            <Control handlePress={handlePress}/>
        </View>
    )
}
const Player = ({idPlayer}) => {
    return(
        <View style={NewPlayerStyle.player}>
            <Image source={require("../../assets/avatar.png")} style={{width: 35,height: 35,borderRadius: 17.5,}} />
            <Text style={{fontFamily:"Tahoma",fontSize:14,paddingLeft:12,fontWeight:"bold"}}>{idPlayer}</Text>
        </View>
    )
}
const Control = ({handlePress}) =>{
    return(
        <View style={{flexDirection:"row",marginTop:12}}>
            <TouchableOpacity style={{backgroundColor:"blue",height:38,justifyContent:"center",paddingVertical:5,paddingHorizontal:12,borderRadius:17}}>
                <Text>Show Detail</Text>
            </TouchableOpacity>
            <View style={{flexDirection:"row",alignItems:"center",flex:1,justifyContent:"end"}}>
                <TouchableOpacity style={{backgroundColor:"#e6e6ff",padding:2,margin:2,borderRadius:6}} onPress={handlePress}>
                    <Image source={require("../../assets/left.png")} style={{width: 23,height: 23}} />
                </TouchableOpacity>
                <TouchableOpacity style={{backgroundColor:"#e6e6ff",padding:2,margin:2,borderRadius:6}}>
                    <Image source={require("../../assets/right.png")} style={{width: 23,height: 23}} />
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default NewPlayer;

