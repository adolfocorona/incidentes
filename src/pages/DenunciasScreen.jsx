import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ImageBackground } from 'react-native';

const DenunciasScreen = ({ navigation }) => {
    const denuncias = [
        {
            tipo: 'Denuncias Penales',
            descripcion: 'Relacionadas con actividades delictivas. Pueden incluir delitos como robo, fraude, agresión, etc.',
            background: require('../images/penal.png'), // Ruta a la imagen de fondo
        },
        {
            tipo: 'Denuncias Civiles',
            descripcion: 'Se presentan en casos de disputas entre individuos, como casos de negligencia, disputas contractuales, daños y perjuicios, entre otros.',
            background: require('../images/civil.png'), // Ruta a la imagen de fondo
        },
        {
            tipo: 'Denuncias Laborales',
            descripcion: 'Relativas a cuestiones en el lugar de trabajo, como acoso laboral, discriminación, violaciones de derechos laborales, etc.',
            background: require('../images/Laboral.png'), // Ruta a la imagen de fondo
        },

        {
            tipo:
                'Denuncias de orden publico',
            descripcion: 'Relativas a cuestiones que disturbien el orden y tranquilidad del ciudadano en publico',
            background: require('../images/ordenpublico.png'), // Ruta a la imagen de fondo
        },
        {
            tipo:
                'Denuncias medioambientales',
            descripcion: 'Relativas a actividades que dañan el medio ambiente, como vertidos contaminantes, deforestación ilegal, etc.',
            background: require('../images/medioambiental.png'),
        },
        {
            tipo: 'Denuncias de corrupción',
            descripcion: 'Relativas a actividades que dañan el medio ambiente, como vertidos contaminantes, deforestación ilegal, etc.',
            background: require('../images/corrupcion.png'),
        }

    ];

    return (
        <View style={styles.container}>
            {denuncias.map((denuncia, index) => (
                <TouchableOpacity
                    key={index}
                    style={styles.denunciaButton}
                    onPress={() =>
                        navigation.navigate('DenunciaDetail', {
                            tipo: denuncia.tipo,
                            descripcion: denuncia.descripcion,
                        })
                    }
                >
                    <ImageBackground
                        source={denuncia.background}
                        style={styles.buttonBackground}
                        resizeMode="cover"
                        borderRadius={50}
                        borderWidth={50} // Ajusta el valor según la cantidad de redondeo deseada
                    >
                        <View style={styles.textContainer}>
                            <Text style={styles.denunciaButtonText}>{denuncia.tipo}</Text>
                        </View>
                    </ImageBackground>
                </TouchableOpacity>
            ))}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'space-evenly', // Distribuye los botones de manera uniforme
        alignItems: 'center',
        flexDirection: 'row', // Coloca los botones en una fila horizontal
        flexWrap: 'wrap', // Permite que los botones se envuelvan si no caben en una fila
    },
    denunciaButton: {
        width: '45%',
        aspectRatio: 1,
        margin: '2.5%',
        borderRadius: 10,
        borderWidth: 10, // Agrega un borde para verificar
        borderColor: '#004AAD', // Color del borde
    },

    buttonBackground: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 70,
    },
    textContainer: {
        flex: 1,
        justifyContent: 'flex-end', // Alinea el contenido en la parte inferior
        alignItems: 'center', // Alinea horizontalmente en el centro
    },
    denunciaButtonText: {
        color: '#004AAD',
        fontSize: 40,
        fontWeight: 'bold',

    },
});

export default DenunciasScreen;
