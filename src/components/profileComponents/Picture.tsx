import { FC } from 'react'

interface IPicture {
	username: string
	code: number
}

const Picture: FC<IPicture> = ({ code, username }) => (
	<img
		className='max-h-[250px] min-w-[250px] object-cover p-8 rounded-full'
		src={`http://92.51.45.202:8000/image?username=${username}`}
		alt={`${code}`}
	/>
)

export default Picture
