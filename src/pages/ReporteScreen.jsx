import React from "react";
import { View, Text, TouchableOpacity, StyleSheet, ImageBackground } from 'react-native';
const ReporteScreen = ({navigation}) => {
    const reportes = [
        {
          tipo: 'Reporte Movilidad',
          descripcion: 'Reporta fallas en la movilidad del tráfico y su posible causa (Accidente vial, bloqueos, Fallas estructurales, etc.)',
          background: require('../images/movilidad.png')  
        },
         {
          tipo: 'Reporte Servicios publicos',
          descripcion: 'Reporta fallas en cualquier servicio publico (Agua, luz, drenaje, limpieza)',
         background: require ('../images/servicios.png')
        },
         {
          tipo: 'Reporte accesibilidad',
          descripcion: 'Reporta fallas de accesibilidad para personas con necesidades especiales)',
          background: require ('../images/discapacidad.png')  
        },
    ];
    return (
    <View style={styles.container}>
        {reportes.map((reporte,index)=>(
         <TouchableOpacity 
         key={index}  
         style={styles.reporteButton} 
         onPress={()=>
            navigation.navigate('ReporteDetail',{
              tipo: reporte.tipo,
              descripcion: reporte.descripcion  
            })
           
         } 
         >
            <ImageBackground
                        source={reporte.background}
                        style={styles.buttonBackground}
                        resizeMode="cover"
                        borderRadius={50}
                        borderWidth={50} // Ajusta el valor según la cantidad de redondeo deseada
                    > 
        <View style={styles.textContainer}>
                            <Text style={styles.reporteButtonText}>{reporte.tipo}</Text>
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
    reporteButton: {
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
    reporteButtonText: {
        color: '#004AAD',
        fontSize: 40,
        fontWeight: 'bold',

    },
});
export default ReporteScreen;