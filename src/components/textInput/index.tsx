import React, { useState } from "react";
import { View, Text, TextInput, Image, TouchableOpacity } from "react-native";
import { styles } from "./style";

interface Props {
    title: string,
    label: string,
    fun?: (params: string) => void;
    inputreff?: any;
    onSubmitEditing?: any;
    blurOnSubmit?: boolean;
    secureTextEntry?: any;
    display?: boolean;
    returnKeyType?: any;

}

const Input = ({ title, label, fun, inputreff, onSubmitEditing, blurOnSubmit, secureTextEntry, display, returnKeyType }: Props) => {
    const [show, setShow] = useState(false);
    const [img, setImg] = useState(require('../../assets/images/show.png'));
   
    const onHandle = () => {
        if (display) {
            if (show) {
                setImg(require('../../assets/images/show.png'));
                
                
                setShow(false);
            }
            else {
                
                setImg(require('../../assets/images/hidden.png'));
                setShow(true);
            }
        }
    }

    return (
        <View>
            <Text style={styles.title}> {title} </Text>
            <View style={styles.mainview} >

                <TextInput style={styles.input}
                    placeholder={label}
                    onChangeText={fun}
                    ref={inputreff}
                    onSubmitEditing={onSubmitEditing}
                    blurOnSubmit={blurOnSubmit}
                    secureTextEntry={!show}
                    returnKeyType={returnKeyType}
                />

                {display && (
                    <TouchableOpacity onPress={() => onHandle()}>
                        <Image source={img} style={styles.logo} />
                    </TouchableOpacity>
                )}
            </View>
        </View>

    );
};

export default Input;