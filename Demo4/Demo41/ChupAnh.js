import React, { useRef, useState, useEffect } from "react";
import { Text, View, StyleSheet, TouchableOpacity, Image } from "react-native";
import { Camera } from "expo-camera";

const ChupAnh = () => {
    const [hasPer, setHasPer] = useState(null);
    const [photoUri, setPhotoUri] = useState(null); // Thêm state để lưu trữ URI của ảnh mới

    const cameraRef = useRef();

    useEffect(() => {
        (async () => {
            const { status } = await Camera.requestPermissionsAsync();
            setHasPer(status === 'granted');
        })();
    }, []);

    const chup = async () => {
        if (cameraRef.current) {
            const photo = await cameraRef.current.takePictureAsync();
            console.log('Ảnh đã được chụp: ', photo.uri);
            setPhotoUri(photo.uri); // Cập nhật state với URI của ảnh mới chụp
        }
    };

    return (
        <View style={styles.container}>
            {photoUri ? ( // Nếu có ảnh, hiển thị ảnh đó
                <Image source={{ uri: photoUri }} style={styles.avatar} />
            ) : (
                <Image source={{uri:'https://www.svgrepo.com/show/382097/female-avatar-girl-face-woman-user-9.svg'}} style={styles.avatar} /> // Sử dụng ảnh mặc định nếu chưa có ảnh mới
            )}
            {hasPer ? (
                <Camera style={styles.camera} ref={cameraRef} type={Camera.Constants.Type.back} />
            ) : (
                <Text>Không có quyền truy cập camera</Text>
            )}
            <TouchableOpacity style={styles.captureButton} onPress={chup}>
                <Text style={styles.captureText}>Chụp ảnh</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    avatar: {
        width: 200,
        height: 200,
        borderRadius: 100, // Để có góc bo tròn cho ảnh avatar
        marginBottom: 20,
    },
    camera: {
        width: 200,
        height: 200,
    },
    captureButton: {
        backgroundColor: 'blue',
        padding: 10,
        margin: 10,
    },
    captureText: {
        color: 'white',
    },
});

export default ChupAnh;


// luu anh

// import React, { useRef, useState, useEffect } from "react";
// import { Text, View, StyleSheet, TouchableOpacity, Image } from "react-native";
// import { Camera } from "expo-camera";
// import AsyncStorage from '@react-native-async-storage/async-storage';

// const ChupAnh = () => {
//     const [hasPer, setHasPer] = useState(null);
//     const [photoUri, setPhotoUri] = useState(null);

//     const cameraRef = useRef();

//     useEffect(() => {
//         (async () => {
//             const { status } = await Camera.requestPermissionsAsync();
//             setHasPer(status === 'granted');

//             // Load URI của ảnh đã lưu từ AsyncStorage khi component mount
//             const storedPhotoUri = await AsyncStorage.getItem('photoUri');
//             if (storedPhotoUri) {
//                 setPhotoUri(storedPhotoUri);
//             }
//         })();
//     }, []);

//     const chup = async () => {
//         if (cameraRef.current) {
//             const photo = await cameraRef.current.takePictureAsync();
//             console.log('Ảnh đã được chụp: ', photo.uri);
//             setPhotoUri(photo.uri);

//             // Lưu URI của ảnh vào AsyncStorage
//             await AsyncStorage.setItem('photoUri', photo.uri);
//         }
//     };

//     return (
//         <View style={styles.container}>
//             {photoUri ? (
//                 <Image source={{ uri: photoUri }} style={styles.avatar} />
//             ) : (
//                 <Image source={{uri: 'https://www.svgrepo.com/show/382097/female-avatar-girl-face-woman-user-9.svg'}} style={styles.avatar} />
//             )}
//             {hasPer ? (
//                 <Camera style={styles.camera} ref={cameraRef} type={Camera.Constants.Type.back} />
//             ) : (
//                 <Text>Không có quyền truy cập camera</Text>
//             )}
//             <TouchableOpacity style={styles.captureButton} onPress={chup}>
//                 <Text style={styles.captureText}>Chụp ảnh</Text>
//             </TouchableOpacity>
//         </View>
//     );
// };

// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         justifyContent: 'center',
//         alignItems: 'center',
//     },
//     avatar: {
//         width: 200,
//         height: 200,
//         borderRadius: 100,
//         marginBottom: 20,
//     },
//     camera: {
//         width: 350,
//         height: '50%',
//     },
//     captureButton: {
//         backgroundColor: 'blue',
//         padding: 10,
//         margin: 10,
//     },
//     captureText: {
//         color: 'white',
//     },
// });

// export default ChupAnh;
