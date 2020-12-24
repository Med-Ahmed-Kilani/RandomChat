/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import React, {Component} from 'react';
import {View, Image, Text, TextInput, Button} from 'react-native';
import RadioButtonRN from 'radio-buttons-react-native';
import intros from '../Styles/intros';

const data = [
  {
    label: '  Male',
   },
   {
    label: '  Female',
   },
  ];

export default class Intro extends Component {
  render() {
    return (
      <View style={{backgroundColor: 'white', flex:1}}>
        <View style={intros.card}>
          <Image resizeMode="contain" style={{height:'100%' , width : '100%'}} source = {{ uri:'https://media.giphy.com/media/26FPJGjhefSJuaRhu/giphy.gif'}}/>
        </View>
        <View style={intros.loginForm}>
            <Text style={intros.headers}>
              Hey you!!!
            </Text>
            <TextInput style={intros.inputs} placeholder="Your User Name Please!" />
            <Text style={intros.headers}>
              Age :
            </Text>
            <TextInput style={intros.inputs} placeholder="Age!" keyboardType="numeric" />
            <Text style={intros.headers}>
              Gender !
            </Text>
            <View style={intros.genders}>
              <RadioButtonRN
                data={data}
                selectedBtn={(e) => console.log(e)}
              />
            </View>
            <Button style={intros.button} title="start"/>
        </View>
        <View style={intros.card} />
      </View>
    );
  }
}
