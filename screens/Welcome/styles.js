import { StyleSheet } from 'react-native'
import { PRIMARY_COLOR } from '../../utils/color'

export const styles = StyleSheet.create({
    welcome: {
        flex: 1,
        backgroundColor: '#fff',
    },

    title: {
        fontSize: 28,
        fontWeight: '600',
        color: PRIMARY_COLOR
    },

    image: {
        width: 200,
        height: 200,
        display: 'flex',
    },

    imageContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },

    btnContainer: {
        paddingVertical: 15,
        marginBottom: 20
    }

})