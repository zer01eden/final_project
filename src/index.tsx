import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {
	BrowserRouter,
	createBrowserRouter,
	RouterProvider,
} from 'react-router-dom';
import ErrorPage from './components/error-page';
import Person from './components/Person';
import About from './components/About';
import Fabric from './components/Fabric';

const router = createBrowserRouter([
	{
		path: '/',
		element: <App />,
		errorElement: <ErrorPage />,
	},
	{
		path: '/:id',
		element: <Person />,
		errorElement: <ErrorPage />,
	},
	{
		path: '/About',
		element: <About />,
		errorElement: <ErrorPage />,
	},
	{
		path: '/Fabric',
		element: <Fabric />,
		errorElement: <ErrorPage />,
	},
]);

const root = ReactDOM.createRoot(
	document.getElementById('root') as HTMLElement
);
root.render(
	<React.StrictMode>
		{/* <BrowserRouter> */}
		<RouterProvider router={router} />
		{/* </BrowserRouter> */}
	</React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
