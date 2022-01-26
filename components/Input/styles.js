import { StyleSheet } from 'react-native'
import { OFF_WHITE, SECONDARY_COLOR } from '../../utils/color'

export const styles = StyleSheet.create({
    inputBox: {
        marginVertical: 10,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 16,
        backgroundColor: OFF_WHITE,
    },

    inputControl: {
        paddingVertical: 12,
        flex: 1,
        color: SECONDARY_COLOR
    },
})