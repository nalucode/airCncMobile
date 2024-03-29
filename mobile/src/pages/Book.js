import React, { useState } from 'react'
import { View,Alert, AsyncStorage,Platform,TextInput,TouchableOpacity, StyleSheet ,Text } from 'react-native'

import api from '../services/api';

export default function Book({navigation}) {

    const [date,setDate] = useState('');
    const id = navigation.getParam('id');

    async function handleSubmit(){
        const user_id = await AsyncStorage.getItem('user');

        await api.post(`/spots/${id}/bookings`,{
            date
        },{
            headers : { user_id}
        })

        Alert.alert('Solicitação de reserva enviada!')
        
        navigation.navigate('List');
    }

    function handleCancel() {
        navigation.navigate('List');
    }

    return (
        <View style={styles.container}>
            <Text style={styles.label}>DATA DE INTERESSE *</Text>
            <TextInput 
            style={styles.input}
            placeholder="Qual data você quer reservar?"
            placeholderTextColor="#999"
            autoCapitalize= 'words'
            value={date}
            onChangeText={setDate}
            />
            <TouchableOpacity style={styles.button} onPress={handleSubmit}>
                <Text style={styles.buttonText}>SOLICITAR</Text>
            </TouchableOpacity>
            
            <TouchableOpacity style={[styles.button,styles.cancelButton]} onPress={handleCancel}>
                <Text style={styles.buttonText}>CANCELAR</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: Platform.OS === 'android' ? 30 : 0,
        margin: 30,
    },
    label: {
        marginTop: 30,
        fontWeight: 'bold',
        color: '#444',
        marginBottom: 8,
    },
    input:{
        borderWidth: 1,
        borderColor: '#ddd',
        paddingHorizontal: 20,
        fontSize: 16,
        color: '#444',
        height: 44,
        marginBottom: 20,
        borderRadius: 2
    },
    button: {
        height: 42,
        backgroundColor: '#f05a5b',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 2,
    },
    cancelButton: {
        backgroundColor: '#ccc',
        marginTop:10
    },
    buttonText: {
        color: '#FFF',
        fontWeight: 'bold',
        fontSize: 16
    }
})