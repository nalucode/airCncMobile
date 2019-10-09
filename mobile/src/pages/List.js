import React, {useState, useEffect} from 'react'
import socketio from 'socket.io-client';
import { SafeAreaView, Alert, ScrollView , View , TouchableOpacity, Text ,AsyncStorage ,Platform, StyleSheet , Image} from 'react-native'


import logo from '../assets/logo.png';

import SpotList from '../Components/SpotList';

export default function List({navigation}) {

    useEffect(()=>{
        AsyncStorage.getItem('user').then(user_id => {
            const socket = socketio('http://192.168.1.101:8081',{
                query: { user_id }
            })

            socket.on('booking_response', booking =>{
                Alert.alert(`Sua reserva em ${booking.spot.company} em ${booking.date} foi ${booking.approved ? "APROVADA" : "REJEITADA" }`)
            })
        })
    })

    async function handleLogout(){
        await AsyncStorage.removeItem('user');
        await AsyncStorage.removeItem('techs');
        navigation.navigate('Login');
    };

    const [techs,setTechs] = useState([]) 

    useEffect(()=>{
        AsyncStorage.getItem('techs').then(storageTechs => {
            const techsArray = storageTechs.split(',').map(tech => tech.trim());

            setTechs(techsArray);
        })
    },[])
     
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.headBar}>
                <Image style={styles.logo} source={logo}/>
                <TouchableOpacity style={styles.button} onPress={() => handleLogout()}><Text style={styles.buttonText}>SAIR</Text></TouchableOpacity>
            </View>
            <ScrollView>    
            {techs.map(tech => <SpotList key={tech} tech={tech}/>)}
            </ScrollView>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        paddingTop: Platform.OS === 'android' ? 30 : 0,
    },
    headBar: {
        height: 60,
        flex:1,
        flexDirection: 'row',
        justifyContent: "center",
        padding:30,
    },
    logo: {
        height: 32,
        resizeMode: 'contain',
        alignSelf: 'center',
    },
    button : {
        height: 32,
        justifyContent: 'center',
        alignSelf: 'center',
        paddingHorizontal: 7,
        borderBottomWidth: 1.5,
        borderBottomColor: '#f05a5b',
        borderRadius: 2,
    },
    buttonText: {
        color: '#f05a5b',
        fontWeight: 'bold',
        fontSize: 15
    }

})