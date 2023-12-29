import React from 'react'

interface InputFieldProps {
	label: string
	type: string
	value: string
	onChange: (value: string) => void
	placeholder?: string
}

const InputField: React.FC<InputFieldProps> = ({
	label,
	type,
	value,
	onChange,
	placeholder = '',
}) => {
	return (
		<div className='mb-4'>
			<label
				className='block text-gray-700 text-sm font-bold mb-2'
				htmlFor={label}
			>
				{label}
			</label>
			<input
				className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
				id={label}
				type={type}
				placeholder={placeholder}
				value={value}
				onChange={e => onChange(e.target.value)}
			/>
		</div>
	)
}

export default InputField
