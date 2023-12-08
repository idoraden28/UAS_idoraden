import React, { useEffect } from 'react';
import { Text, View, Image, StyleSheet, } from 'react-native';
function SplashScreen({ navigation }) {
    useEffect(() => {
        const delay = setTimeout(() => {
            navigation.replace('Login'); // Ganti 'Home' dengan nama halaman utama Anda
        }, 2000); // Delay selama 2 detik

        return () => clearTimeout(delay); // Membersihkan timeout jika komponen unmount
    }, [navigation]);

    return (
        <View style={styles.container}>
            <View style={styles.iconContainer}>
                <Image
                    style={styles.icon}
                    source={require('../../assets/puppet.png')}
                />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'orange',
    },
    iconContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#FFA61A',
    },
    icon: {
        width: 310,
        height: 100, // Ubah tinggi gambar sesuai kebutuhan
    },
});
export default SplashScreen;
