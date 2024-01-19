import React from 'react'

interface SubmitButtonProps {
	children: string
	onClick?: () => void
	classname?: string
}

const SubmitButton: React.FC<SubmitButtonProps> = ({
	children,
	onClick,
	classname,
}) => {
	return (
		<button
			type='button'
			onClick={onClick}
			className={`bg-primary px-8 py-[10px] transition-all text-white font-bold  hover:opacity-50 hover:scale-105 rounded-full ${classname}`}
		>
			{children}
		</button>
	)
}

export default SubmitButton
