import React from "react";
import { View, Text, TextInput } from "react-native";
import { styles } from "./style";

interface Props {
    title : string,
    label : string,
    fun ?: (params : string) => void;    
}

const Input = ({title, label, fun} : Props) => {
    return(
        <View >
           <Text style={styles.title}> {title} </Text>
           <TextInput style={styles.input} placeholder= {label} onChangeText={fun}></TextInput>
        </View>

    );
};

export default Input;