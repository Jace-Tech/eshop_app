import { TouchableOpacity, Text } from 'react-native';
import { styles } from './styles'

const Button = ({ title, color, onPress }) => {
    return (
        <TouchableOpacity onPress={onPress} style={[styles.btn, color && styles[color] ]}>
            <Text style={styles.btnText}>{ title }</Text>
        </TouchableOpacity>
    );
};

export default Button;
