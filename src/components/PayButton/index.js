import React from 'react';
import { MaterialIcons } from '@expo/vector-icons';
import { TouchableNativeFeedback } from 'react-native';

import { Button, Label } from './styles';

const PayButton = ({onPress, focused}) => {
	return (
		<TouchableNativeFeedback onPress={onPress}>
			<Button focused={focused}>
				<MaterialIcons 
					name="attach-money" 
					size={30} 
					color={
						focused
							? '#000'
							: '#fff'
					} />
				<Label focused={focused}>Pagar</Label>
			</Button>
		</TouchableNativeFeedback>
	);
}

export default PayButton;