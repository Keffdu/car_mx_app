import React, { useState, useEffect } from 'react'
import { Image, ImageBackground, StyleSheet, Text, TextInput, View, } from 'react-native';
import { Button } from '@rneui/themed';

function Login() {

    const [currentTime, setCurrentTime] = useState('')
    const [clicked, setClicked] = useState(false)

    const backgroundImage = currentTime >= 18 ? require('../assets/night-img.png') : require('../assets/morning-img.png')
    const logo = require('../assets/logo(2).png')
    const helper = currentTime >= 18 ? require('../assets/helper-night.png') : require('../assets/helper-day.png')
    const buttonColor = currentTime >= 18 ? '#2c3a66b6' : '#d3845c'

    useEffect(() => {
        let hours = new Date().getHours(); //Current Hours
        setCurrentTime(hours)
    }, [])

    const styles = StyleSheet.create({
        container: {
            flex: 1,
        },
        image: {
            flex: 1,
            justifyContent: 'center',
            // width: "100%"
        },
        text: {
            // margin: 8,
            color: 'white',
            width: "100%",
            fontSize: 25,
            lineHeight: 40,
            textAlign: 'left',
        },
        input: {
            // backgroundColor: '#8b666680',
            width: '75%',
            height: 40,
            borderWidth: 1,
            padding: 10,
        },
    });

    return (
        <View style={{ flex: 1, justifyContent: 'space-between' }}>
            <ImageBackground source={backgroundImage} resizeMode="cover" style={styles.image}>
                <View style={{ width: "100%", height: "76%", display: 'flex', flexDirection: 'column', justifyContent: 'space-evenly', alignItems: 'center' }} >
                    <View style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                        <Image source={logo} style={{ width: 325, height: 200, }} />
                    </View>
                    <View style={{ justifyContent: 'space-even', alignItems: 'left', width: "80%", height: "55%" }}>
                        <View style={{ margin: 20, }}>
                            <Text style={styles.text}>Username</Text>
                            <View style={{display: 'flex', flexDirection:'row', justifyContent: 'center', width: "100%"}}>
                            <TextInput
                                keyboardAppearance={currentTime >= 18 ? 'dark' : 'light'}
                                style={{
                                    backgroundColor: '#e4d9d9c3',
                                    color: 'black',
                                    width: 225,
                                    height: 40,
                                    borderWidth: 1,
                                    padding: 10,
                                }}
                            />
                            </View>
                        </View>
                        <View style={{ margin: 20, }}>
                            <Text style={styles.text}>Password</Text>
                            <View style={{display: 'flex', flexDirection:'row', justifyContent: 'center', width: "100%"}}>
                            <TextInput
                                secureTextEntry={true}
                                keyboardAppearance={currentTime >= 18 ? 'dark' : 'light'}
                                style={{
                                    backgroundColor: '#e4d9d9c3',
                                    color: 'black',
                                    width: 225,
                                    height: 40,
                                    marginBottom: 5,
                                    borderWidth: 1,
                                    padding: 10,
                                }}
                            />
                            </View>
                        </View>
                        <View style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100%' }}>
                            <Button onPress={() => setClicked(!clicked)} size='lg' title={clicked ? "Pressed!" : "Login"} buttonStyle={{backgroundColor: buttonColor, borderRadius: 5, width: 125}} />
                        </View>
                    </View>
                </View>
                <View style={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'flex-end' }}>
                    <Image source={helper} style={{ width: 150, height: 175, }} />
                </View>
            </ImageBackground>
        </View>
    )
}



export default Login

