import React,{useState} from "react";
import { Text, View, TouchableOpacity, StyleSheet } from "react-native";
import { Audio } from "expo-av";
export default function NgheNhac(){
    const [sound, setSound] = useState(null)
    async function play(){
        const {sound} = await Audio.Sound.createAsync(
            {uri:'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3'}
        );
        setSound(sound)
        await sound.playAsync()
    }
    // dinh nghia ham tam dung
    async function pause (){
        if(sound){
            await sound.stopAsync();
        }
    }
    //return
    return(
        <View>
            <Text>Vi du ve nghe nhac</Text>
            <View>
                <TouchableOpacity onPress={play}> 
                    <Text>Play</Text>
                </TouchableOpacity>
                <TouchableOpacity  onPress={pause}>
                    <Text>Pause</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}