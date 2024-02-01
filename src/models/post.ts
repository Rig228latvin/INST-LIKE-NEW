import { User, mockUser } from './user'

export interface Post {
	imgUrl: string
	user: User
}
export const mockPost: Post = {
	imgUrl:
		'https://media.istockphoto.com/id/1148165576/ru/%D1%84%D0%BE%D1%82%D0%BE/%D1%87%D0%B5%D1%80%D0%BD%D1%8B%D0%B5-%D0%B8-%D0%B6%D0%B5%D0%BB%D1%82%D1%8B%D0%B5-%D0%B1%D0%B0%D0%BD%D0%B0%D0%BD%D1%8B-%D0%B8%D0%B7%D0%BE%D0%BB%D0%B8%D1%80%D0%BE%D0%B2%D0%B0%D0%BD%D1%8B-%D0%BD%D0%B0-%D0%B1%D0%B5%D0%BB%D0%BE%D0%BC-%D1%84%D0%BE%D0%BD%D0%B5-%D1%83%D1%80%D0%BE%D0%B4%D0%BB%D0%B8%D0%B2%D1%8B%D0%B5-%D1%84%D1%80%D1%83%D0%BA%D1%82%D1%8B-%D0%BD%D0%B5%D0%BF%D1%80%D0%B0%D0%B2%D0%B8%D0%BB%D1%8C%D0%BD%D0%BE%D0%B5-%D1%85%D1%80%D0%B0%D0%BD%D0%B5%D0%BD%D0%B8%D0%B5-%D0%B1%D0%B0%D0%BD%D0%B0%D0%BD%D0%BE%D0%B2.jpg?s=1024x1024&w=is&k=20&c=psgn0jZoOKr8JKvxevzX-PYOnzXKahiKmE8hLkEdM8s=',
	user: mockUser,
}
export const mockPostsList: Post[] = [
	mockPost,
	mockPost,
	mockPost,
	mockPost,
	mockPost,
]
