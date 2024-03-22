import React, { useEffect, useRef, useState } from "react";
import { Text, View, StyleSheet, TouchableOpacity } from "react-native";
import { Camera, CameraType } from "expo-camera";

const ChupAnh = () => {
    //quan ly quyen
    const [hasPre, setHasPre] = useState(null)
    const cameraRef = useRef();
    useEffect(
        () => {
            (
                async () => {
                    const { status } = await Camera.requestCameraPermissionsAsync();
                    setHasPre(status === 'granted')
                }
            )();
        }, []);
    const chup = async () => {
        if (cameraRef.current) {
            const photo =
                await cameraRef.current.takePictureAsync();
            console.log('Anh da duoc chup:', photo.uri);
        }
    };
    return (
        <View style={styles.container}>
            {
                hasPre ? (
                    <Camera style={styles.camera}
                        ref={cameraRef}
                        type={Camera.Constants.Type.back} />
                ) : (
                    <Text>Khong co quyen truy cap</Text>
                )
            }

            <TouchableOpacity style={styles.button} onPress={chup}>
                <Text>
                    Chup Anh
                </Text>
            </TouchableOpacity>

        </View>
    );

}
const styles = StyleSheet.create(
    {
        container: {
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center'
        }
        , camera: {
            height: '50%',
            width: '75%'
        },
        button:{
            height:50,
            width:100,
            backgroundColor: 'red'
        }
    }
)

export default ChupAnh;