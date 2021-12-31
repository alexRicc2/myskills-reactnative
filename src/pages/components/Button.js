import React from "react";
import {
  TouchableOpacity,
  Text,
  StyleSheet
} from 'react-native'

export function Button({ funcao }){
  return (
    <TouchableOpacity
      style={styles.button}
      activeOpacity={.7}
      onPress={funcao}
    >
      <Text style={styles.buttonText}>Add</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#a370f7',
    padding: 15,
    borderRadius: 7,
    alignItems: 'center',
    marginTop: 17},
  
  buttonText: {
    color: '#fff',
    fontSize: 17,
    fontWeight: 'bold'
  },
})