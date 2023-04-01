import React from 'react';
import{ StyleSheet, View, FlatList, Text} from 'react-native';


import Topo from './Componentes/Topo';
import Detalhes from './Componentes/Detalhes';
import Item from './Componentes/Item';


export default function Cesta({topo, detalhes, itens}) {
    return <>
        <FlatList
            data={itens.lista}   
            renderItem={Item}
            keyExtractor={({nome}) => nome}
            ListHeaderComponent={() => {
                return <>
                    <Topo {...topo} />
                    <View style={estilos.cesta}>
                        <Detalhes {...detalhes} />
                        <Text style={estilos.titulo}>{itens.titulo}</Text>
                    </View>
                </>                        
            }
        }
        />
    </>
    
}

const estilos = StyleSheet.create({
    titulo: {
        color: "#464646",
        fontWeight: "bold",
        marginTop: 32,
        marginBottom: 8,
        fontSize: 24,
        lineHeight: 32,
    },

    cesta: {
        paddingVertical: 8,
        paddingHorizontal: 16,
    },

});
