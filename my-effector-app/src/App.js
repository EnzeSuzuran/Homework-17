import React, { useEffect } from 'react';
import { useStore } from 'effector-react';
import { itemsStore, fetchItems, addItem } from './store/itemsStore';
import './App.css';

function App() {
    const items = useStore(itemsStore);

    useEffect(() => {
        fetchItems();
    }, []);

    const handleAddItem = () => {
        const newItem = `Item ${items.length + 1}`;
        addItem(newItem);
    };

    return (
        <div>
            <h1>Список элементов</h1>
            <button onClick={handleAddItem}>Добавить элемент</button>
            <ul>
                {items.map((item, index) => (
                    <li key={index}>{item}</li>
                ))}
            </ul>
        </div>
    );
}

export default App;
