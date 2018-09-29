// Import libraries for making component
import React from 'react';
import { Text, StyleSheet, View } from 'react-native';

// Make a component
export default class Header extends React.Component {
	render() {
		return (
			<View style={styles.viewStyle}>
				<Text style={styles.textStyle}> {this.props.headerText} </Text>
			</View>
		);
	}
}


// Define the styling for this component

const styles = StyleSheet.create({
	viewStyle: {
		backgroundColor: '#F8F8F8',
		justifyContent: 'center',
		alignItems: 'center',
		height: 60,
		paddingTop: 15,
		shadowColor: '#000',
		shadowOffset: { width: 0, height: 2 },
		shadowOpacity: 0.9,
		elevation: 2,
		position: 'relative'
	},
	textStyle: {
		fontSize: 20
	},
});
