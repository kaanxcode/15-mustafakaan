import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const InfoText = () => {
  return (
    <View style={styles.infoTextContainer}>
    <Text style={styles.infoText}>Sizi tanıyabilmemiz için lütfen kimlik ve 
        telefon bilgilerinizi giriniz.</Text>
</View>
  )
}

export default InfoText

const styles = StyleSheet.create({
    infoTextContainer: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    infoText: {
        width: 280,
        color: '#912149',
        textAlign: 'center',
        fontSize: 14,
        margin: 10,
        marginBottom: 20,
    }
})