import { View, TextInput } from 'react-native';
import React from 'react'
import { styles } from './styles'

const Input = ({ placeholder, children, isHidden, handleChange }) => {
    return (
        <View style={styles.inputBox}>
            <TextInput placeholder={placeholder || ''} onChangeText={handleChange} secureTextEntry={isHidden} style={styles.inputControl} />
            { children && children }
        </View>
    );
};

export default Input;
