import React from "react";
import { Image, Dimensions, StyleSheet, Text} from 'react-native';

import Texto from '../../../components/Texto';
import topo from '../../../assets/topo.png';


const width = Dimensions.get('screen').width; // Dimensions para calcular a dimensão. 
//utilize para que fique responsivo a qualquer tamanho de tela.

export default function Topo({ titulo }){
    return <>
    <Image source={topo} style={estilos.topo} />
    <Text style={estilos.titulo}>{ titulo }</Text>
    </>
}

const estilos = StyleSheet.create({
    topo: {
        width:"100%",
        height: 578/768 * width, //pegar a altura, divide pela largura e multiplicar pelo widht para que fique uniforme em qualquer dispositivo
        
    },

    titulo :{
        width: "100%",
        position: "absolute",
        textAlign: "center",
        fontSize: 24,
        lineHeight: 26,
        color: "white",
        fontWeight: "bold",
        padding: 16,
    },
})