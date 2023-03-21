import React, { useState } from "react";
import { ImageBackground, SafeAreaView, ScrollView, Text, View, Switch } from "react-native";
import { styles } from "./style";
import Input from "../../textInput";
import Button from "../../button";
import { useNavigation } from "@react-navigation/native";
import routes from "../../../assets/routes";

const Login = () => {
    const navigation = useNavigation();
    const goToSignUp = () => {
        navigation.navigate(routes.onboarding.signup.path)
    }

    return (
        <SafeAreaView>

            <View >

                <ImageBackground source={require('../../../assets/images/bg.png')} resizeMode="cover" style={styles.bgImg}>
                    <View style={styles.mainView}>
                        <Text style={styles.heading}> Login </Text>
                        <Input title="Email" label="Email Address" />
                        <Input title="Password" label="Password" />
                        <Button title="Login" />

                        <View style={styles.container}>
                            <View style={styles.horizontalLine} />
                            <View>
                                <Text style={styles.lineTxt}>Or login with</Text>
                            </View>
                            <View style={styles.horizontalLine}/>
                        </View>

                        <Button title="Sign Up" setFun={goToSignUp}/>


                    </View>


                </ImageBackground>
            </View>

        </SafeAreaView>
    );
};

export default Login;