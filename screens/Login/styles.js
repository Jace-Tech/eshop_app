import { StyleSheet } from 'react-native'
import { SECONDARY_COLOR } from '../../utils/color'

export const styles = StyleSheet.create({
    backBtn: {
        width: 50,
        height: 50,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },

    tab: {
        flexDirection: 'row', 
        alignItems: 'center', 
        justifyContent: 'center', 
        position: 'relative'
    },
    
    title: {
        fontWeight: '300',
        fontSize: 22,
        color: SECONDARY_COLOR
    },

    icon: {
        position: 'absolute',
        top: '50%',
        left: 0,
        transform: [{translateY: '50%'}],
    }
})