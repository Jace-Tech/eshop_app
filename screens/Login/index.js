import { View, SafeAreaView, Pressable, Text, KeyboardAvoidingView, Platform } from 'react-native'
import React, {useEffect, useState} from 'react'
import SocialBtn from '../../components/SocialBtn'
import { CheckBox, Icon } from 'react-native-elements'
import { styles } from './styles'
import { globalStyles } from '../../utils/globalStyles'
import Input from '../../components/Input'
import Button from '../../components/Button'
import { OFF_WHITE, PRIMARY_COLOR, SECONDARY_COLOR } from '../../utils/color'
import Section from '../../components/Section'

const Register = ({ navigation }) => {
    const [isHidden, setIsHidden] = useState(true)
    const [isChecked, setIsChecked] = useState(false)
    const [fields, setFields] = useState({
        username: '',
        password: ''
    })


    useEffect(() => {
        console.log({fields})
    }, [fields])

    return (
        <SafeAreaView style={{backgroundColor: '#fff', flex: 1}}>
            <Section style={{paddingVertical: 20}}>
                <View style={styles.tab}>
                    <Pressable style={styles.icon} onPress={() => navigation.replace('Welcome')}>
                        <Icon
                            name="arrow-back-outline"
                            type="ionicon"
                        />
                    </Pressable>
                    <Text style={styles.title}>Sign In</Text>
                </View>
            </Section>

            <Section>
                <View style={[ globalStyles.center, { marginTop: 10}]}>
                    <Text style={{fontWeight: 400, fontSize: 20}}>Welcome</Text>
                </View>
            </Section>
            
            <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? "padding" : "height"}>
                <Section>
                    <View style={{marginTop: 15}}>
                        <Input placeholder="Username" handleChange={(text) => setFields(prev => ({...prev, username: text}))}/>

                        <Input placeholder="Password" handleChange={(text) => setFields(prev => ({...prev, password: text}))} isHidden={isHidden}>

                            <Pressable onPress={() => setIsHidden(prev => !prev)}>
                                <Icon 
                                    size="medium" 
                                    name={isHidden ? 'eye-outline' : 'eye-off-outline'}
                                    type="ionicon"
                                />
                            </Pressable>
                        </Input>
                    </View>
                </Section>
            </KeyboardAvoidingView>


            <Section>
                <View style={[globalStyles.centerVertical, {justifyContent: 'flex-end'}]}>
                    {/* <View style={globalStyles.centerVertical}>
                        <CheckBox size="medium" checked={isChecked} onPress={() => setIsChecked(prev => !prev)} style={{marginRight: 2}} />

                        <Pressable>
                            <Text>Remember me</Text>
                        </Pressable>
                    </View> */}

                    <View>
                        <Pressable onPress={() => {}}>
                            <Text style={{color: PRIMARY_COLOR}}>Forgot Password?</Text>
                        </Pressable>
                    </View>
                </View>
            </Section>

            <Section style={{marginTop: 35}}>
                <View>
                    <Button title="Sign in" color="primary" />
                </View>
            </Section>

            <Section style={{marginTop: 10}}>
                <View style={[globalStyles.centerVertical, { justifyContent: 'center' }]}>
                    <Text style={{color: SECONDARY_COLOR}}>Don't have an account?</Text>
                    <Pressable onPress={() => {}} style={{ marginLeft: 5 }}>
                        <Text style={{color: PRIMARY_COLOR}}>Sign up</Text>
                    </Pressable>
                </View>
            </Section>

            <Section style={{marginVertical: 20}}>
                <View style={globalStyles.center}>
                    <Text style={{color: SECONDARY_COLOR}}>Or Use</Text>
                </View>
            </Section>

            <Section style={{marginTop: 5, marginBottom: 20}}>
                <View>
                    <SocialBtn social="Facebook" bg="#3863b1">
                        <Icon 
                            color="#fff"
                            name="ios-logo-facebook"
                            type='ionicon'
                        />
                    </SocialBtn>

                    <SocialBtn social="Google" style={{borderWidth: 1, borderColor: OFF_WHITE, backgroundColor: '#fff'}}>
                        <Icon 
                            color="#1975d0"
                            name="ios-logo-google"
                            type='ionicon'
                        />
                    </SocialBtn>
                </View>
            </Section>

        </SafeAreaView>
    );
};

export default Register;
