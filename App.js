import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from './incidentes/src/components/LoginScreen';
import Students from './incidentes/src/pages/Students';
import DenunciaDetailScreen from './incidentes/src/pages/DenunciaDetailScreen';
import DenunciasScreen from './incidentes/src/pages/DenunciasScreen';
import ReporteScreen from './incidentes/src/pages/ReporteScreen';
import ReporteDetail from './incidentes/src/pages/ReporteDetail';
const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Students" component={Students} />
         <Stack.Screen name="Denuncias" component={DenunciasScreen} />
        <Stack.Screen name="DenunciaDetail" component={DenunciaDetailScreen} />
      <Stack.Screen name="Reporte" component={ReporteScreen} /> 
     <Stack.Screen name="ReporteDetail" component={ReporteDetail} />  
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
