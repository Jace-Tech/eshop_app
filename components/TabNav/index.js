import { View, Text } from 'react-native';
import React from 'react';
import { styles } from './styles'
import Section from '../Section';
import { globalStyles } from '../../utils/globalStyles';

const TabNav = () => {
    return (
        <View style={styles.horizontalBar}>
            <Section>
                <View style={[globalStyles.centerVertical, {justifyContent: 'space-between'}]}>
                </View>
            </Section>
        </View>
    );
};

export default TabNav;
