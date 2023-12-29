import React, { useState } from 'react'
import InputField from '~/components/InputFields'
import NavigationLink from '~/components/NavigationLink'
import SubmitButton from '~/components/SubmitButton'

const Registration: React.FC = () => {
	const [username, setUsername] = useState('')
	const [FirstName, setFirstName] = useState('')
	const [LastName, setLastName] = useState('')
	const [password, setPassword] = useState('')

	const handleSubmit = () => {
		// Логика отправки данных формы
	}

	return (
		<div className='flex justify-center items-center h-screen'>
			<form className='bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4'>
				<h2 className='text-2xl mb-4 font-bold text-center'>Registration</h2>
				<div className='mb-4'>
					<InputField
						label='First Name'
						type='First Name'
						value={FirstName}
						placeholder='Your FirstName'
						onChange={value => setFirstName(value)}
					/>
				</div>
				<div className='mb-4'>
					<InputField
						label='Last Name'
						type='Last Name'
						value={LastName}
						placeholder='Your last name'
						onChange={value => setLastName(value)}
					/>
				</div>
				<div className='mb-4'>
					<InputField
						label='Username'
						type='username'
						value={username}
						placeholder='Your username'
						onChange={value => setUsername(value)}
					/>
				</div>
				<div className='mb-6'>
					<InputField
						label='Password'
						type='password'
						value={password}
						onChange={value => setPassword(value)}
						placeholder='Enter your password'
					/>
				</div>
				<div className='flex items-center justify-center'>
					<SubmitButton text='Submit' onClick={handleSubmit} />
				</div>
				<div className='flex justify-center items-center'>
					<div className='hover:underline underline-offset-1'>
						<NavigationLink path='/' name={`have an account? log in!`} />
					</div>
				</div>
			</form>
		</div>
	)
}

export default Registration
