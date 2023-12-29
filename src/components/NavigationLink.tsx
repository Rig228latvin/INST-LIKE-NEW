import React from 'react'
import { useNavigate } from 'react-router-dom'

type Props = {
	name: string
	path: string
}

const NavigationLink: React.FC<Props> = ({ path, name }) => {
	const navigate = useNavigate()

	const handleClick = () => {
		navigate(path)
	}

	return (
		<div className='pt-2' onClick={handleClick} style={{ cursor: 'pointer' }}>
			{name}
		</div>
	)
}

export default NavigationLink
