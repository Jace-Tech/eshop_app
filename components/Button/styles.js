import { StyleSheet} from 'react-native'
import { PRIMARY_COLOR } from '../../utils/color';

export const styles = StyleSheet.create({
    btn: {
        flex: 1,
        padding: 14,
        borderRadius: 3,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },

    btnText: {
        fontSize: 14,
        fontWeight: '600',
        letterSpacing: 1,
        textTransform: 'uppercase',
        color: "#fff"
    },

    primary: {
        backgroundColor: PRIMARY_COLOR,
    }

});
