import React from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Login from "../components/onboarding/login";
import Signup from "../components/onboarding/signup";
import routes from "../assets/routes";

const Stack = createStackNavigator();

const Navigation = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName='Login'>
                <Stack.Screen component={Login} name={routes.onboarding.login.path} />
                <Stack.Screen component={Signup} name={routes.onboarding.signup.path} options={{ headerShown: false }} />
            </Stack.Navigator>
        </NavigationContainer>

    );
};

export default Navigation;
