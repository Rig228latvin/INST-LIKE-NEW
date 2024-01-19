import { FC, useEffect, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import { getUserBySession } from '~/api/auth'
import { Sidebar } from '~/components/Sidebar'
import SubmitButton from '~/components/SubmitButton'
import { User } from '~/models/user'

const Profile: FC = () => {
	const [user, setUser] = useState<User | null>(null)
	const [code, setCode] = useState<number>()

	const [searchParams] = useSearchParams()

	const userId = searchParams.get('session')
	console.log(searchParams)

	useEffect(() => {
		getUser(userId ?? '')
	}, [searchParams])

	const getUser = async (session: string) => {
		try {
			const userData = await getUserBySession(session)
			setUser(userData.user)
			setCode(userData.code)
		} catch (error) {
			console.error('Error fetching user:', error)
		}
	}

	return (
		<div className='flex justify-between'>
			<Sidebar />

			{user && (
				<div className='flex gap-4 p-4'>
					<img
						className='max-h-[250px] min-w-[250px] object-cover p-8 rounded-full'
						src={`http://92.51.45.202:8000/image?username=${user.username}`}
						alt={`${code}`}
					/>
					<div className='flex flex-col gap-4'>
						<div className='flex h-14 whitespace-nowrap gap-2 items-center'>
							<span className='font-bold text-3xl'>{user.username}</span>
							<SubmitButton onClick={() => {}}>
								Редактировать профиль
							</SubmitButton>
							<SubmitButton onClick={() => {}}>Посмотреть Архив</SubmitButton>
						</div>
						<div className='flex gap-2 text-2xl font-bold'>
							<span>{user.name}</span>
							<span>{user.lastname}</span>
						</div>
						<div className='flex'>
							<div className='flex whitespace-nowrap gap-3'>
								<span>10 публикации</span>
								<span>40 подписчиков</span>
								<span>1 подписка</span>
							</div>
						</div>
						<p>{user.caption}</p>
					</div>
				</div>
			)}
			<div></div>
		</div>
	)
}

export default Profile
