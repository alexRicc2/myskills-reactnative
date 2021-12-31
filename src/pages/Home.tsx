import React, { useState, useEffect } from 'react';
import {Text, StyleSheet, SafeAreaView, TextInput, Platform, FlatList} from 'react-native'
import { Button } from '../components/Button';
import { SkillCard } from '../components/SkillCard';

interface SkillData {
  id: string;
  name: string;
}

export default function Home() {

  const [newSkill, setNewSkill] = useState('')
  const [mySkills, setMySkills] = useState<SkillData[]>([])
  const [greeting, setGreeting] = useState('ola')
  function handleAddNewSkill() {

    const data= {
      id: String(new Date().getTime()),
      name: newSkill
    }

    setMySkills(prevState => [...prevState, data]);
  }

  function handleRemoveSkill(id: string){
    setMySkills(prevState => prevState.filter(
      skill => skill.id !== id
    ))
  }
  
  useEffect(()=> {
    const currentHour = new Date().getHours();
    if(currentHour < 12){
      setGreeting('Good Morning');
    }
    else if(currentHour >= 12 && currentHour < 18){
      setGreeting('Good afternoon')
    }
    else{
      setGreeting('Good night')
    }
  }, [])

  return (
    <SafeAreaView style={styles.container}>
      
      <Text style={styles.title}>React native Home</Text>
      <Text style={styles.greeting}>{greeting}</Text>
      <TextInput
        style={styles.input}
        placeholder='New Skill'
        placeholderTextColor='#555'
        onChangeText={setNewSkill}
      />
      <Button 
      title='Add'
      onPress={handleAddNewSkill}/>

      <Text style={[styles.title, { marginVertical: 50 }]}>
    
        My Skills
      </Text>
      <FlatList
        data={mySkills}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <SkillCard 
            skill={item.name}
            onPress={() => handleRemoveSkill(item.id)}  
          />
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
 greeting: {
   color: '#fff',
 }
})