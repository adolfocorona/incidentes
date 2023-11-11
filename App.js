import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from './incidentes/src/components/LoginScreen';
import Students from './incidentes/src/pages/Students';
import DenunciaDetailScreen from './incidentes/src/pages/DenunciaDetailScreen';
import DenunciasScreen from './incidentes/src/pages/DenunciasScreen';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Students" component={Students} />
         <Stack.Screen name="Denuncias" component={DenunciasScreen} />
        <Stack.Screen name="DenunciaDetail" component={DenunciaDetailScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
