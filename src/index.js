import ReactDOM from 'react-dom'; // Corrected: Capital 'R' in ReactDOM  
import App from './App.js';
import './index.css';
import { BrowserRouter, RouterProvider, createBrowserRouter } from 'react-router-dom';

const router = createBrowserRouter([
    {
        path: '/*',
        element: <App />
    }
])

ReactDOM.render(
    <RouterProvider router={router}/>,
    document.getElementById('root')
);