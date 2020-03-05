import React from 'react';
import TextFeild from './../../components/TextField/TextFeild'
import {Div, P, Err} from '../../components/TextField/style'
import Slider from '../../components/Slider/Slider';
import {banners} from './../../config/constants'

const TextFeildDemo = () => (
  <Div>
    <Slider altText='image not load' banners={banners} defaultBanner='default.png' height={200} duration={2000} random={false}/>

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
