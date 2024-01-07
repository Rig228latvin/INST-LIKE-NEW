import axios from 'axios'
import { User } from '~/models/user'

export const signin = async (username: string, password: string) => {
	const response = await axios.get<string>(
		`http://92.51.45.202:8000/session?username=${username}&password=${password}`
	)
	console.log(response.data)
	return response.data
}
export const getUserBySession = async (session: string) => {
	const user = await axios.get<User>(
		`http://92.51.45.202:8000/users/login?session=${session}`
	)
	console.log(user)
	return user.data
}
