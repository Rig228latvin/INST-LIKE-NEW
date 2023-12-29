import React from 'react'

interface SubmitButtonProps {
	text: string
	onClick: () => void
}

const SubmitButton: React.FC<SubmitButtonProps> = ({ text, onClick }) => {
	return (
		<button
			type='button'
			onClick={onClick}
			className='bg-background px-8 py-[10px] transition-all bg-blue-500 hover:bg-blue-700 text-white font-bold  hover:opacity-50 hover:scale-105 rounded-full'
		>
			{text}
		</button>
	)
}

export default SubmitButton
