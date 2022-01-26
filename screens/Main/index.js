import { View, SafeAreaView, Text, Pressable} from 'react-native'
import { StatusBar } from 'react-native'
import React from 'react'
import Section from '../../components/Section'
import { globalStyles } from '../../utils/globalStyles'
import { Icon } from 'react-native-elements'
import { PRIMARY_COLOR, SECONDARY_COLOR, YELLOW } from '../../utils/color'
import { styles } from './styles'

const Main = ({ navigation }) => {
    return (
        <>
            <StatusBar />
            <SafeAreaView style={{flex: 1, backgroundColor: '#fff'}}>
                <Section style={styles.tabBar}>
                    <View style={[globalStyles.centerVertical, { justifyContent: 'space-between' }]}>
                        <View style={[globalStyles.centerVertical]}>
                            <Pressable>
                                <Icon 
                                    size='30px'
                                    name="ios-menu-outline"
                                    type="ionicon"
                                />
                            </Pressable>

                            <View style={{marginLeft: 15}}>
                                <Text style={{color: PRIMARY_COLOR, fontSize: 18}}>Bon Appetit</Text>
                            </View>
                        </View>

                        <View style={[globalStyles.centerVertical]}>
                            <View>
                                <Pressable>
                                    <Icon 
                                        color={SECONDARY_COLOR}
                                        name="ios-search-outline"
                                        type='ionicon'
                                    />
                                </Pressable>
                            </View>

                            <View style={{marginLeft: 15}}>
                                <Pressable>
                                    <Icon 
                                        color={YELLOW}
                                        name="md-options"
                                        type='ionicon'
                                    />
                                </Pressable>
                            </View>
                        </View>
                    </View>

                </Section>
            </SafeAreaView>
        </>
    );
};

export default Main;
