import React, { useState } from 'react';
import {Text, StyleSheet, SafeAreaView, TextInput, Platform, FlatList } from 'react-native'
import { Button } from './components/Button';
import { SkillCard } from './components/SkillCard';

export default function Home() {

  const [newSkill, setNewSkill] = useState('')
  const [mySkills, setMySkills] = useState([])

  function handleAddNewSkill() {
    setMySkills(prevState => [...prevState, newSkill]);
  }

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>React native Home</Text>
      <TextInput
        style={styles.input}
        placeholder='New Skill'
        placeholderTextColor='#555'
        onChangeText={setNewSkill}
      />
      <Button funcao={handleAddNewSkill}/>

      <Text style={[styles.title, { marginVertical: 50 }]}>
    
        My Skills
      </Text>
      <FlatList
        data={mySkills}
        keyExtractor={item => item}
        renderItem={({ item }) => (
          <SkillCard skill={item}/>
        )}
      />
      
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121015',
    paddingHorizontal: 30,
    paddingVertical: 70,

  },
  title: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 24,
  },
  input: {
    backgroundColor: '#1f1e25',
    color: '#fff',
    fontSize: 17,
    padding: Platform.OS === 'ios' ? 15 : 10,
    marginTop: 30,
    borderRadius: 7,
  },
 
})