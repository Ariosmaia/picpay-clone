import styled from 'styled-components/native';
import { LinearGradient } from 'expo-linear-gradient';

export const Button = styled(LinearGradient).attrs(props => ({
	colors: props.focused ? ['#fff', '#ccc'] : ['#00fc6c', '#00ac4a'],
	start: [1, 0.2]
}))`
	width: 60px;
	height: 60px;
	border-radius: 30px;
	align-items: center;
	justify-content: center; 
`;

export const Label = styled.Text`
	font-size: 12px;
	color: ${props => props.focused ? '#000' : '#fff'};
`;

