import React from "react";
import{Image, Text, View, StyleSheet, TouchableOpacity} from 'react-native';

import Texto from '../../../components/Texto';

export default function Detalhes({nome, logoFazenda, nomeFazenda, descricao, preco, botao}){
    return<>
        <Text style={estilos.nome}>{ nome }</Text>
        <View style={estilos.fazenda}>
            <Image source={logoFazenda} style={estilos.imagemFazenda} />
            <Text style={estilos.nomeFazenda}>{ nomeFazenda }</Text>
        </View>
        <Text style={estilos.descricao}>{ descricao } </Text>
        <Text style={estilos.preco}>{ preco }</Text>
        
        <TouchableOpacity style={estilos.botao} onPress={() => {}}> 
            <Text style={estilos.textoBotao}>{ botao }</Text>
        </TouchableOpacity>
        

        
    </>

}

const estilos = StyleSheet.create({
    
    nome :{
        color: "#464646",
        fontSize: 26,
        lineHeight: 42,
        fontWeight: "bold",
        //fontFamily: "MontserratBold",
        
    },

    fazenda: {
        flexDirection: "row",
        paddingVertical: 12,
    },

    imagemFazenda: {
        width: 32,
        height: 32,
        //fontFamily: "MontserratRegular",
    },

    nomeFazenda:{
        fontSize: 16,
        lineHeight: 26,
        marginLeft: 12,
    },

    descricao: {
        color: "#A3A3A3",
        fontSize: 16,
        lineHeight: 16,
    },

    preco: {
        color: "#2A9F85",
        fontWeight: "bold",
        fontSize: 26,
        lineHeight: 42,
        marginTop: 8,
    },

    botao: {
        marginTop: 16,
        backgroundColor: "#2A9F85",
        paddingVertical: 16,
        borderRadius: 6,

    },


    textoBotao: {
        textAlign: "center",
        color: "#ffffff",
        fontSize: 18,
        lineHeight: 26,
        fontWeight: "bold",

    },
})