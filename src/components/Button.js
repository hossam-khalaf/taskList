import PropTypes from 'prop-types'

const Button = ({ color, text }) => {
	return (
		<button className='btn' style={{ backgroundColor: 'darkblue' }}>
			{text}
		</button>
	)
}

Button.defaultProps = {
	color: 'blue',
}
Button.propTypes = {
	text: PropTypes.string,
	color: PropTypes.string,
}

export default Button
