import { View, Image, Dimensions, Platform, FlatList, SafeAreaView, Text } from 'react-native'
import React, { useState } from 'react'
import { themeColor } from '../theme/themeColor';
import Card from '../components/Card';


const { width, height } = Dimensions.get('window');
const ios = Platform.OS == 'ios';
const Home = () => {

    return (
        <View style={{ flex: 1, backgroundColor: themeColor.bgColor, position: 'relative' }}>
            <Image source={require('../assets/header.png')} />
            <SafeAreaView style={{ marginBottom: 32, position: 'relative' }}>
                <View style={{ position: 'absolute', top: 0 }}>
                    <Card percent="36%" icon="../assets/humidity.png" content="Humidifier" mode="Mode 2" />
                    <Card percent="36%" icon="../assets/humidity.png" content="Humidifier" mode="Mode 2" />
                    <Card percent="36%" icon="../assets/humidity.png" content="Humidifier" mode="Mode 2" />
                </View>
            </SafeAreaView>
        </View >
    )
}

export default Home