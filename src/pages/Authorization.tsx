import React, { useState } from 'react'
import { useNavigate } from 'react-router'
import { signin } from '~/api/auth'
import InputField from '~/components/InputFields'
import NavigationLink from '~/components/NavigationLink'
import SubmitButton from '~/components/SubmitButton'

const Authorization: React.FC = () => {
	const [username, setUsername] = useState('')
	const [password, setPassword] = useState('')
	const navigate = useNavigate()

	const handleSubmit = async () => {
		const session = await signin(username, password)
		navigate(`profile?session=${session}`)
	}

	return (
		<div className='flex justify-center items-center h-screen'>
			<form className='bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4'>
				<h2 className='text-2xl mb-4 font-bold text-center'>Авторизация</h2>
				<div className='mb-4'>
					<InputField
						label='Логин'
						type='username'
						value={username}
						placeholder='логин'
						onChange={value => setUsername(value)}
					/>
				</div>
				<div className='mb-6'>
					<InputField
						label='Пароль'
						type='password'
						value={password}
						onChange={value => setPassword(value)}
						placeholder='Введите пароль'
					/>
				</div>
				<div className='flex items-center justify-center'>
					<SubmitButton onClick={handleSubmit}>Войти</SubmitButton>
				</div>
				<div className='hover:underline underline-offset-1'>
					<NavigationLink
						path='/registr'
						name={'Нету аккаунта? Зарегистрируйтесь!'}
					/>
				</div>
			</form>
		</div>
	)
}

export default Authorization
