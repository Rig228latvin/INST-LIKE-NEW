import { setupStore } from '@store/store.ts'
import '@styles/index.css'
import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Authorization from './pages/Authorization'
import Profile from './pages/Profile'
import Registration from './pages/Registration'

const router = createBrowserRouter([
	{
		path: '/',
		element: <Authorization />,
	},
	{
		path: '/registr',
		element: <Registration />,
	},
	{
		path: '/profile/?session=?',
		element: <Profile />,
	},
])

const store = setupStore()

ReactDOM.createRoot(document.getElementById('root')!).render(
	<React.StrictMode>
		<Provider store={store}>
			<RouterProvider router={router} />
		</Provider>
	</React.StrictMode>
)
