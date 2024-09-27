import { useState } from 'react';
import './App.css';

const App = () => {
    const [state, setState] = useState([
        { 'name': 'ali' },
        { 'name': 'mohammad' },
        { 'name': 'moha' }
    ]);

    const handleDelete = (nameToDelete) => {
        setState(state.filter(item => item.name !== nameToDelete));
    };

    return (
        <div className='flex gap-3 m-3 justify-center flex-col'>
            {state.map(item => (
                <div key={item.name} className="flex items-center gap-3">
                    <h3>{item.name}</h3>
                    <button
                        className='bg-red-500 text-white p-3 rounded-sm'
                        onClick={() => handleDelete(item.name)}
                    >
                        delete
                    </button>
                </div>
            ))}
        </div>
    );
}

export default App;