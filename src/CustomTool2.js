// src/CustomTool2.js
import React, { useState } from 'react';

const CustomTool2 = () => {
    const [items, setItems] = useState([]);
    const [newItem, setNewItem] = useState('');

    const addItem = () => {
        setItems([...items, newItem]);
        setNewItem('');
    };

    return ( <div>
        <h2> Checklist </h2> <
        input type = "text"
        value = { newItem }
        onChange = {
            (e) => setNewItem(e.target.value) }
        /> <button onClick = { addItem } > Add Item </button> 
        <ul> {
            items.map((item, index) => ( 
                <li key = { index } > { item } </li>
            ))
        } </ul> </div>
    );
};

export default CustomTool2;