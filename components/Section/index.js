import { View, Text } from 'react-native';
import React from 'react';
import Container from '../Container';

const Section = ({ children, style }) => {
    return (
        <View style={[{marginVertical: 5}, style && style]}>
            <Container>
                { children }
            </Container>
        </View>
    );
};

export default Section;
