import { FC, useEffect, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import { getUserBySession } from '~/api/auth'
import { User } from '~/models/user'

const Profile: FC = () => {
	const [user, setUser] = useState<User | null>(null)

	const [searchParams] = useSearchParams()

	const userId = searchParams.get('session')
	console.log(searchParams)

	useEffect(() => {
		getUser(userId)
	}, [searchParams])

	const getUser = async (session: string) => {
		try {
			const userData = await getUserBySession(session)
			setUser(userData)
		} catch (error) {
			console.error('Error fetching user:', error)
		}
	}

	return (
		<div>
			{user && (
				<>
					<p>User ID: {user.id}</p>
					<p>User Name: {user.username}</p>
					<img
						src={`http://92.51.45.202:8000/image?username=${user.username}`}
						alt=''
					/>
				</>
			)}
		</div>
	)
}

export default Profile
