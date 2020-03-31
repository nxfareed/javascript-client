import React from 'react';
import TextFeild from './../../components/TextField/TextFeild'
import {Div, P, Err} from '../../components/TextField/style'

const TextFeildDemo = () => (

  <Div>
    <P>This is Disabled Input</P>
    <TextFeild value='Disabled Input' disabled/>
    <P>A valid input</P>
    <TextFeild value='Accessible' />
    <P>Error Feild</P>
    <TextFeild value='101' />
    <Err>could not be greater than</Err>
  </Div>

);

export default TextFeildDemo;
