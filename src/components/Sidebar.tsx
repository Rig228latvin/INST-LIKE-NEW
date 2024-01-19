import SubmitButton from './SubmitButton'

export const Sidebar = () => {
	const names = [
		'Профиль',
		'Главная',
		'Поиск',
		'Интересное',
		'Сообщения',
		'Уведомления',
	]
	return (
		<div className='flex bg-background p-4 min-h-screen h-full flex-col gap-4 min-w-fit px-8 items-center'>
			<h1>LOGO</h1>
			{names.map(e => (
				<SubmitButton classname='min-w-full'>{e}</SubmitButton>
			))}
		</div>
	)
}
