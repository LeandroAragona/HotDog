import * as React from 'react';
import { Button } from 'react-native';

export default function BotonFeo(props) {
    var titulo = "Defecto";
    if (props.txt) {
        titulo = props.txt;
    }

    return <Button
    onPress={() => alert('Soy un boton!')}
    title={
        titulo
    }
    color="#000"
  />
}