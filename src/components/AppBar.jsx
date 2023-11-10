import Students from '../pages/Students';
import Employees from './Employees';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

const AppBar = () => (
  <Stack.Navigator>
    <Stack.Screen name="Students" component={Students} />
    <Stack.Screen name="Employees" component={Employees} />
  </Stack.Navigator>
);

export default AppBar;
