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
				<h2 className='text-2xl mb-4 font-bold text-center'>Регистрация</h2>
				<div className='mb-4'>
					<InputField
						label='Имя'
						type='First Name'
						value={FirstName}
						placeholder='Введите ваше имя'
						onChange={value => setFirstName(value)}
					/>
				</div>
				<div className='mb-4'>
					<InputField
						label='Фамилия'
						type='Last Name'
						value={LastName}
						placeholder='Введите вашу фамилию'
						onChange={value => setLastName(value)}
					/>
				</div>
				<div className='mb-4'>
					<InputField
						label='Логин'
						type='username'
						value={username}
						placeholder='Введите ваш логин'
						onChange={value => setUsername(value)}
					/>
				</div>
				<div className='mb-6'>
					<InputField
						label='Пароль'
						type='password'
						value={password}
						onChange={value => setPassword(value)}
						placeholder='Введите ваш пароль'
					/>
				</div>
				<div className='flex items-center justify-center'>
					<SubmitButton onClick={handleSubmit}>Зарегистрироваться</SubmitButton>
				</div>
				<div className='flex justify-center items-center'>
					<div className='hover:underline underline-offset-1'>
						<NavigationLink path='/' name={'Есть аккаунт? Войдите!'} />
					</div>
				</div>
			</form>
		</div>
	)
}

export default Registration
