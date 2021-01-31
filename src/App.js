import Header from './components/Header'
// import Tasks from './components/Tasks'
import { useState } from 'react'
// import AddTask from './components/AddTask'

const App = () => {
	// const [tasks, setTasks] = useState([
	// 	{
	// 		id: 1,
	// 		text: 'Doctors Appointment',
	// 		day: 'Feb 5th at 2:30pm',
	// 		reminder: true,
	// 	},
	// 	{
	// 		id: 2,
	// 		text: 'Meeting at School',
	// 		day: 'Feb 6th at 12:30pm',
	// 		reminder: true,
	// 	},
	// 	{
	// 		id: 3,
	// 		text: 'Food Shopping',
	// 		day: 'Feb 7th at 2:30pm',
	// 		reminder: false,
	// 	},
	// ])

	return (
		<div className='container'>
			<Header />
		</div>
	)
}

export default App
