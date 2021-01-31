import PropTypes from 'prop-types'
import Button from './Button'

const Header = ({ title }) => {
	const onClick = () => {
		console.log('click')
	}
	return (
		<header className='header'>
			<h1>{title}</h1>
			<Button color='green' text='Add' />
		</header>
	)
}

//default props
Header.defaultProps = {
	title: 'My Tasks',
}

// Proptypes
Header.propTypes = {
	title: PropTypes.string.isRequired,
}

export default Header
