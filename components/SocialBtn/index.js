import { View, Text, TouchableOpacity } from 'react-native';
import React from 'react';
import { globalStyles } from '../../utils/globalStyles';

import { styles } from './styles'
import { OFF_WHITE, SECONDARY_COLOR } from '../../utils/color';

const SocialBtn = ({ children, social, bg, style }) => {
    return (
        <View style={{marginVertical: 8}}>
            <TouchableOpacity style={[styles.socialBtn, {backgroundColor: bg || OFF_WHITE}, style && style]} >
                <View style={globalStyles.centerVertical}>
                    <View style={{marginRight: 30}}>
                        { children && children }
                    </View>
                    <Text style={[{color: bg ? '#fff' : SECONDARY_COLOR }, styles.btnText]}>Sign in with { social && social }</Text>
                </View>
            </TouchableOpacity>
        </View>
    );
};

export default SocialBtn;
