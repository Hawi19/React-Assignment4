
import { useState } from 'react';
import AddItemForm from './AddItemForm';
import ItemList from './ItemList';

const App = () => {
  const [items, setItems] = useState([]);

  const addItem = (newItem) => {
    setItems([...items, newItem]);
  };

  const removeitem = (index) => {
    setItems(items.filter((_, i) => i !== index));
  };

  return (
    <div className='container'>
      <h1>Item List</h1>
      <AddItemForm onAdd={addItem} />
      <ItemList items={items} removeitem={removeitem} />
    </div>
  );
};

export default App;