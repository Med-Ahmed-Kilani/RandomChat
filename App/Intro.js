/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import React, {Component} from 'react';
import {View, Image, Text, TextInput, Button} from 'react-native';
import { CheckBox } from 'react-native-elements';
import intros from '../Styles/intros';

export default class Intro extends Component  {
  constructor(props){
    super(props)
    this.state = {
      checked:true,
      unchecked:false,
    }
  }
  render(){
    return (
      <View style={{backgroundColor: 'white', flex:1}}>
        <View style={intros.card}>
          <Image resizeMode="contain" style={{height:'100%' , width : '100%'}} source = {{ uri:'https://media.giphy.com/media/26FPJGjhefSJuaRhu/giphy.gif'}}/>
        </View>
        <View style={intros.loginForm}>
            <Text style={intros.headers}>
              UserName
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
              <CheckBox
                center
                title='Male'
                checkedIcon='dot-circle-o'
                uncheckedIcon='circle-o'
                checked={this.state.checked}
              />
              <CheckBox
                center
                title='Female'
                checkedIcon='dot-circle-o'
                uncheckedIcon='circle-o'
                checked={this.state.unchecked}
              />
            </View>
            <Button style={intros.button} title="start"/>
        </View>
        <View style={intros.card} />
      </View>
    );
  }
}
