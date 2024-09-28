import ReactDOM from 'react-dom'; // Corrected: Capital 'R' in ReactDOM  
import App from './App.js';
import './index.css';
import { BrowserRouter } from 'react-router-dom';

ReactDOM.render(
    <BrowserRouter>
        <App />
    </BrowserRouter>,
    document.getElementById('root')
);