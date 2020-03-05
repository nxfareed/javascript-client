import React from 'react';
import Input from '../TextField/style'

const TextFeild=(props)=> {


    console.log("props are:::::::::",props);

      return <Input type = 'text' value={props.value} disabled={(props.disabled)}/>

}

export default TextFeild;
