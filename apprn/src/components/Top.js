import React from "react";
import { View,Text, Image } from "react-native";

const Top = () =>{
    return(
        <View style={{paddingTop:12}} >
            <View style={{flexDirection: "row",width:"90%",borderColor:"black",borderWidth:2,marginHorizontal:"5%",marginTop:5,borderRadius:10, backgroundColor:"#9999ff"}}>
                <View style={{flex: 1,marginLeft:"10%",marginVertical:15}}>
                    <Image source={require("../../assets/player.png")}style={{width: 35,height: 35,margin:5}} />
                    <Text style={{fontFamily:"Tahoma",color:"white", fontSize:22}} >100</Text>
                    <Text style={{fontFamily:"Tahoma",color:"#d9d9d9", fontSize:12}} >Players</Text>
                </View>
                <View style={{flex: 1,marginLeft:"10%",marginVertical:15}}>
                    <Image source={require("../../assets/comment.png")}style={{width: 35,height: 35,margin:5}} />
                    <Text style={{fontFamily:"Tahoma",color:"white", fontSize:22}} >100</Text>
                    <Text style={{fontFamily:"Tahoma",color:"#d9d9d9", fontSize:12}} >Comment</Text>
                </View>
                <View style={{flex: 1,marginLeft:"10%",marginVertical:15}}>
                    <Image source={require("../../assets/star.png")}style={{width: 35,height: 35,margin:5}} />
                    <Text style={{fontFamily:"Tahoma",color:"white", fontSize:22}} >4.5</Text>
                    <Text style={{fontFamily:"Tahoma",color:"#d9d9d9", fontSize:12}} >Feedback</Text>
                </View>
            </View>
        </View>
    )
}
export default Top;